// PWA ikonlarını (192/512 PNG) bağımlılıksız üretir: koyu zemin + amber elmas.
import { writeFileSync } from "node:fs";
import { deflateSync } from "node:zlib";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const BG = [10, 10, 11];      // #0a0a0b
const AMBER = [245, 166, 35]; // #f5a623

function crc32(buf) {
  let c, crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = (crc ^ buf[i]) & 0xff;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    crc = (crc >>> 8) ^ c;
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

function makePng(size) {
  const c = size / 2;
  const rDiamond = size * 0.32;   // dış elmas yarıçapı
  const rHole = size * 0.13;      // iç boşluk
  const corner = size * 0.18;     // köşe yuvarlama (maskable için zemin tam kare kalır)

  const raw = Buffer.alloc(size * (1 + size * 4));
  let off = 0;
  for (let y = 0; y < size; y++) {
    raw[off++] = 0; // filter: none
    for (let x = 0; x < size; x++) {
      // yuvarlatılmış köşe dışı → şeffaf değil, zemin (maskable güvenliği için tam dolu)
      const dx = Math.max(corner - x, x - (size - 1 - corner), 0);
      const dy = Math.max(corner - y, y - (size - 1 - corner), 0);
      const outside = dx * dx + dy * dy > corner * corner;
      const man = Math.abs(x - c) + Math.abs(y - c);
      let px = outside ? BG : man <= rHole ? BG : man <= rDiamond ? AMBER : BG;
      raw[off++] = px[0];
      raw[off++] = px[1];
      raw[off++] = px[2];
      raw[off++] = 255;
    }
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8;  // bit depth
  ihdr[9] = 6;  // RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw)),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

for (const size of [192, 512]) {
  const out = join(ROOT, "web", "public", `icon-${size}.png`);
  writeFileSync(out, makePng(size));
  console.log(`✓ ${out}`);
}

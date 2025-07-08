import HeroImage from "/assets/hero-img.jpg";

export const DataImage = {
  HeroImage,
};

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1000",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Ortodox Shopping App (on Progress)",
    desk: "Ortodox Shopping App adalah platform belanja online yang berfokus pada produk fashion modern. Dirancang dengan antarmuka yang bersih dan responsif, pengguna dapat menjelajahi koleksi produk, melakukan pembayaran online, dan mendapatkan pengalaman belanja yang efisien.",
    tools: ["React JS", "React Native", "Tailwind CSS", "Midtrans", "Laravel", "MySQL", "PHP", "JQuery"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "KarirKu",
    desk: "KarirKu adalah platform karir yang dirancang khusus untuk generasi muda. Pengguna dapat membuat profil profesional, menampilkan pengalaman dan keterampilan, serta mencari lowongan kerja atau magang yang sesuai dengan minat mereka.",
    tools: ["Figma"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Rental Audio App (MoriaSound)",
    desk: "MoriaSound adalah aplikasi berbasis desktop yang dirancang untuk memudahkan pengelolaan penyewaan alat audio dan pencatatan event. Aplikasi ini mencakup fitur manajemen pelanggan, jadwal event, data transaksi, serta informasi kontak dan lokasi usaha dalam satu dashboard yang praktis dan efisien.",
    tools: ["Java", "NetBeans", "MySQL", "JQuery"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Matur Pak Wali",
    desk: "Matur Pak Wali adalah website pengaduan masyarakat yang ditujukan untuk warga Surabaya dalam menyampaikan laporan, kritik, maupun saran terkait pelayanan publik atau kondisi lingkungan sekitar. Aplikasi ini bertujuan menjadi jembatan antara warga dan pemerintah kota untuk menciptakan pelayanan yang lebih responsif dan transparan.",
    tools: ["PHP Native", "MySQL", "JQuery", "Bootstrap", "HTML"],
    dad: "500",
  },
];

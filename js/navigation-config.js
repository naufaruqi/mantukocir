/**
 * Navigation Configuration
 * Sumber kebenaran tunggal untuk semua menu navigasi di website
 * Digunakan oleh navbar dan footer untuk memastikan konsistensi
 * 
 * Prinsip Clean Code:
 * - DRY: Mendefinisikan menu sekali, digunakan di mana-mana
 * - Maintainable: Mudah menambah/mengubah menu
 * - Semantic: Struktur jelas dan terorganisir
 */

export const navigationConfig = {
  // Menu utama yang ditampilkan di navbar
  main: [
    {
      label: 'Beranda',
      href: '#hero',
      id: 'nav-beranda',
      description: 'Kembali ke halaman utama'
    },
    {
      label: 'Profile',
      href: '#',
      id: 'nav-profile',
      description: 'Informasi tentang sekolah',
      children: [
        {
          label: 'Sambutan',
          href: 'pages/sambutan.html',
          id: 'nav-profile-sambutan',
          description: 'Sambutan kepala sekolah'
        },
        {
          label: 'Visi & Misi',
          href: '#visi-misi',
          id: 'nav-profile-visi',
          description: 'Visi dan misi madrasah'
        },
        {
          label: 'Guru & Tendik',
          href: 'pages/guru_tendik.html',
          id: 'nav-profile-guru',
          description: 'Data guru dan tenaga kependidikan'
        },
        {
          label: 'Ekskul',
          href: '#ekskul',
          id: 'nav-profile-ekskul',
          description: 'Kegiatan ekstrakurikuler'
        },
        {
          label: 'Fasilitas',
          href: '#fasilitas',
          id: 'nav-profile-fasilitas',
          description: 'Fasilitas sekolah'
        }
      ]
    },
    {
      label: 'Artikel',
      href: '#artikel',
      id: 'nav-artikel',
      description: 'Artikel dan berita sekolah'
    },
    {
      label: 'Informasi',
      href: '#',
      id: 'nav-informasi',
      description: 'Informasi penting sekolah',
      children: [
        {
          label: 'Pengumuman',
          href: '#pengumuman',
          id: 'nav-info-pengumuman',
          description: 'Pengumuman terbaru'
        },
        {
          label: 'Agenda',
          href: '#agenda',
          id: 'nav-info-agenda',
          description: 'Jadwal kegiatan'
        },
        {
          label: 'Prestasi',
          href: '#prestasi',
          id: 'nav-info-prestasi',
          description: 'Prestasi siswa dan sekolah'
        }
      ]
    },
    {
      label: 'PPDB',
      href: '#ppdb',
      id: 'nav-ppdb',
      description: 'Penerimaan Peserta Didik Baru'
    },
    {
      label: 'RDM',
      href: '#rdm',
      id: 'nav-rdm',
      description: 'Rencana Pengembangan Mutu'
    },
    {
      label: 'Kontak',
      href: '#kontak',
      id: 'nav-kontak',
      description: 'Hubungi kami'
    }
  ],

  // Menu footer (subset dari menu utama untuk footer)
  footer: [
    {
      label: 'Beranda',
      href: '#hero'
    },
    {
      label: 'Profile',
      href: '#profile'
    },
    {
      label: 'Artikel',
      href: '#artikel'
    },
    {
      label: 'Informasi',
      href: '#informasi'
    },
    {
      label: 'PPDB',
      href: '#ppdb'
    },
    {
      label: 'RDM',
      href: '#rdm'
    },
    {
      label: 'Kontak',
      href: '#kontak'
    }
  ],

  // Social media links - Update dengan URL yang sebenarnya
  social: [
    {
      name: 'Facebook',
      icon: 'fab fa-facebook-f',
      href: '#',  // TODO: Update dengan URL Facebook yang sebenarnya
      bgColor: '#3b5998',
      id: 'social-facebook'
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      href: '#',  // TODO: Update dengan URL Twitter yang sebenarnya
      bgColor: '#00aced',
      id: 'social-twitter'
    },
    {
      name: 'YouTube',
      icon: 'fab fa-youtube',
      href: '#',  // TODO: Update dengan URL YouTube yang sebenarnya
      bgColor: '#ff0000',
      id: 'social-youtube'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      href: '#',  // TODO: Update dengan URL Instagram yang sebenarnya
      bgColor: '#c13584',
      id: 'social-instagram'
    }
  ],

  // Contact information
  contact: {
    email: 'admin@mansatukotacirebon.sch.id',
    whatsapp: '6282127390095',
    phone: '082127390095',
    address: 'Jl. Pilang Raya No.31, Sukapura, Kec. Kejaksan, Kota Cirebon, Jawa Barat 45122',
    phoneWithFormat: '(0231) 200 098'
  }
};

/**
 * Helper function untuk toggle submenu di mobile
 * Dengan transformasi chevron dan accessibility support
 * 
 * @param {string} menuId - ID dari submenu yang ingin di-toggle
 */
window.toggleSubmenu = function(menuId) {
  const submenu = document.getElementById(menuId);
  const button = event.currentTarget;
  const chevron = button.querySelector('i');

  if (submenu) {
    submenu.classList.toggle('hidden');
    button.setAttribute('aria-expanded', 
      button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
    );
    
    // Rotate chevron icon untuk visual feedback
    if (chevron) {
      chevron.style.transform = submenu.classList.contains('hidden') 
        ? 'rotate(0deg)' 
        : 'rotate(180deg)';
    }
  }
};

/**
 * Toggle mobile menu dengan smooth animation
 * Menampilkan/menyembunyikan drawer menu dari kiri
 */
window.toggleMobileMenu = function() {
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuPanel = document.getElementById('mobile-menu-panel');

  if (mobileMenu && mobileMenuPanel) {
    mobileMenu.classList.toggle('hidden');
    mobileMenuPanel.classList.toggle('-translate-x-full');
    
    // Update aria-hidden attribute
    const isHidden = mobileMenu.classList.contains('hidden');
    mobileMenu.setAttribute('aria-hidden', isHidden);
  }
};

/**
 * Close mobile menu dengan smooth animation
 * Dipanggil ketika user klik link atau tombol close
 */
window.closeMobileMenu = function() {
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuPanel = document.getElementById('mobile-menu-panel');

  if (mobileMenu && mobileMenuPanel) {
    mobileMenu.classList.add('hidden');
    mobileMenuPanel.classList.add('-translate-x-full');
    mobileMenu.setAttribute('aria-hidden', 'true');
  }
};

/**
 * Smooth scroll ke section dengan offset untuk navbar sticky
 * Dipanggil otomatis untuk semua link dengan hash (#)
 */
document.addEventListener('DOMContentLoaded', function() {
  // Handle smooth scroll untuk anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      // Only handle if it's not '#' empty hash
      if (href && href !== '#' && href !== '#profile' && href !== '#informasi') {
        const targetId = href.substring(1);
        const target = document.getElementById(targetId);
        
        if (target) {
          e.preventDefault();
          // Close mobile menu jika terbuka
          window.closeMobileMenu();
          
          // Scroll dengan offset untuk navbar sticky
          const offsetTop = target.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});

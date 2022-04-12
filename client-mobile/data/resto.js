const restaurant = [
   {
      _id: "fsfkl3459usdfl4",
      name: "D'Raja Coffee",
      logoUrl: "https://storage.googleapis.com/assets.paprika.co.id/120x120/592804c99a279.jpg",
      cuisine: ["Restaurant", "Coffee", "Cafe", "Bar"],
      address: "Perumahan Cemara Asri, Jl. Boulevard No. 85 asdasasd sfsdfs sdfsdf ssdfsd ssdf dsfs sdfs",
      // coordinate: String,
      contactNumber: '085234345654',
      openingHours: '08.00 - 22.00',
      available: true,
      capacity: 40,
      mainImagesUrl: 'https://awsimages.detik.net.id/community/media/visual/2020/10/20/bukan-romantis-lampu-remang-remang-di-restoran-bikin-makanan-tak-enak_169.png?w=700&q=90',
      menus: [{
         Food: [
            {
               name: 'Sate Kambing',
               price: 15000,
               imagesUrl: 'https://i0.wp.com/resepkoki.id/wp-content/uploads/2017/04/Resep-Sate-kambing.jpg?fit=1920%2C1280&ssl=1',
               description: 'Gratis BAKSO GORENG ( ISI 8 ) untukmu dengan pesanan min. Rp120.000',
               available: true
            },
            {
               name: 'Sop Ubi',
               price: 10000,
               imagesUrl: 'https://img-global.cpcdn.com/recipes/c9c93860cda69a89/680x482cq70/sop-ubi-khas-makassar-foto-resep-utama.jpg',
               description: 'ayoo kakak di coba menu baru nih SOP UBI ASLI ENAKNYA',
               available: true
            }
         ],
         Drink: [
            {
               name: 'Brown Sugar',
               price: 10000,
               description: 'minuman penyegar dan penambah semangat kerja',
               imagesUrl: 'https://asset.kompas.com/crops/5075RCk7D4TbptAt2LQJB1k2HoQ=/0x0:1000x667/750x500/data/photo/2019/09/09/5d763bb561af1.jpg',
               available: true
            },
            {
               name: 'Ice Cofee Boba',
               description: 'minuman penyegar dan penambah semangat kerja',
               price: 10000,
               imagesUrl: 'https://s0.bukalapak.com/bukalapak-kontenz-production/content_attachments/30545/w-740/60628917_368402263784171_7370288076337054705_n_2.jpg',
               available: true
            }
         ]
      }],
      admin: 1,
   },
   {
      _id: "fghjkyu35dfbt6",
      name: "KFC",
      logoUrl: "https://static.republika.co.id/uploads/images/inpicture_slide/kentucky-fried-chicken-kfc-_131107070842-883.jpg",
      cuisine: ['Reastaurant', 'Fast Food'],
      address: "Jl. Merpati Putih, No. 1 Jakarta Timur",
      // coordinate: String,
      contactNumber: '08456234543',
      openingHours: '08.00 - 22.00',
      available: true,
      capacity: 60,
      mainImagesUrl: 'https://www.goodnewsfromindonesia.id/uploads/post/large-locavore-aa34223c93889103dc991f993c24a215.jpg',
      menus: [{
         Food: [
            {
               name: 'Sate Kambing',
               price: 15000,
               imagesUrl: 'https://i0.wp.com/resepkoki.id/wp-content/uploads/2017/04/Resep-Sate-kambing.jpg?fit=1920%2C1280&ssl=1',
               description: 'Gratis BAKSO GORENG ( ISI 8 ) untukmu dengan pesanan min. Rp120.000',
               available: true
            },
            {
               name: 'Sop Ubi',
               price: 10000,
               imagesUrl: 'https://img-global.cpcdn.com/recipes/c9c93860cda69a89/680x482cq70/sop-ubi-khas-makassar-foto-resep-utama.jpg',
               description: 'ayoo kakak di coba menu baru nih SOP UBI ASLI ENAKNYA',
               available: true
            }
         ],
         Drink: [
            {
               name: 'Brown Sugar',
               price: 10000,
               description: 'minuman penyegar dan penambah semangat kerja',
               imagesUrl: 'https://asset.kompas.com/crops/5075RCk7D4TbptAt2LQJB1k2HoQ=/0x0:1000x667/750x500/data/photo/2019/09/09/5d763bb561af1.jpg',
               available: true
            },
            {
               name: 'Ice Cofee Boba',
               description: 'minuman penyegar dan penambah semangat kerja',
               price: 10000,
               imagesUrl: 'https://s0.bukalapak.com/bukalapak-kontenz-production/content_attachments/30545/w-740/60628917_368402263784171_7370288076337054705_n_2.jpg',
               available: true
            }
         ]
      }],
      admin: 1,
   }
]

export default restaurant
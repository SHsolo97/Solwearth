'use client'

import { Building2, Award, Globe, Scale } from "lucide-react"
import { ScrollToFormButton } from "@/components/scroll-to-form-button"
import Image from "next/image"

interface ClientLogo {
  name: string
  image: string
  category: string
}

const clients: ClientLogo[] = [
  // Hospitality
  { name: "ITC Hotels", image: "/images/clientLogos/ITC_Hotels.png", category: "Hospitality" },
  { name: "Taj Hotels", image: "/images/clientLogos/Taj.png", category: "Hospitality" },
  { name: "Vivanta Hotels", image: "/images/clientLogos/Vivanta_Hotels.png", category: "Hospitality" },
  { name: "JW Marriott", image: "/images/clientLogos/JW_Marriot.png", category: "Hospitality" },
  { name: "Marriott Hotels", image: "/images/clientLogos/Marriot.png", category: "Hospitality" },
  { name: "Hilton Hotels", image: "/images/clientLogos/Hilton_Hotels.png", category: "Hospitality" },
  { name: "W Goa", image: "/images/clientLogos/W_Goa.png", category: "Hospitality" },
  { name: "Novotel Hotels", image: "/images/clientLogos/Novotel_Hotels.png", category: "Hospitality" },
  { name: "Four Points by Sheraton", image: "/images/clientLogos/FourPointsBySheraton.png", category: "Hospitality" },
  { name: "Fairfield by Marriott", image: "/images/clientLogos/FarfieldByMarriot.png", category: "Hospitality" },
  { name: "Hyatt Centric", image: "/images/clientLogos/Hyatt_Centric.png", category: "Hospitality" },
  { name: "GRT Hotels", image: "/images/clientLogos/GRT_Hotel.png", category: "Hospitality" },
  { name: "Turyaa Hotels", image: "/images/clientLogos/Turyaa.png", category: "Hospitality" },
  { name: "Caspia Hotels", image: "/images/clientLogos/Caspia_Hotels.png", category: "Hospitality" },
  { name: "CGH Earth Hotels", image: "/images/clientLogos/CGHEarth_Hotels.png", category: "Hospitality" },
  { name: "Good Earth", image: "/images/clientLogos/GoodEarth.png", category: "Hospitality" },
  { name: "Fragrant Nature", image: "/images/clientLogos/FragrantNature.png", category: "Hospitality" },
  { name: "Punnamada Resort", image: "/images/clientLogos/Punnamada_Resort.png", category: "Hospitality" },
  { name: "Abad Group", image: "/images/clientLogos/Abad_Builders.png", category: "Hospitality" },
  { name: "Welcomhotel", image: "/images/clientLogos/WelcomHotel.png", category: "Hospitality" },
  { name: "Le Royal Meridien", image: "/images/clientLogos/LeRoyalMeredian_Hotel.png", category: "Hospitality" },
  { name: "Leela Kovalam", image: "/images/clientLogos/LeelaKovalam_Hotel.png", category: "Hospitality" },
  { name: "Laila Hotel", image: "/images/clientLogos/Laila_Hotel.png", category: "Hospitality" },
  { name: "Gokulam Grand", image: "/images/clientLogos/GokulamGrand.png", category: "Hospitality" },
  { name: "Zuri Hotels & Resorts", image: "/images/clientLogos/Zuri_HotelsAndResorts.png", category: "Hospitality" },
  { name: "KTDC", image: "/images/clientLogos/KTDC.png", category: "Hospitality" },
  { name: "Azaya Hotels", image: "/images/clientLogos/Azaya.png", category: "Hospitality" },
  { name: "Radhun Resorts", image: "/images/clientLogos/Radhun_Resorts.png", category: "Hospitality" },
  { name: "Paragon Restaurant", image: "/images/clientLogos/Paragon_Restaurant.png", category: "Hospitality" },
  
  // Hospitality - Maldives
  { name: "Adaaran Club Maldives", image: "/images/clientLogos/AdaaranClub_Maldives.png", category: "Hospitality" },
  { name: "Adaaran Prestige Vadoo", image: "/images/clientLogos/AdaaranPrestigeVadooMaldives.png", category: "Hospitality" },
  { name: "Dusit Thani Maldives", image: "/images/clientLogos/DusitThaniResorts_Maldives.png", category: "Hospitality" },
  { name: "Fushifaru Maldives", image: "/images/clientLogos/Fushifaru_Maldives.png", category: "Hospitality" },
  { name: "Heritance Aarah", image: "/images/clientLogos/Heritance_Aarah.png", category: "Hospitality" },
  { name: "Holiday Island Resort", image: "/images/clientLogos/HolidayIsland_Resort.png", category: "Hospitality" },
  { name: "Hudhuran Fushi", image: "/images/clientLogos/HudhuranFushi.png", category: "Hospitality" },
  { name: "Medhupparu Resort", image: "/images/clientLogos/Medhupparu.png", category: "Hospitality" },
  { name: "Royal Island Resort", image: "/images/clientLogos/RoyalIsland_Resort.png", category: "Hospitality" },
  { name: "Villa Nautica Paradise Island", image: "/images/clientLogos/VillaNautica_ParadiseIsland.png", category: "Hospitality" },
  { name: "Villa Park Sun Island", image: "/images/clientLogos/VillaPark_SunIsland_Maldives.png", category: "Hospitality" },
  
  // Hospitality - Seychelles
  { name: "Fregate Island Seychelles", image: "/images/clientLogos/FregateIsland_Seychelles.png", category: "Hospitality" },
  
  // Real Estate & Builders
  { name: "Prestige Group", image: "/images/clientLogos/Prestige.png", category: "Real Estate" },
  { name: "Godrej Properties", image: "/images/clientLogos/GOdrej.png", category: "Real Estate" },
  { name: "Brigade Group", image: "/images/clientLogos/Brigade.png", category: "Real Estate" },
  { name: "Shapoorji Pallonji", image: "/images/clientLogos/Shapoorji_Pallonji.png", category: "Real Estate" },
  { name: "DLF", image: "/images/clientLogos/DLF.png", category: "Real Estate" },
  { name: "Lodha Group", image: "/images/clientLogos/Lodha.png", category: "Real Estate" },
  { name: "Sobha Dew Flower", image: "/images/clientLogos/Sobha_DewFlower.png", category: "Real Estate" },
  { name: "Mahindra Lifespaces", image: "/images/clientLogos/MahindraLifespaces.png", category: "Real Estate" },
  { name: "L&T Realty", image: "/images/clientLogos/LAndT.png", category: "Real Estate" },
  { name: "Indiabulls Real Estate", image: "/images/clientLogos/Indiabulls.png", category: "Real Estate" },
  { name: "Chandak Group", image: "/images/clientLogos/Chandak.png", category: "Real Estate" },
  { name: "JM Housing", image: "/images/clientLogos/JM_Housing.png", category: "Real Estate" },
  { name: "Malabar Developers", image: "/images/clientLogos/Malabar_Developers.png", category: "Real Estate" },
  { name: "SFS Homes", image: "/images/clientLogos/SFS_Homes.png", category: "Real Estate" },
  { name: "Skyline Builders", image: "/images/clientLogos/Skyline.png", category: "Real Estate" },
  { name: "Asset Builders", image: "/images/clientLogos/Asset.png", category: "Real Estate" },
  { name: "Kalyan Developers", image: "/images/clientLogos/Kalyan_Developers.png", category: "Real Estate" },
  { name: "Sattva Group", image: "/images/clientLogos/Sattva.png", category: "Real Estate" },
  { name: "Salapuria Sattva", image: "/images/clientLogos/Salapuria.png", category: "Real Estate" },
  { name: "Eldeco", image: "/images/clientLogos/Eldeco.png", category: "Real Estate" },
  { name: "Ireo", image: "/images/clientLogos/Ireo.png", category: "Real Estate" },
  { name: "Kent Constructions", image: "/images/clientLogos/KentConstructions.png", category: "Real Estate" },
  { name: "Indroyal", image: "/images/clientLogos/Indroyal.png", category: "Real Estate" },
  { name: "Hoysala", image: "/images/clientLogos/Hoysala.png", category: "Real Estate" },
  { name: "Volve Realty", image: "/images/clientLogos/Volve.png", category: "Real Estate" },
  { name: "Artech Realtors", image: "/images/clientLogos/Artech.png", category: "Real Estate" },
  { name: "Aroma Developers", image: "/images/clientLogos/Aroma_Developers.png", category: "Real Estate" },
  { name: "Chakolas Habitat", image: "/images/clientLogos/Chakolas_Habitat.png", category: "Real Estate" },
  { name: "Casadel Builders", image: "/images/clientLogos/Casadel_builders.png", category: "Real Estate" },
  { name: "BuiltTech", image: "/images/clientLogos/BuiltTech.png", category: "Real Estate" },
  { name: "DSR Infra", image: "/images/clientLogos/DSR_Infra.png", category: "Real Estate" },
  { name: "Epitome", image: "/images/clientLogos/Epitome.png", category: "Real Estate" },
  { name: "Favourite Homes", image: "/images/clientLogos/FavouriteHomes.png", category: "Real Estate" },
  { name: "Galaxy Builders", image: "/images/clientLogos/Galaxy.png", category: "Real Estate" },
  { name: "iCloud Homes", image: "/images/clientLogos/iCloudHomes.png", category: "Real Estate" },
  { name: "Melange Astris", image: "/images/clientLogos/Melange_Astris.png", category: "Real Estate" },
  { name: "National Builders", image: "/images/clientLogos/NationalBuilders.png", category: "Real Estate" },
  { name: "PVS Builders", image: "/images/clientLogos/PVS_Builders.png", category: "Real Estate" },
  { name: "Silver Spring", image: "/images/clientLogos/SilverSpring.png", category: "Real Estate" },
  { name: "Suntach Infra Solutions", image: "/images/clientLogos/Suntach_Infra_Solutions.png", category: "Real Estate" },
  { name: "TC One Realtors", image: "/images/clientLogos/TCOne_RealtorsAndDevelopers.png", category: "Real Estate" },
  { name: "Pacifica Companies", image: "/images/clientLogos/PacificaCompanies.png", category: "Real Estate" },
  { name: "Calicut Landmark", image: "/images/clientLogos/CalicutLandMark.png", category: "Real Estate" },
  { name: "Noel Builders", image: "/images/clientLogos/Noel.png", category: "Real Estate" },
  
  // Real Estate - Malaysia
  { name: "Ecoworld Malaysia", image: "/images/clientLogos/Ecoworld_Malaysia.png", category: "Real Estate" },
  
  // Corporate & Industrial
  { name: "Ashok Leyland", image: "/images/clientLogos/AshokLeyland.png", category: "Corporate" },
  { name: "TVS", image: "/images/clientLogos/TVS.png", category: "Corporate" },
  { name: "Wheels India", image: "/images/clientLogos/WheelsIndia.png", category: "Corporate" },
  { name: "Procter & Gamble", image: "/images/clientLogos/PAndG.png", category: "Corporate" },
  { name: "Venky's", image: "/images/clientLogos/Venky's.png", category: "Corporate" },
  { name: "Suguna Foods", image: "/images/clientLogos/SugunaFoods.png", category: "Corporate" },
  { name: "Muthoot Group", image: "/images/clientLogos/MuthootGroup.png", category: "Corporate" },
  { name: "Terumo Penpol", image: "/images/clientLogos/Terumo_Penol.png", category: "Corporate" },
  { name: "IKEA", image: "/images/clientLogos/IKEA.png", category: "Corporate" },
  { name: "Adani Group", image: "/images/clientLogos/Adani.png", category: "Corporate" },
  { name: "Syngene", image: "/images/clientLogos/Syngene.png", category: "Corporate" },
  { name: "Synthite", image: "/images/clientLogos/Synthite.png", category: "Corporate" },
  { name: "Plant Lipids", image: "/images/clientLogos/PlantLipids.png", category: "Corporate" },
  { name: "Anthem Biosciences", image: "/images/clientLogos/AnthemBiosciences.png", category: "Corporate" },
  { name: "Agappe Diagnostics", image: "/images/clientLogos/Agappe.png", category: "Corporate" },
  { name: "Abbott", image: "/images/clientLogos/Abbot.png", category: "Corporate" },
  { name: "SAI", image: "/images/clientLogos/Sai.png", category: "Corporate" },
  { name: "ONGC", image: "/images/clientLogos/ONGC.png", category: "Corporate" },
  { name: "Petronet LNG", image: "/images/clientLogos/PetronetLNG.png", category: "Corporate" },
  { name: "Pokarna Limited", image: "/images/clientLogos/PokarnaLimited.png", category: "Corporate" },
  { name: "MariApps", image: "/images/clientLogos/MariApps.png", category: "Corporate" },
  { name: "Elite", image: "/images/clientLogos/Elite.png", category: "Corporate" },
  { name: "Adlux", image: "/images/clientLogos/Adlux.png", category: "Corporate" },
  
  // Retail
  { name: "Lulu Group", image: "/images/clientLogos/Lulu.png", category: "Retail" },
  { name: "Central Square Mall", image: "/images/clientLogos/CentralSquareMall.png", category: "Retail" },
  { name: "Sports Boulevard", image: "/images/clientLogos/SportsBoulavard.png", category: "Retail" },
  { name: "Y Mall", image: "/images/clientLogos/yMall.png", category: "Retail" },
  
  // Banking & Finance
  { name: "Kotak Mahindra Bank", image: "/images/clientLogos/KotakMahindraBank.png", category: "Banking" },
  { name: "Reserve Bank of India", image: "/images/clientLogos/RBI.png", category: "Banking" },
  { name: "Geojit Financial Services", image: "/images/clientLogos/Geojit.png", category: "Banking" },
  
  // Healthcare
  { name: "Kokilaben Hospital", image: "/images/clientLogos/Kokilaben_Hospital.png", category: "Healthcare" },
  { name: "St. Philomena Hospital", image: "/images/clientLogos/StPhilomenaHospital.png", category: "Healthcare" },
  { name: "Sree Gokulam Medical Centre", image: "/images/clientLogos/SreeGokulam_MedicalCentre.png", category: "Healthcare" },
  { name: "SAI Hospital", image: "/images/clientLogos/Sai_Hospital.png", category: "Healthcare" },
  { name: "MarSleeva Medicity", image: "/images/clientLogos/MarSleeva_Medicity.png", category: "Healthcare" },
  { name: "Jubilee Mission Medical College", image: "/images/clientLogos/JubileeMisionMedicalCollege.png", category: "Healthcare" },
  { name: "St. Thomas Medical College", image: "/images/clientLogos/StThomasMedicalCollege.png", category: "Healthcare" },
  { name: "Giridhar Eye Institute", image: "/images/clientLogos/GiridharEyeInstitute.png", category: "Healthcare" },
  
  // Education
  { name: "IIM Kozhikode", image: "/images/clientLogos/IIM_Kozhikode.png", category: "Education" },
  { name: "IIT Dharwad", image: "/images/clientLogos/IIT_Dhrawad.png", category: "Education" },
  { name: "BITS Ranchi", image: "/images/clientLogos/BITS_Ranchi.png", category: "Education" },
  { name: "St. Joseph's University", image: "/images/clientLogos/StJosephsUniversity.png", category: "Education" },
  { name: "Aga Khan Academy", image: "/images/clientLogos/AgaKhanAcademy.png", category: "Education" },
  { name: "High Rise School", image: "/images/clientLogos/HighRiseSchool.png", category: "Education" },
  
  // Government & Municipal
  { name: "Government of Kerala", image: "/images/clientLogos/GovtOfKerala.png", category: "Government" },
  { name: "Indian Railways", image: "/images/clientLogos/IndianRailways.png", category: "Government" },
  { name: "Vijayawada Municipal Corporation", image: "/images/clientLogos/VijayavadaMunicipalCorporation.png", category: "Government" },
  { name: "Bandaraya Johar Baharu", image: "/images/clientLogos/BandarayaJoharBadaru.png", category: "Government" },
  { name: "Vizhinjam International Seaport", image: "/images/clientLogos/VizhinjamInternationalSeaport.png", category: "Government" },
  { name: "CMFRI", image: "/images/clientLogos/CMFRI.png", category: "Government" },
  { name: "CIRS", image: "/images/clientLogos/CIRS.png", category: "Government" },
  { name: "UNDP", image: "/images/clientLogos/UNDP.png", category: "Government" },
  
  // Associations
  { name: "CREDAI", image: "/images/clientLogos/Credai.png", category: "Associations" },
  { name: "Recca Club", image: "/images/clientLogos/ReccaClub.png", category: "Associations" },
]

// Group clients by category
const categories = Array.from(new Set(clients.map(c => c.category)))

export function ClientsSection() {
  const stats = [
    { icon: Building2, label: "Installations", value: "500+" },
    { icon: Scale, label: "Tonnes Processed Annually", value: "45,000+" },
    { icon: Globe, label: "Countries Served", value: "10+" },
    { icon: Award, label: "Years of Excellence", value: "15+" },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our organic waste converters are the choice of prestigious hotels, corporate offices, 
            educational institutions, and residential complexes across the globe.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Client Logos by Category */}
        {categories.map((category) => {
          const categoryClients = clients.filter(c => c.category === category)
          return (
            <div key={category} className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {categoryClients.map((client, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-gray-100 hover:border-green-200"
                  >
                    <div className="relative w-full h-24 flex items-center justify-center">
                      <Image
                        src={client.image}
                        alt={client.name}
                        width={120}
                        height={96}
                        className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-3xl p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Join Our Growing Family</h3>
              <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
                Become part of the sustainable waste management revolution. 
                Get your free consultation today.
              </p>
              <ScrollToFormButton className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all hover:scale-105 shadow-lg" variant="default">
                Get Started Now
              </ScrollToFormButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

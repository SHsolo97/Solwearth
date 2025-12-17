# Current Client Logos in Solwearth Website
# Use this list to identify which logos in clientLogos folder are NEW

## Already Present (65 clients):

### Hospitality (16 clients)
- ITC Hotels
- Taj Vivanta
- JW Marriott
- Hilton
- W Hotel
- Novotel
- Four Points
- Fairfield
- GRT Hotels
- Turya Hotel
- Caspia Hotel Goa
- CGH Earth
- Good Earth
- Fragrant Nature
- Punnamada Resort
- Cidade de Goa
- Abad Group
- Emperador Emmanuel

### Real Estate & Builders (14 clients)
- Prestige Group
- Godrej Properties
- Brigade World Trade Centre
- Shapoorji Pallonji
- India Bulls
- Pokarna
- Chandak Group
- JM Housing
- Malabar Builders
- Prime Property Developers
- SFS Homes
- Skyline Builders
- Asset Builders
- Kalyan Developers
- Anthem
- Marsleeva

### Corporate & Industrial (11 clients)
- Ashok Leyland
- ONGC
- LNG
- TVS
- Procter & Gamble
- Syngene
- Synthite
- Kent RO
- Venky's
- Ambani Group
- Ashkar
- Noel
- SAI

### Educational (3 clients)
- IIM
- St. Joseph's
- St. Philomena's

### Healthcare (1 client)
- Gokulam Medical Center

### Retail (1 client)
- Lulu

---

## Instructions for identifying NEW logos:

1. Open the public/images/clientLogos folder
2. Go through each screenshot image
3. Check if the company logo is in the list above
4. If NOT in the list, note down:
   - Screenshot filename
   - Company name from the logo
   - Category (Hospitality/Real Estate/Corporate/Education/Healthcare/Retail)

## Format for providing the information:

You can provide the list in any of these formats:

### Format 1 (Simple):
```
Screenshot 2025-12-15 112305.png = Hyatt Hotels (Hospitality)
Screenshot 2025-12-15 112322.png = Oberoi Group (Hospitality)
```

### Format 2 (Grouped):
```
Hospitality:
- Screenshot 2025-12-15 112305.png = Hyatt Hotels
- Screenshot 2025-12-15 112322.png = Oberoi Group

Corporate:
- Screenshot 2025-12-15 112339.png = Infosys
```

Once you provide this information, I will:
1. Create the rename script with all mappings
2. Run the script to rename files
3. Update the clients-section.tsx with all new clients
4. Organize them by category

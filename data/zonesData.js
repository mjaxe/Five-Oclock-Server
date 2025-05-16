const Zone = require('../models/zone')

const zones = [
    // Africa/Abidjan
    new Zone('Africa/Abidjan', 'Côte dIvoire', null, 'Abidjan'),
    new Zone('Africa/Abidjan', 'Côte dIvoire', null, 'Bouaké'),
    new Zone('Africa/Abidjan', 'Côte dIvoire', null, 'Yamoussoukro'),
    new Zone('Africa/Abidjan', 'Côte dIvoire', null, 'San Pedro'),
    new Zone('Africa/Abidjan', 'Côte dIvoire', null, 'Daloa'),

    // Africa/Accra
    new Zone("Africa/Accra", "Ghana", null, "Accra"),
    new Zone("Africa/Accra", "Ghana", null, "Kumasi"),
    new Zone("Africa/Accra", "Ghana", null, "Tamale"),
    new Zone("Africa/Accra", "Ghana", null, "Sekondi-Takoradi"),
    new Zone("Africa/Accra", "Ghana", null, "Cape Coast"),

    // Africa/Addis_Ababa (Ethiopia)
    new Zone("Africa/Addis_Ababa", "Ethiopia", null, "Addis Ababa"),
    new Zone("Africa/Addis_Ababa", "Ethiopia", null, "Gondar"),
    new Zone("Africa/Addis_Ababa", "Ethiopia", null, "Bahir Dar"),
    new Zone("Africa/Addis_Ababa", "Ethiopia", null, "Dire Dawa"),
    new Zone("Africa/Addis_Ababa", "Ethiopia", null, "Mekelle"),

    // Africa/Algiers (Algeria)
    new Zone("Africa/Algiers", "Algeria", null, "Algiers"),
    new Zone("Africa/Algiers", "Algeria", null, "Oran"),
    new Zone("Africa/Algiers", "Algeria", null, "Constantine"),
    new Zone("Africa/Algiers", "Algeria", null, "Annaba"),
    new Zone("Africa/Algiers", "Algeria", null, "Blida"),

    // Africa/Asmera (Eritrea)
    new Zone("Africa/Asmera", "Eritrea", null, "Asmara"),
    new Zone("Africa/Asmera", "Eritrea", null, "Keren"),
    new Zone("Africa/Asmera", "Eritrea", null, "Massawa"),
    new Zone("Africa/Asmera", "Eritrea", null, "Assab"),
    new Zone("Africa/Asmera", "Eritrea", null, "Mendefera"),

    // Africa/Bamako (Mali)
    new Zone("Africa/Bamako", "Mali", null, "Bamako"),
    new Zone("Africa/Bamako", "Mali", null, "Sikasso"),
    new Zone("Africa/Bamako", "Mali", null, "Kayes"),
    new Zone("Africa/Bamako", "Mali", null, "Ségou"),
    new Zone("Africa/Bamako", "Mali", null, "Mopti"),

    // Africa/Bangui (Central African Republic)
    new Zone("Africa/Bangui", "Central African Republic", null, "Bangui"),
    new Zone("Africa/Bangui", "Central African Republic", null, "Bimbo"),
    new Zone("Africa/Bangui", "Central African Republic", null, "Berbérati"),
    new Zone("Africa/Bangui", "Central African Republic", null, "Bossangoa"),
    new Zone("Africa/Bangui", "Central African Republic", null, "Bria"),

    // Africa/Banjul (The Gambia)
    new Zone("Africa/Banjul", "Gambia", null, "Banjul"),
    new Zone("Africa/Banjul", "Gambia", null, "Serekunda"),
    new Zone("Africa/Banjul", "Gambia", null, "Brikama"),
    new Zone("Africa/Banjul", "Gambia", null, "Bakau"),
    new Zone("Africa/Banjul", "Gambia", null, "Farafenni"),

    // Africa/Bissau (Guinea-Bissau)
    new Zone("Africa/Bissau", "Guinea-Bissau", null, "Bissau"),
    new Zone("Africa/Bissau", "Guinea-Bissau", null, "Bafatá"),
    new Zone("Africa/Bissau", "Guinea-Bissau", null, "Gabú"),
    new Zone("Africa/Bissau", "Guinea-Bissau", null, "Bissorã"),
    new Zone("Africa/Bissau", "Guinea-Bissau", null, "Bolama"),

    // Africa/Blantyre (Malawi)
    new Zone("Africa/Blantyre", "Malawi", null, "Blantyre"),
    new Zone("Africa/Blantyre", "Malawi", null, "Lilongwe"),
    new Zone("Africa/Blantyre", "Malawi", null, "Mzuzu"),
    new Zone("Africa/Blantyre", "Malawi", null, "Zomba"),
    new Zone("Africa/Blantyre", "Malawi", null, "Mangochi"),

    // Africa/Brazzaville (Republic of the Congo)
    new Zone("Africa/Brazzaville", "Republic of the Congo", null, "Brazzaville"),
    new Zone("Africa/Brazzaville", "Republic of the Congo", null, "Pointe-Noire"),
    new Zone("Africa/Brazzaville", "Republic of the Congo", null, "Dolisie"),
    new Zone("Africa/Brazzaville", "Republic of the Congo", null, "Nkayi"),
    new Zone("Africa/Brazzaville", "Republic of the Congo", null, "Owando"),

    // Africa/Bujumbura (Burundi)
    new Zone("Africa/Bujumbura", "Burundi", null, "Bujumbura"),
    new Zone("Africa/Bujumbura", "Burundi", null, "Gitega"),
    new Zone("Africa/Bujumbura", "Burundi", null, "Ngozi"),
    new Zone("Africa/Bujumbura", "Burundi", null, "Ruyigi"),
    new Zone("Africa/Bujumbura", "Burundi", null, "Cibitoke"),

    // Africa/Cairo (Egypt)
    new Zone("Africa/Cairo", "Egypt", null, "Cairo"),
    new Zone("Africa/Cairo", "Egypt", null, "Alexandria"),
    new Zone("Africa/Cairo", "Egypt", null, "Giza"),
    new Zone("Africa/Cairo", "Egypt", null, "Shubra El-Kheima"),
    new Zone("Africa/Cairo", "Egypt", null, "Port Said"),

    // Africa/Casablanca (Morocco)
    new Zone("Africa/Casablanca", "Morocco", null, "Casablanca"),
    new Zone("Africa/Casablanca", "Morocco", null, "Rabat"),
    new Zone("Africa/Casablanca", "Morocco", null, "Marrakesh"),
    new Zone("Africa/Casablanca", "Morocco", null, "Fes"),
    new Zone("Africa/Casablanca", "Morocco", null, "Tangier"),

    // Africa/Ceuta (Spain - Autonomous city)
    new Zone("Africa/Ceuta", "Spain", "Ceuta", "Ceuta"),
    new Zone("Africa/Ceuta", "Spain", "Ceuta", "El Príncipe Alfonso"),
    new Zone("Africa/Ceuta", "Spain", "Ceuta", "Jardín vertical"),
    new Zone("Africa/Ceuta", "Spain", "Ceuta", "Hadar"),
    new Zone("Africa/Ceuta", "Spain", "Ceuta", "Bermudo Soriano"),

    // Africa/Conakry (Guinea)
    new Zone("Africa/Conakry", "Guinea", null, "Conakry"),
    new Zone("Africa/Conakry", "Guinea", "Kindia", "Kindia"),
    new Zone("Africa/Conakry", "Guinea", "Nzérékoré", "Nzérékoré"),
    new Zone("Africa/Conakry", "Guinea", "Kankan", "Kankan"),
    new Zone("Africa/Conakry", "Guinea", "Labé", "Labé"),

    // Africa/Dakar (Senegal)
    new Zone("Africa/Dakar", "Senegal", null, "Dakar"),
    new Zone("Africa/Dakar", "Senegal", "Thiès", "Thiès"),
    new Zone("Africa/Dakar", "Senegal", "Saint-Louis", "Saint-Louis"),
    new Zone("Africa/Dakar", "Senegal", "Ziguinchor", "Ziguinchor"),
    new Zone("Africa/Dakar", "Senegal", "Kaolack", "Kaolack"),

    // Africa/Dar_es_Salaam (Tanzania)
    new Zone("Africa/Dar_es_Salaam", "Tanzania", null, "Dar es Salaam"),
    new Zone("Africa/Dar_es_Salaam", "Tanzania", "Arusha", "Arusha"),
    new Zone("Africa/Dar_es_Salaam", "Tanzania", "Mwanza", "Mwanza"),
    new Zone("Africa/Dar_es_Salaam", "Tanzania", "Dodoma", "Dodoma"),
    new Zone("Africa/Dar_es_Salaam", "Tanzania", "Mbeya", "Mbeya"),

    // Africa/Djibouti (Djibouti)
    new Zone("Africa/Djibouti", "Djibouti", null, "Djibouti"),
    new Zone("Africa/Djibouti", "Djibouti", null, "Balbala"),
    new Zone("Africa/Djibouti", "Djibouti", null, "Ali Sabieh"),
    new Zone("Africa/Djibouti", "Djibouti", null, "Tadjoura"),
    new Zone("Africa/Djibouti", "Djibouti", null, "Obock"),

    // Africa/Douala (Cameroon)
    new Zone("Africa/Douala", "Cameroon", "Littoral", "Douala"),
    new Zone("Africa/Douala", "Cameroon", "Centre", "Yaoundé"),
    new Zone("Africa/Douala", "Cameroon", "North West", "Bamenda"),
    new Zone("Africa/Douala", "Cameroon", "South West", "Buea"),
    new Zone("Africa/Douala", "Cameroon", "West", "Bafoussam"),

    // Africa/El_Aaiun (Western Sahara / Morocco)
    new Zone("Africa/El_Aaiun", "Western Sahara", null, "El Aaiún"),
    new Zone("Africa/El_Aaiun", "Western Sahara", null, "Smara"),
    new Zone("Africa/El_Aaiun", "Western Sahara", null, "Dakhla"),
    new Zone("Africa/El_Aaiun", "Western Sahara", null, "Laayoune Plage"),
    new Zone("Africa/El_Aaiun", "Western Sahara", null, "Bir Gandouz"),

    // Africa/Freetown (Sierra Leone)
    new Zone("Africa/Freetown", "Sierra Leone", null, "Freetown"),
    new Zone("Africa/Freetown", "Sierra Leone", "Bo", "Bo"),
    new Zone("Africa/Freetown", "Sierra Leone", "Kenema", "Kenema"),
    new Zone("Africa/Freetown", "Sierra Leone", "Makeni", "Makeni"),
    new Zone("Africa/Freetown", "Sierra Leone", "Koidu", "Koidu"),

    // Africa/Gaborone (Botswana)
    new Zone("Africa/Gaborone", "Botswana", null, "Gaborone"),
    new Zone("Africa/Gaborone", "Botswana", null, "Francistown"),
    new Zone("Africa/Gaborone", "Botswana", null, "Maun"),
    new Zone("Africa/Gaborone", "Botswana", null, "Molepolole"),
    new Zone("Africa/Gaborone", "Botswana", null, "Serowe"),

    // Africa/Harare (Zimbabwe)
    new Zone("Africa/Harare", "Zimbabwe", null, "Harare"),
    new Zone("Africa/Harare", "Zimbabwe", null, "Bulawayo"),
    new Zone("Africa/Harare", "Zimbabwe", null, "Mutare"),
    new Zone("Africa/Harare", "Zimbabwe", null, "Gweru"),
    new Zone("Africa/Harare", "Zimbabwe", null, "Masvingo"),

    // Africa/Johannesburg (South Africa)
    new Zone("Africa/Johannesburg", "South Africa", "Gauteng", "Johannesburg"),
    new Zone("Africa/Johannesburg", "South Africa", "Western Cape", "Cape Town"),
    new Zone("Africa/Johannesburg", "South Africa", "KwaZulu-Natal", "Durban"),
    new Zone("Africa/Johannesburg", "South Africa", "Gauteng", "Pretoria"),
    new Zone("Africa/Johannesburg", "South Africa", "Eastern Cape", "Port Elizabeth"),

    // Africa/Juba (South Sudan)
    new Zone("Africa/Juba", "South Sudan", "Central Equatoria", "Juba"),
    new Zone("Africa/Juba", "South Sudan", "Upper Nile", "Malakal"),
    new Zone("Africa/Juba", "South Sudan", "Jonglei", "Bor"),
    new Zone("Africa/Juba", "South Sudan", "Unity", "Bentiu"),
    new Zone("Africa/Juba", "South Sudan", "Western Bahr el Ghazal", "Wau"),

    // Africa/Kampala (Uganda)
    new Zone("Africa/Kampala", "Uganda", null, "Kampala"),
    new Zone("Africa/Kampala", "Uganda", "Northern", "Gulu"),
    new Zone("Africa/Kampala", "Uganda", "Western", "Mbarara"),
    new Zone("Africa/Kampala", "Uganda", "Eastern", "Mbale"),
    new Zone("Africa/Kampala", "Uganda", "Central", "Mukono"),

    // Africa/Khartoum (Sudan)
    new Zone("Africa/Khartoum", "Sudan", null, "Khartoum"),
    new Zone("Africa/Khartoum", "Sudan", "South Darfur", "Nyala"),
    new Zone("Africa/Khartoum", "Sudan", "Kassala", "Kassala"),
    new Zone("Africa/Khartoum", "Sudan", "Gezira", "Wad Madani"),
    new Zone("Africa/Khartoum", "Sudan", "North Kordofan", "El-Obeid"),

    // Africa/Kigali (Rwanda)
    new Zone("Africa/Kigali", "Rwanda", null, "Kigali"),
    new Zone("Africa/Kigali", "Rwanda", null, "Butare"),
    new Zone("Africa/Kigali", "Rwanda", null, "Gisenyi"),
    new Zone("Africa/Kigali", "Rwanda", null, "Muhanga"),
    new Zone("Africa/Kigali", "Rwanda", null, "Byumba"),

    // Africa/Kinshasa (DR Congo - western region)
    new Zone("Africa/Kinshasa", "DR Congo", "Kinshasa", "Kinshasa"),
    new Zone("Africa/Kinshasa", "DR Congo", "Kongo-Central", "Matadi"),
    new Zone("Africa/Kinshasa", "DR Congo", "Kwilu", "Kikwit"),
    new Zone("Africa/Kinshasa", "DR Congo", "Mai-Ndombe", "Inongo"),
    new Zone("Africa/Kinshasa", "DR Congo", "Tshuapa", "Boende"),

    // Africa/Lagos (Nigeria)
    new Zone("Africa/Lagos", "Nigeria", "Lagos", "Lagos"),
    new Zone("Africa/Lagos", "Nigeria", "FCT", "Abuja"),
    new Zone("Africa/Lagos", "Nigeria", "Rivers", "Port Harcourt"),
    new Zone("Africa/Lagos", "Nigeria", "Kano", "Kano"),
    new Zone("Africa/Lagos", "Nigeria", "Kaduna", "Kaduna"),

    // Africa/Libreville (Gabon)
    new Zone("Africa/Libreville", "Gabon", null, "Libreville"),
    new Zone("Africa/Libreville", "Gabon", null, "Port-Gentil"),
    new Zone("Africa/Libreville", "Gabon", null, "Franceville"),
    new Zone("Africa/Libreville", "Gabon", null, "Oyem"),
    new Zone("Africa/Libreville", "Gabon", null, "Mouila"),

    // Africa/Lome (Togo)
    new Zone("Africa/Lome", "Togo", null, "Lomé"),
    new Zone("Africa/Lome", "Togo", null, "Sokodé"),
    new Zone("Africa/Lome", "Togo", null, "Kara"),
    new Zone("Africa/Lome", "Togo", null, "Atakpamé"),
    new Zone("Africa/Lome", "Togo", null, "Dapaong"),

    // Africa/Luanda (Angola)
    new Zone("Africa/Luanda", "Angola", null, "Luanda"),
    new Zone("Africa/Luanda", "Angola", "Huíla", "Lubango"),
    new Zone("Africa/Luanda", "Angola", "Benguela", "Benguela"),
    new Zone("Africa/Luanda", "Angola", "Huambo", "Huambo"),
    new Zone("Africa/Luanda", "Angola", "Cabinda", "Cabinda"),

    // Africa/Lubumbashi (DR Congo - eastern region)
    new Zone("Africa/Lubumbashi", "DR Congo", "Haut-Katanga", "Lubumbashi"),
    new Zone("Africa/Lubumbashi", "DR Congo", "Lualaba", "Kolwezi"),
    new Zone("Africa/Lubumbashi", "DR Congo", "Tanganyika", "Kalemie"),
    new Zone("Africa/Lubumbashi", "DR Congo", "South Kivu", "Bukavu"),
    new Zone("Africa/Lubumbashi", "DR Congo", "North Kivu", "Goma"),

    // Africa/Lusaka (Zambia)
    new Zone("Africa/Lusaka", "Zambia", null, "Lusaka"),
    new Zone("Africa/Lusaka", "Zambia", null, "Ndola"),
    new Zone("Africa/Lusaka", "Zambia", null, "Kitwe"),
    new Zone("Africa/Lusaka", "Zambia", null, "Livingstone"),
    new Zone("Africa/Lusaka", "Zambia", null, "Chipata"),

    // Africa/Malabo (Equatorial Guinea)
    new Zone("Africa/Malabo", "Equatorial Guinea", null, "Malabo"),
    new Zone("Africa/Malabo", "Equatorial Guinea", null, "Bata"),
    new Zone("Africa/Malabo", "Equatorial Guinea", null, "Ebebiyin"),
    new Zone("Africa/Malabo", "Equatorial Guinea", null, "Evinayong"),
    new Zone("Africa/Malabo", "Equatorial Guinea", null, "Mikomeseng"),

    // Africa/Maputo (Mozambique)
    new Zone("Africa/Maputo", "Mozambique", null, "Maputo"),
    new Zone("Africa/Maputo", "Mozambique", null, "Beira"),
    new Zone("Africa/Maputo", "Mozambique", null, "Nampula"),
    new Zone("Africa/Maputo", "Mozambique", null, "Quelimane"),
    new Zone("Africa/Maputo", "Mozambique", null, "Tete"),

    // Africa/Maseru (Lesotho)
    new Zone("Africa/Maseru", "Lesotho", null, "Maseru"),
    new Zone("Africa/Maseru", "Lesotho", null, "Leribe"),
    new Zone("Africa/Maseru", "Lesotho", null, "Mafeteng"),
    new Zone("Africa/Maseru", "Lesotho", null, "Mohale's Hoek"),
    new Zone("Africa/Maseru", "Lesotho", null, "Qacha's Nek"),

    // Africa/Mbabane (Eswatini)
    new Zone("Africa/Mbabane", "Eswatini", null, "Mbabane"),
    new Zone("Africa/Mbabane", "Eswatini", null, "Manzini"),
    new Zone("Africa/Mbabane", "Eswatini", null, "Lobamba"),
    new Zone("Africa/Mbabane", "Eswatini", null, "Big Bend"),
    new Zone("Africa/Mbabane", "Eswatini", null, "Siteki"),

    // Africa/Mogadishu (Somalia)
    new Zone("Africa/Mogadishu", "Somalia", null, "Mogadishu"),
    new Zone("Africa/Mogadishu", "Somalia", null, "Hargeisa"),
    new Zone("Africa/Mogadishu", "Somalia", null, "Bosaso"),
    new Zone("Africa/Mogadishu", "Somalia", null, "Baidoa"),
    new Zone("Africa/Mogadishu", "Somalia", null, "Kismayo"),

    // Africa/Monrovia (Liberia)
    new Zone("Africa/Monrovia", "Liberia", null, "Monrovia"),
    new Zone("Africa/Monrovia", "Liberia", null, "Gbarnga"),
    new Zone("Africa/Monrovia", "Liberia", null, "Buchanan"),
    new Zone("Africa/Monrovia", "Liberia", null, "Zwedru"),
    new Zone("Africa/Monrovia", "Liberia", null, "Voinjama"),

    // Africa/Nairobi (Kenya)
    new Zone("Africa/Nairobi", "Kenya", null, "Nairobi"),
    new Zone("Africa/Nairobi", "Kenya", null, "Mombasa"),
    new Zone("Africa/Nairobi", "Kenya", null, "Kisumu"),
    new Zone("Africa/Nairobi", "Kenya", null, "Nakuru"),
    new Zone("Africa/Nairobi", "Kenya", null, "Eldoret"),

    // Africa/Ndjamena (Chad)
    new Zone("Africa/Ndjamena", "Chad", null, "N'Djamena"),
    new Zone("Africa/Ndjamena", "Chad", null, "Moundou"),
    new Zone("Africa/Ndjamena", "Chad", null, "Sarh"),
    new Zone("Africa/Ndjamena", "Chad", null, "Abeche"),
    new Zone("Africa/Ndjamena", "Chad", null, "Koumra"),

    // Africa/Niamey (Niger)
    new Zone("Africa/Niamey", "Niger", null, "Niamey"),
    new Zone("Africa/Niamey", "Niger", null, "Zinder"),
    new Zone("Africa/Niamey", "Niger", null, "Maradi"),
    new Zone("Africa/Niamey", "Niger", null, "Agadez"),
    new Zone("Africa/Niamey", "Niger", null, "Dosso"),

    // Africa/Nouakchott (Mauritania)
    new Zone("Africa/Nouakchott", "Mauritania", null, "Nouakchott"),
    new Zone("Africa/Nouakchott", "Mauritania", null, "Nouadhibou"),
    new Zone("Africa/Nouakchott", "Mauritania", null, "Dar Naim"),
    new Zone("Africa/Nouakchott", "Mauritania", null, "Néma"),
    new Zone("Africa/Nouakchott", "Mauritania", null, "Kaédi"),

    // Africa/Ouagadougou (Burkina Faso)
    new Zone("Africa/Ouagadougou", "Burkina Faso", null, "Ouagadougou"),
    new Zone("Africa/Ouagadougou", "Burkina Faso", null, "Bobo-Dioulasso"),
    new Zone("Africa/Ouagadougou", "Burkina Faso", null, "Koudougou"),
    new Zone("Africa/Ouagadougou", "Burkina Faso", null, "Saaba"),
    new Zone("Africa/Ouagadougou", "Burkina Faso", null, "Ouahigouya"),

    // Africa/Porto-Novo (Benin)
    new Zone("Africa/Porto-Novo", "Benin", null, "Porto-Novo"),
    new Zone("Africa/Porto-Novo", "Benin", null, "Cotonou"),
    new Zone("Africa/Porto-Novo", "Benin", null, "Abomey-Calavi"),
    new Zone("Africa/Porto-Novo", "Benin", null, "Parakou"),
    new Zone("Africa/Porto-Novo", "Benin", null, "Abomey"),

    // Africa/Sao_Tome (São Tomé and Príncipe)
    new Zone("Africa/Sao_Tome", "São Tomé and Príncipe", null, "São Tomé"),
    new Zone("Africa/Sao_Tome", "São Tomé and Príncipe", null, "Santo António"),
    new Zone("Africa/Sao_Tome", "São Tomé and Príncipe", null, "Neves"),
    new Zone("Africa/Sao_Tome", "São Tomé and Príncipe", null, "Trindade"),
    new Zone("Africa/Sao_Tome", "São Tomé and Príncipe", null, "Santa Cruz"),

    // Africa/Tripoli (Libya)
    new Zone("Africa/Tripoli", "Libya", null, "Tripoli"),
    new Zone("Africa/Tripoli", "Libya", null, "Benghazi"),
    new Zone("Africa/Tripoli", "Libya", null, "Misrata"),
    new Zone("Africa/Tripoli", "Libya", null, "Bayda"),
    new Zone("Africa/Tripoli", "Libya", null, "Zawiya"),

    // Africa/Tunis (Tunisia)
    new Zone("Africa/Tunis", "Tunisia", null, "Tunis"),
    new Zone("Africa/Tunis", "Tunisia", null, "Sfax"),
    new Zone("Africa/Tunis", "Tunisia", null, "Sousse"),
    new Zone("Africa/Tunis", "Tunisia", null, "Kairouan"),
    new Zone("Africa/Tunis", "Tunisia", null, "Bizerte"),

    // Africa/Windhoek (Namibia)
    new Zone("Africa/Windhoek", "Namibia", null, "Windhoek"),
    new Zone("Africa/Windhoek", "Namibia", null, "Swakopmund"),
    new Zone("Africa/Windhoek", "Namibia", null, "Walvis Bay"),
    new Zone("Africa/Windhoek", "Namibia", null, "Rundu"),
    new Zone("Africa/Windhoek", "Namibia", null, "Oshakati"),

    // America/Adak (United States - Alaska)
    new Zone("America/Adak", "United States", "Alaska", "Adak"),
    new Zone("America/Adak", "United States", "Alaska", "Atka"),
    new Zone("America/Adak", "United States", "Alaska", "Nikolski"),
    new Zone("America/Adak", "United States", "Alaska", "Unalaska"),
    new Zone("America/Adak", "United States", "Alaska", "Akutan"),

    // America/Anchorage (United States - Alaska)
    new Zone("America/Anchorage", "United States", "Alaska", "Anchorage"),
    new Zone("America/Anchorage", "United States", "Alaska", "Fairbanks"),
    new Zone("America/Anchorage", "United States", "Alaska", "Juneau"),
    new Zone("America/Anchorage", "United States", "Alaska", "Wasilla"),
    new Zone("America/Anchorage", "United States", "Alaska", "Sitka"),

    // America/Anguilla (Anguilla)
    new Zone("America/Anguilla", "Anguilla", null, "The Valley"),
    new Zone("America/Anguilla", "Anguilla", null, "Blowing Point Village"),
    new Zone("America/Anguilla", "Anguilla", null, "Sandy Ground Village"),
    new Zone("America/Anguilla", "Anguilla", null, "West End Village"),
    new Zone("America/Anguilla", "Anguilla", null, "East End Village"),

    // America/Antigua (Antigua and Barbuda)
    new Zone("America/Antigua", "Antigua and Barbuda", null, "Saint John's"),
    new Zone("America/Antigua", "Antigua and Barbuda", null, "Piggotts"),
    new Zone("America/Antigua", "Antigua and Barbuda", null, "Bolands"),
    new Zone("America/Antigua", "Antigua and Barbuda", null, "Codrington"),
    new Zone("America/Antigua", "Antigua and Barbuda", null, "Parham"),

    // America/Araguaina (Brazil)
    new Zone("America/Araguaina", "Brazil", "Tocantins", "Araguaína"),
    new Zone("America/Araguaina", "Brazil", "Tocantins", "Palmas"),
    new Zone("America/Araguaina", "Brazil", "Tocantins", "Gurupi"),
    new Zone("America/Araguaina", "Brazil", "Tocantins", "Miracema do Tocantins"),
    new Zone("America/Araguaina", "Brazil", "Tocantins", "Taguatinga"),

    // America/Argentina/La_Rioja (Argentina)
    new Zone("America/Argentina/La_Rioja", "Argentina", "La Rioja", "La Rioja"),
    new Zone("America/Argentina/La_Rioja", "Argentina", "La Rioja", "Chilecito"),
    new Zone("America/Argentina/La_Rioja", "Argentina", "La Rioja", "Arauco"),
    new Zone("America/Argentina/La_Rioja", "Argentina", "La Rioja", "Chamical"),
    new Zone("America/Argentina/La_Rioja", "Argentina", "La Rioja", "Villa Unión"),

    // America/Argentina/Rio_Gallegos (Argentina)
    new Zone("America/Argentina/Rio_Gallegos", "Argentina", "Santa Cruz", "Río Gallegos"),
    new Zone("America/Argentina/Rio_Gallegos", "Argentina", "Santa Cruz", "Caleta Olivia"),
    new Zone("America/Argentina/Rio_Gallegos", "Argentina", "Santa Cruz", "Pico Truncado"),
    new Zone("America/Argentina/Rio_Gallegos", "Argentina", "Santa Cruz", "Puerto Deseado"),
    new Zone("America/Argentina/Rio_Gallegos", "Argentina", "Santa Cruz", "El Calafate"),

    new Zone("America/Argentina/Salta", "Argentina", "Salta", "Salta"),
    new Zone("America/Argentina/Salta", "Argentina", "Salta", "San Ramón de la Nueva Orán"),
    new Zone("America/Argentina/Salta", "Argentina", "Salta", "Tartagal"),
    new Zone("America/Argentina/Salta", "Argentina", "Salta", "Cafayate"),
    new Zone("America/Argentina/Salta", "Argentina", "Salta", "General Güemes"),

    // America/Argentina/San_Juan (Argentina)
    new Zone("America/Argentina/San_Juan", "Argentina", "San Juan", "San Juan"),
    new Zone("America/Argentina/San_Juan", "Argentina", "San Juan", "Chimbas"),
    new Zone("America/Argentina/San_Juan", "Argentina", "San Juan", "Santa Lucía"),
    new Zone("America/Argentina/San_Juan", "Argentina", "San Juan", "Pocito"),
    new Zone("America/Argentina/San_Juan", "Argentina", "San Juan", "Caucete"),

    // America/Argentina/San_Luis (Argentina)
    new Zone("America/Argentina/San_Luis", "Argentina", "San Luis", "San Luis"),
    new Zone("America/Argentina/San_Luis", "Argentina", "San Luis", "Villa Mercedes"),
    new Zone("America/Argentina/San_Luis", "Argentina", "San Luis", "La Punta"),
    new Zone("America/Argentina/San_Luis", "Argentina", "San Luis", "Merlo"),
    new Zone("America/Argentina/San_Luis", "Argentina", "San Luis", "Justo Daract"),

    // America/Argentina/Tucuman (Argentina)
    new Zone("America/Argentina/Tucuman", "Argentina", "Tucumán", "San Miguel de Tucumán"),
    new Zone("America/Argentina/Tucuman", "Argentina", "Tucumán", "Yerba Buena"),
    new Zone("America/Argentina/Tucuman", "Argentina", "Tucumán", "Tafí Viejo"),
    new Zone("America/Argentina/Tucuman", "Argentina", "Tucumán", "Alderetes"),
    new Zone("America/Argentina/Tucuman", "Argentina", "Tucumán", "Aguilares"),

    // America/Argentina/Ushuaia (Argentina)
    new Zone("America/Argentina/Ushuaia", "Argentina", "Tierra del Fuego", "Ushuaia"),
    new Zone("America/Argentina/Ushuaia", "Argentina", "Tierra del Fuego", "Río Grande"),
    new Zone("America/Argentina/Ushuaia", "Argentina", "Tierra del Fuego", "Tolhuin"),
    new Zone("America/Argentina/Ushuaia", "Argentina", "Tierra del Fuego", "Puerto Almanza"),
    new Zone("America/Argentina/Ushuaia", "Argentina", "Tierra del Fuego", "Puerto Williams"),

    // America/Aruba (Aruba)
    new Zone("America/Aruba", "Aruba", null, "Oranjestad"),
    new Zone("America/Aruba", "Aruba", null, "Noord"),
    new Zone("America/Aruba", "Aruba", null, "Santa Cruz"),
    new Zone("America/Aruba", "Aruba", null, "Paradera"),
    new Zone("America/Aruba", "Aruba", null, "San Nicolas"),

    // America/Asuncion (Paraguay)
    new Zone("America/Asuncion", "Paraguay", null, "Asunción"),
    new Zone("America/Asuncion", "Paraguay", null, "San Lorenzo"),
    new Zone("America/Asuncion", "Paraguay", null, "Luque"),
    new Zone("America/Asuncion", "Paraguay", null, "Fernando de la Mora"),
    new Zone("America/Asuncion", "Paraguay", null, "Lambaré"),

    // America/Bahia (Brazil)
    new Zone("America/Bahia", "Brazil", "Bahia", "Salvador"),
    new Zone("America/Bahia", "Brazil", "Bahia", "Feira de Santana"),
    new Zone("America/Bahia", "Brazil", "Bahia", "Vitória da Conquista"),
    new Zone("America/Bahia", "Brazil", "Bahia", "Camaçari"),
    new Zone("America/Bahia", "Brazil", "Bahia", "Itabuna"),

    // America/Bahia_Banderas (Mexico)
    new Zone("America/Bahia_Banderas", "Mexico", "Nayarit", "Mezcales"),
    new Zone("America/Bahia_Banderas", "Mexico", "Nayarit", "Bucerías"),
    new Zone("America/Bahia_Banderas", "Mexico", "Nayarit", "San Vicente"),
    new Zone("America/Bahia_Banderas", "Mexico", "Nayarit", "Valle de Banderas"),
    new Zone("America/Bahia_Banderas", "Mexico", "Nayarit", "San José del Valle"),

    // America/Barbados (Barbados)
    new Zone("America/Barbados", "Barbados", null, "Bridgetown"),
    new Zone("America/Barbados", "Barbados", null, "Speightstown"),
    new Zone("America/Barbados", "Barbados", null, "Oistins"),
    new Zone("America/Barbados", "Barbados", null, "Bathsheba"),
    new Zone("America/Barbados", "Barbados", null, "Holetown"),

    // America/Belem (Brazil)
    new Zone("America/Belem", "Brazil", "Pará", "Belém"),
    new Zone("America/Belem", "Brazil", "Pará", "Ananindeua"),
    new Zone("America/Belem", "Brazil", "Pará", "Marabá"),
    new Zone("America/Belem", "Brazil", "Pará", "Castanhal"),
    new Zone("America/Belem", "Brazil", "Pará", "Parauapebas"),

    // America/Belize (Belize)
    new Zone("America/Belize", "Belize", null, "Belize City"),
    new Zone("America/Belize", "Belize", null, "Belmopan"),
    new Zone("America/Belize", "Belize", null, "San Ignacio"),
    new Zone("America/Belize", "Belize", null, "Orange Walk Town"),
    new Zone("America/Belize", "Belize", null, "Dangriga"),

    // America/Blanc-Sablon (Canada)
    new Zone("America/Blanc-Sablon", "Canada", "Quebec", "Blanc-Sablon"),
    new Zone("America/Blanc-Sablon", "Canada", "Quebec", "Lourdes-de-Blanc-Sablon"),
    new Zone("America/Blanc-Sablon", "Canada", "Quebec", "Brador"),
    new Zone("America/Blanc-Sablon", "Canada", "Quebec", "Middle Bay"),
    new Zone("America/Blanc-Sablon", "Canada", "Quebec", "Vieux-Fort"),

    // America/Boa_Vista (Brazil)
    new Zone("America/Boa_Vista", "Brazil", "Roraima", "Boa Vista"),
    new Zone("America/Boa_Vista", "Brazil", "Roraima", "Caracaraí"),
    new Zone("America/Boa_Vista", "Brazil", "Roraima", "Rorainópolis"),
    new Zone("America/Boa_Vista", "Brazil", "Roraima", "Mucajaí"),
    new Zone("America/Boa_Vista", "Brazil", "Roraima", "Pacaraima"),

    // America/Bogota (Colombia)
    new Zone("America/Bogota", "Colombia", null, "Bogotá"),
    new Zone("America/Bogota", "Colombia", null, "Medellín"),
    new Zone("America/Bogota", "Colombia", null, "Cali"),
    new Zone("America/Bogota", "Colombia", null, "Barranquilla"),
    new Zone("America/Bogota", "Colombia", null, "Cartagena"),

    // America/Boise (United States)
    new Zone("America/Boise", "United States", "Idaho", "Boise"),
    new Zone("America/Boise", "United States", "Idaho", "Nampa"),
    new Zone("America/Boise", "United States", "Idaho", "Meridian"),
    new Zone("America/Boise", "United States", "Idaho", "Caldwell"),
    new Zone("America/Boise", "United States", "Idaho", "Twin Falls"),

    // America/Buenos_Aires (Argentina)
    new Zone("America/Buenos_Aires", "Argentina", "Buenos Aires", "Buenos Aires"),
    new Zone("America/Buenos_Aires", "Argentina", "Buenos Aires", "La Plata"),
    new Zone("America/Buenos_Aires", "Argentina", "Buenos Aires", "Mar del Plata"),
    new Zone("America/Buenos_Aires", "Argentina", "Buenos Aires", "Bahía Blanca"),
    new Zone("America/Buenos_Aires", "Argentina", "Buenos Aires", "Tandil"),

    // America/Cambridge_Bay (Canada)
    new Zone("America/Cambridge_Bay", "Canada", "Nunavut", "Cambridge Bay"),
    new Zone("America/Cambridge_Bay", "Canada", "Nunavut", "Gjoa Haven"),
    new Zone("America/Cambridge_Bay", "Canada", "Nunavut", "Kugluktuk"),
    new Zone("America/Cambridge_Bay", "Canada", "Nunavut", "Taloyoak"),
    new Zone("America/Cambridge_Bay", "Canada", "Nunavut", "Bathurst Inlet"),

    // America/Campo_Grande (Brazil)
  new Zone("America/Campo_Grande", "Brazil", "Mato Grosso do Sul", "Campo Grande"),
  new Zone("America/Campo_Grande", "Brazil", "Mato Grosso do Sul", "Dourados"),
  new Zone("America/Campo_Grande", "Brazil", "Mato Grosso do Sul", "Três Lagoas"),
  new Zone("America/Campo_Grande", "Brazil", "Mato Grosso do Sul", "Corumbá"),
  new Zone("America/Campo_Grande", "Brazil", "Mato Grosso do Sul", "Ponta Porã"),

  // America/Cancun (Mexico)
  new Zone("America/Cancun", "Mexico", "Quintana Roo", "Cancún"),
  new Zone("America/Cancun", "Mexico", "Quintana Roo", "Playa del Carmen"),
  new Zone("America/Cancun", "Mexico", "Quintana Roo", "Cozumel"),
  new Zone("America/Cancun", "Mexico", "Quintana Roo", "Tulum"),
  new Zone("America/Cancun", "Mexico", "Quintana Roo", "Felipe Carrillo Puerto"),

  // America/Caracas (Venezuela)
  new Zone("America/Caracas", "Venezuela", null, "Caracas"),
  new Zone("America/Caracas", "Venezuela", null, "Maracaibo"),
  new Zone("America/Caracas", "Venezuela", null, "Valencia"),
  new Zone("America/Caracas", "Venezuela", null, "Barquisimeto"),
  new Zone("America/Caracas", "Venezuela", null, "Maracay"),

  // America/Catamarca (Argentina)
  new Zone("America/Catamarca", "Argentina", "Catamarca", "San Fernando del Valle de Catamarca"),
  new Zone("America/Catamarca", "Argentina", "Catamarca", "Andalgalá"),
  new Zone("America/Catamarca", "Argentina", "Catamarca", "Belén"),
  new Zone("America/Catamarca", "Argentina", "Catamarca", "Tinogasta"),
  new Zone("America/Catamarca", "Argentina", "Catamarca", "Santa María"),

  // America/Cayenne (French Guiana)
  new Zone("America/Cayenne", "French Guiana", null, "Cayenne"),
  new Zone("America/Cayenne", "French Guiana", null, "Matoury"),
  new Zone("America/Cayenne", "French Guiana", null, "Saint-Laurent-du-Maroni"),
  new Zone("America/Cayenne", "French Guiana", null, "Kourou"),
  new Zone("America/Cayenne", "French Guiana", null, "Rémire-Montjoly"),

  // America/Cayman (Cayman Islands)
  new Zone("America/Cayman", "Cayman Islands", null, "George Town"),
  new Zone("America/Cayman", "Cayman Islands", null, "West Bay"),
  new Zone("America/Cayman", "Cayman Islands", null, "Bodden Town"),
  new Zone("America/Cayman", "Cayman Islands", null, "East End"),
  new Zone("America/Cayman", "Cayman Islands", null, "North Side"),

  // America/Chicago (United States)
  new Zone("America/Chicago", "United States", "Illinois", "Chicago"),
  new Zone("America/Chicago", "United States", "Texas", "Houston"),
  new Zone("America/Chicago", "United States", "Louisiana", "New Orleans"),
  new Zone("America/Chicago", "United States", "Minnesota", "Minneapolis"),
  new Zone("America/Chicago", "United States", "Missouri", "St. Louis"),

  // America/Chihuahua (Mexico)
  new Zone("America/Chihuahua", "Mexico", "Chihuahua", "Chihuahua"),
  new Zone("America/Chihuahua", "Mexico", "Chihuahua", "Delicias"),
  new Zone("America/Chihuahua", "Mexico", "Chihuahua", "Parral"),
  new Zone("America/Chihuahua", "Mexico", "Chihuahua", "Cuauhtémoc"),
  new Zone("America/Chihuahua", "Mexico", "Chihuahua", "Nuevo Casas Grandes"),

  // America/Ciudad_Juarez (Mexico)
  new Zone("America/Ciudad_Juarez", "Mexico", "Chihuahua", "Ciudad Juárez"),
  new Zone("America/Ciudad_Juarez", "Mexico", "Chihuahua", "Guadalupe"),
  new Zone("America/Ciudad_Juarez", "Mexico", "Chihuahua", "Praxedis G. Guerrero"),
  new Zone("America/Ciudad_Juarez", "Mexico", "Chihuahua", "Ascensión"),
  new Zone("America/Ciudad_Juarez", "Mexico", "Chihuahua", "Villa Ahumada"),

  // America/Coral_Harbour (Canada)
  new Zone("America/Coral_Harbour", "Canada", "Nunavut", "Coral Harbour"),
  new Zone("America/Coral_Harbour", "Canada", "Nunavut", "Chesterfield Inlet"),
  new Zone("America/Coral_Harbour", "Canada", "Nunavut", "Rankin Inlet"),
  new Zone("America/Coral_Harbour", "Canada", "Nunavut", "Whale Cove"),
  new Zone("America/Coral_Harbour", "Canada", "Nunavut", "Arviat"),

  // America/Cordoba (Argentina)
  new Zone("America/Cordoba", "Argentina", "Córdoba", "Córdoba"),
  new Zone("America/Cordoba", "Argentina", "Córdoba", "Villa María"),
  new Zone("America/Cordoba", "Argentina", "Córdoba", "Río Cuarto"),
  new Zone("America/Cordoba", "Argentina", "Córdoba", "San Francisco"),
  new Zone("America/Cordoba", "Argentina", "Córdoba", "Villa Carlos Paz"),

  // America/Costa_Rica (Costa Rica)
  new Zone("America/Costa_Rica", "Costa Rica", null, "San José"),
  new Zone("America/Costa_Rica", "Costa Rica", null, "Limón"),
  new Zone("America/Costa_Rica", "Costa Rica", null, "Alajuela"),
  new Zone("America/Costa_Rica", "Costa Rica", null, "Heredia"),
  new Zone("America/Costa_Rica", "Costa Rica", null, "Puntarenas"),

  // America/Creston (Canada)
  new Zone("America/Creston", "Canada", "British Columbia", "Creston"),
  new Zone("America/Creston", "Canada", "British Columbia", "Cranbrook"),
  new Zone("America/Creston", "Canada", "British Columbia", "Nelson"),
  new Zone("America/Creston", "Canada", "British Columbia", "Trail"),
  new Zone("America/Creston", "Canada", "British Columbia", "Castlegar"),

  // America/Cuiaba (Brazil)
  new Zone("America/Cuiaba", "Brazil", "Mato Grosso", "Cuiabá"),
  new Zone("America/Cuiaba", "Brazil", "Mato Grosso", "Rondonópolis"),
  new Zone("America/Cuiaba", "Brazil", "Mato Grosso", "Sinop"),
  new Zone("America/Cuiaba", "Brazil", "Mato Grosso", "Cáceres"),
  new Zone("America/Cuiaba", "Brazil", "Mato Grosso", "Chapada dos Guimarães"),

  // America/Curacao (Curaçao)
  new Zone("America/Curacao", "Curaçao", null, "Willemstad"),
  new Zone("America/Curacao", "Curaçao", null, "Barber"),
  new Zone("America/Curacao", "Curaçao", null, "Lagun"),
  new Zone("America/Curacao", "Curaçao", null, "Westpunt"),
  new Zone("America/Curacao", "Curaçao", null, "Hato"),

  // America/Danmarkshavn (Greenland)
  new Zone("America/Danmarkshavn", "Greenland", null, "Danmarkshavn"),
  new Zone("America/Danmarkshavn", "Greenland", null, "Station Nord"),
  new Zone("America/Danmarkshavn", "Greenland", null, "Zackenberg"),
  new Zone("America/Danmarkshavn", "Greenland", null, "Ittoqqortoormiit"),
  new Zone("America/Danmarkshavn", "Greenland", null, "Scoresbysund"),

  // America/Dawson (Canada)
  new Zone("America/Dawson", "Canada", "Yukon", "Dawson City"),
  new Zone("America/Dawson", "Canada", "Yukon", "Mayo"),
  new Zone("America/Dawson", "Canada", "Yukon", "Pelly Crossing"),
  new Zone("America/Dawson", "Canada", "Yukon", "Carmacks"),
  new Zone("America/Dawson", "Canada", "Yukon", "Stewart Crossing"),

  // America/Dawson_Creek (Canada)
  new Zone("America/Dawson_Creek", "Canada", "British Columbia", "Dawson Creek"),
  new Zone("America/Dawson_Creek", "Canada", "British Columbia", "Fort St. John"),
  new Zone("America/Dawson_Creek", "Canada", "British Columbia", "Chetwynd"),
  new Zone("America/Dawson_Creek", "Canada", "British Columbia", "Hudson's Hope"),
  new Zone("America/Dawson_Creek", "Canada", "British Columbia", "Tumbler Ridge"),

  // America/Denver (United States)
  new Zone("America/Denver", "United States", "Colorado", "Denver"),
  new Zone("America/Denver", "United States", "Colorado", "Colorado Springs"),
  new Zone("America/Denver", "United States", "Utah", "Salt Lake City"),
  new Zone("America/Denver", "United States", "New Mexico", "Albuquerque"),
  new Zone("America/Denver", "United States", "Wyoming", "Cheyenne"),

  // America/Detroit (United States)
  new Zone("America/Detroit", "United States", "Michigan", "Detroit"),
  new Zone("America/Detroit", "United States", "Michigan", "Grand Rapids"),
  new Zone("America/Detroit", "United States", "Michigan", "Ann Arbor"),
  new Zone("America/Detroit", "United States", "Michigan", "Lansing"),
  new Zone("America/Detroit", "United States", "Michigan", "Flint"),

  // America/Dominica (Dominica)
  new Zone("America/Dominica", "Dominica", null, "Roseau"),
  new Zone("America/Dominica", "Dominica", null, "Portsmouth"),
  new Zone("America/Dominica", "Dominica", null, "Berekua"),
  new Zone("America/Dominica", "Dominica", null, "Saint Joseph"),
  new Zone("America/Dominica", "Dominica", null, "Wesley"),

  // America/Edmonton (Canada)
  new Zone("America/Edmonton", "Canada", "Alberta", "Edmonton"),
  new Zone("America/Edmonton", "Canada", "Alberta", "Calgary"),
  new Zone("America/Edmonton", "Canada", "Alberta", "Red Deer"),
  new Zone("America/Edmonton", "Canada", "Alberta", "Lethbridge"),
  new Zone("America/Edmonton", "Canada", "Alberta", "Medicine Hat"),

  // America/Eirunepe (Brazil)
  new Zone("America/Eirunepe", "Brazil", "Amazonas", "Eirunepé"),
  new Zone("America/Eirunepe", "Brazil", "Amazonas", "Envira"),
  new Zone("America/Eirunepe", "Brazil", "Amazonas", "Benjamin Constant"),
  new Zone("America/Eirunepe", "Brazil", "Amazonas", "Carauari"),
  new Zone("America/Eirunepe", "Brazil", "Amazonas", "Atalaia do Norte"),

  // America/El_Salvador (El Salvador)
  new Zone("America/El_Salvador", "El Salvador", null, "San Salvador"),
  new Zone("America/El_Salvador", "El Salvador", null, "Santa Ana"),
  new Zone("America/El_Salvador", "El Salvador", null, "San Miguel"),
  new Zone("America/El_Salvador", "El Salvador", null, "Soyapango"),
  new Zone("America/El_Salvador", "El Salvador", null, "Mejicanos"),

  // America/Fort_Nelson (Canada)
  new Zone("America/Fort_Nelson", "Canada", "British Columbia", "Fort Nelson"),
  new Zone("America/Fort_Nelson", "Canada", "British Columbia", "Toad River"),
  new Zone("America/Fort_Nelson", "Canada", "British Columbia", "Liard River"),
  new Zone("America/Fort_Nelson", "Canada", "British Columbia", "Muncho Lake"),
  new Zone("America/Fort_Nelson", "Canada", "British Columbia", "Smith River"),

  // America/Fortaleza (Brazil)
  new Zone("America/Fortaleza", "Brazil", "Ceará", "Fortaleza"),
  new Zone("America/Fortaleza", "Brazil", "Ceará", "Juazeiro do Norte"),
  new Zone("America/Fortaleza", "Brazil", "Ceará", "Sobral"),
  new Zone("America/Fortaleza", "Brazil", "Ceará", "Crato"),
  new Zone("America/Fortaleza", "Brazil", "Ceará", "Maracanaú"),

  // America/Glace_Bay (Canada)
  new Zone("America/Glace_Bay", "Canada", "Nova Scotia", "Glace Bay"),
  new Zone("America/Glace_Bay", "Canada", "Nova Scotia", "Sydney"),
  new Zone("America/Glace_Bay", "Canada", "Nova Scotia", "New Waterford"),
  new Zone("America/Glace_Bay", "Canada", "Nova Scotia", "Sydney Mines"),
  new Zone("America/Glace_Bay", "Canada", "Nova Scotia", "Louisbourg"),

  // America/Godthab (Greenland)
  new Zone("America/Godthab", "Greenland", null, "Nuuk"),
  new Zone("America/Godthab", "Greenland", null, "Sisimiut"),
  new Zone("America/Godthab", "Greenland", null, "Ilulissat"),
  new Zone("America/Godthab", "Greenland", null, "Qeqertarsuaq"),
  new Zone("America/Godthab", "Greenland", null, "Maniitsoq"),

  // America/Goose_Bay (Canada)
  new Zone("America/Goose_Bay", "Canada", "Newfoundland and Labrador", "Happy Valley-Goose Bay"),
  new Zone("America/Goose_Bay", "Canada", "Newfoundland and Labrador", "Labrador City"),
  new Zone("America/Goose_Bay", "Canada", "Newfoundland and Labrador", "Nain"),
  new Zone("America/Goose_Bay", "Canada", "Newfoundland and Labrador", "Postville"),
  new Zone("America/Goose_Bay", "Canada", "Newfoundland and Labrador", "Rigolet"),

  // America/Grand_Turk (Turks and Caicos Islands)
  new Zone("America/Grand_Turk", "Turks and Caicos Islands", null, "Cockburn Town"),
  new Zone("America/Grand_Turk", "Turks and Caicos Islands", null, "Providenciales"),
  new Zone("America/Grand_Turk", "Turks and Caicos Islands", null, "South Caicos"),
  new Zone("America/Grand_Turk", "Turks and Caicos Islands", null, "North Caicos"),
  new Zone("America/Grand_Turk", "Turks and Caicos Islands", null, "Salt Cay"),

  // America/Grenada (Grenada)
  new Zone("America/Grenada", "Grenada", null, "St. George's"),
  new Zone("America/Grenada", "Grenada", null, "Gouyave"),
  new Zone("America/Grenada", "Grenada", null, "Grenville"),
  new Zone("America/Grenada", "Grenada", null, "Victoria"),
  new Zone("America/Grenada", "Grenada", null, "Sauteurs"),

  // America/Guadeloupe (Guadeloupe)
  new Zone("America/Guadeloupe", "Guadeloupe", null, "Basse-Terre"),
  new Zone("America/Guadeloupe", "Guadeloupe", null, "Pointe-à-Pitre"),
  new Zone("America/Guadeloupe", "Guadeloupe", null, "Les Abymes"),
  new Zone("America/Guadeloupe", "Guadeloupe", null, "Baie-Mahault"),
  new Zone("America/Guadeloupe", "Guadeloupe", null, "Le Gosier"),

  // America/Guatemala (Guatemala)
  new Zone("America/Guatemala", "Guatemala", null, "Guatemala City"),
  new Zone("America/Guatemala", "Guatemala", null, "Mixco"),
  new Zone("America/Guatemala", "Guatemala", null, "Villa Nueva"),
  new Zone("America/Guatemala", "Guatemala", null, "Quetzaltenango"),
  new Zone("America/Guatemala", "Guatemala", null, "Escuintla"),

  // America/Guayaquil (Ecuador)
  new Zone("America/Guayaquil", "Ecuador", null, "Guayaquil"),
  new Zone("America/Guayaquil", "Ecuador", null, "Quito"),
  new Zone("America/Guayaquil", "Ecuador", null, "Cuenca"),
  new Zone("America/Guayaquil", "Ecuador", null, "Ambato"),
  new Zone("America/Guayaquil", "Ecuador", null, "Machala"),

  // America/Guyana (Guyana)
  new Zone("America/Guyana", "Guyana", null, "Georgetown"),
  new Zone("America/Guyana", "Guyana", null, "Linden"),
  new Zone("America/Guyana", "Guyana", null, "New Amsterdam"),
  new Zone("America/Guyana", "Guyana", null, "Bartica"),
  new Zone("America/Guyana", "Guyana", null, "Skeldon"),

  // America/Halifax (Canada)
  new Zone("America/Halifax", "Canada", "Nova Scotia", "Halifax"),
  new Zone("America/Halifax", "Canada", "Nova Scotia", "Dartmouth"),
  new Zone("America/Halifax", "Canada", "Nova Scotia", "Sydney"),
  new Zone("America/Halifax", "Canada", "Nova Scotia", "Truro"),
  new Zone("America/Halifax", "Canada", "Nova Scotia", "New Glasgow"),

  // America/Havana (Cuba)
  new Zone("America/Havana", "Cuba", null, "Havana"),
  new Zone("America/Havana", "Cuba", null, "Santiago de Cuba"),
  new Zone("America/Havana", "Cuba", null, "Camagüey"),
  new Zone("America/Havana", "Cuba", null, "Holguín"),
  new Zone("America/Havana", "Cuba", null, "Santa Clara"),

  // America/Hermosillo (Mexico)
  new Zone("America/Hermosillo", "Mexico", "Sonora", "Hermosillo"),
  new Zone("America/Hermosillo", "Mexico", "Sonora", "Ciudad Obregón"),
  new Zone("America/Hermosillo", "Mexico", "Sonora", "Nogales"),
  new Zone("America/Hermosillo", "Mexico", "Sonora", "San Luis Río Colorado"),
  new Zone("America/Hermosillo", "Mexico", "Sonora", "Navojoa"),

  // America/Indiana/Knox (Central Time Zone)
  new Zone("America/Indiana/Knox", "United States", "Indiana", "Knox"),
  new Zone("America/Indiana/Knox", "United States", "Indiana", "North Judson"),
  new Zone("America/Indiana/Knox", "United States", "Indiana", "Hamlet"),
  new Zone("America/Indiana/Knox", "United States", "Indiana", "Bass Lake"),
  new Zone("America/Indiana/Knox", "United States", "Indiana", "San Pierre"),

  // America/Indiana/Marengo (Eastern Time Zone)
  new Zone("America/Indiana/Marengo", "United States", "Indiana", "Marengo"),
  new Zone("America/Indiana/Marengo", "United States", "Indiana", "English"),
  new Zone("America/Indiana/Marengo", "United States", "Indiana", "Milltown"),
  new Zone("America/Indiana/Marengo", "United States", "Indiana", "Leavenworth"),
  new Zone("America/Indiana/Marengo", "United States", "Indiana", "Carefree"),

  // America/Indiana/Petersburg (Eastern Time Zone)
  new Zone("America/Indiana/Petersburg", "United States", "Indiana", "Petersburg"),
  new Zone("America/Indiana/Petersburg", "United States", "Indiana", "Winslow"),
  new Zone("America/Indiana/Petersburg", "United States", "Indiana", "Otwell"),
  new Zone("America/Indiana/Petersburg", "United States", "Indiana", "Spurgeon"),
  new Zone("America/Indiana/Petersburg", "United States", "Indiana", "Velpen"),

  // America/Indiana/Tell_City (Central Time Zone)
  new Zone("America/Indiana/Tell_City", "United States", "Indiana", "Tell City"),
  new Zone("America/Indiana/Tell_City", "United States", "Indiana", "Cannelton"),
  new Zone("America/Indiana/Tell_City", "United States", "Indiana", "Troy"),
  new Zone("America/Indiana/Tell_City", "United States", "Indiana", "Leopold"),
  new Zone("America/Indiana/Tell_City", "United States", "Indiana", "Rome"),

  // America/Indiana/Vevay (Eastern Time Zone)
  new Zone("America/Indiana/Vevay", "United States", "Indiana", "Vevay"),
  new Zone("America/Indiana/Vevay", "United States", "Indiana", "Florence"),
  new Zone("America/Indiana/Vevay", "United States", "Indiana", "Patriot"),
  new Zone("America/Indiana/Vevay", "United States", "Indiana", "Bennington"),
  new Zone("America/Indiana/Vevay", "United States", "Indiana", "Center Square"),

  // America/Indiana/Vincennes (Eastern Time Zone)
  new Zone("America/Indiana/Vincennes", "United States", "Indiana", "Vincennes"),
  new Zone("America/Indiana/Vincennes", "United States", "Indiana", "Bicknell"),
  new Zone("America/Indiana/Vincennes", "United States", "Indiana", "Monroe City"),
  new Zone("America/Indiana/Vincennes", "United States", "Indiana", "Bruceville"),
  new Zone("America/Indiana/Vincennes", "United States", "Indiana", "Oaktown"),

  // America/Indiana/Winamac (Eastern Time Zone)
  new Zone("America/Indiana/Winamac", "United States", "Indiana", "Winamac"),
  new Zone("America/Indiana/Winamac", "United States", "Indiana", "Francesville"),
  new Zone("America/Indiana/Winamac", "United States", "Indiana", "Medaryville"),
  new Zone("America/Indiana/Winamac", "United States", "Indiana", "Star City"),
  new Zone("America/Indiana/Winamac", "United States", "Indiana", "Beardstown"),

  // America/Indianapolis (Eastern Time Zone)
  new Zone("America/Indianapolis", "United States", "Indiana", "Indianapolis"),
  new Zone("America/Indianapolis", "United States", "Indiana", "Carmel"),
  new Zone("America/Indianapolis", "United States", "Indiana", "Fishers"),
  new Zone("America/Indianapolis", "United States", "Indiana", "Greenwood"),
  new Zone("America/Indianapolis", "United States", "Indiana", "Lawrence"),

  // America/Inuvik (Mountain Time Zone)
  new Zone("America/Inuvik", "Canada", "Northwest Territories", "Inuvik"),
  new Zone("America/Inuvik", "Canada", "Northwest Territories", "Tuktoyaktuk"),
  new Zone("America/Inuvik", "Canada", "Northwest Territories", "Aklavik"),
  new Zone("America/Inuvik", "Canada", "Northwest Territories", "Fort McPherson"),
  new Zone("America/Inuvik", "Canada", "Northwest Territories", "Paulatuk"),

  // America/Iqaluit (Eastern Time Zone)
  new Zone("America/Iqaluit", "Canada", "Nunavut", "Iqaluit"),
  new Zone("America/Iqaluit", "Canada", "Nunavut", "Pangnirtung"),
  new Zone("America/Iqaluit", "Canada", "Nunavut", "Cape Dorset"),
  new Zone("America/Iqaluit", "Canada", "Nunavut", "Kimmirut"),
  new Zone("America/Iqaluit", "Canada", "Nunavut", "Kinngait"),

  // America/Jamaica (Eastern Standard Time)
  new Zone("America/Jamaica", "Jamaica", null, "Kingston"),
  new Zone("America/Jamaica", "Jamaica", null, "Montego Bay"),
  new Zone("America/Jamaica", "Jamaica", null, "Spanish Town"),
  new Zone("America/Jamaica", "Jamaica", null, "Portmore"),
  new Zone("America/Jamaica", "Jamaica", null, "Mandeville"),

  // America/Argentina/Jujuy (Argentina Time)
  new Zone("America/Argentina/Jujuy", "Argentina", "Jujuy", "San Salvador de Jujuy"),
  new Zone("America/Argentina/Jujuy", "Argentina", "Jujuy", "San Pedro de Jujuy"),
  new Zone("America/Argentina/Jujuy", "Argentina", "Jujuy", "Palpalá"),
  new Zone("America/Argentina/Jujuy", "Argentina", "Jujuy", "Libertador General San Martín"),
  new Zone("America/Argentina/Jujuy", "Argentina", "Jujuy", "La Quiaca"),

  // America/Juneau (Alaska Time Zone)
  new Zone("America/Juneau", "United States", "Alaska", "Juneau"),
  new Zone("America/Juneau", "United States", "Alaska", "Douglas"),
  new Zone("America/Juneau", "United States", "Alaska", "Auke Bay"),
  new Zone("America/Juneau", "United States", "Alaska", "Lemon Creek"),
  new Zone("America/Juneau", "United States", "Alaska", "Mendenhall Valley"),

  // America/Kentucky/Monticello (Eastern Time Zone)
  new Zone("America/Kentucky/Monticello", "United States", "Kentucky", "Monticello"),
  new Zone("America/Kentucky/Monticello", "United States", "Kentucky", "Albany"),
  new Zone("America/Kentucky/Monticello", "United States", "Kentucky", "Burnside"),
  new Zone("America/Kentucky/Monticello", "United States", "Kentucky", "Russell Springs"),
  new Zone("America/Kentucky/Monticello", "United States", "Kentucky", "Jamestown"),

  // America/Kralendijk (Atlantic Standard Time)
  new Zone("America/Kralendijk", "Caribbean Netherlands", null, "Kralendijk"),
  new Zone("America/Kralendijk", "Caribbean Netherlands", null, "Rincon"),
  new Zone("America/Kralendijk", "Caribbean Netherlands", null, "Antriol"),
  new Zone("America/Kralendijk", "Caribbean Netherlands", null, "Nikiboko"),
  new Zone("America/Kralendijk", "Caribbean Netherlands", null, "Tera Kora"),

  // America/La_Paz (Bolivia Time)
  new Zone("America/La_Paz", "Bolivia", null, "La Paz"),
  new Zone("America/La_Paz", "Bolivia", null, "El Alto"),
  new Zone("America/La_Paz", "Bolivia", null, "Cochabamba"),
  new Zone("America/La_Paz", "Bolivia", null, "Santa Cruz de la Sierra"),
  new Zone("America/La_Paz", "Bolivia", null, "Sucre"),

  // America/Lima (Peru Time)
  new Zone("America/Lima", "Peru", null, "Lima"),
  new Zone("America/Lima", "Peru", null, "Arequipa"),
  new Zone("America/Lima", "Peru", null, "Trujillo"),
  new Zone("America/Lima", "Peru", null, "Chiclayo"),
  new Zone("America/Lima", "Peru", null, "Piura"),

  // America/Los_Angeles (Pacific Time Zone)
  new Zone("America/Los_Angeles", "United States", "California", "Los Angeles"),
  new Zone("America/Los_Angeles", "United States", "California", "San Francisco"),
  new Zone("America/Los_Angeles", "United States", "California", "San Diego"),
  new Zone("America/Los_Angeles", "United States", "California", "Sacramento"),
  new Zone("America/Los_Angeles", "United States", "California", "Fresno"),

  // America/Louisville (Eastern Time Zone)
  new Zone("America/Louisville", "United States", "Kentucky", "Louisville"),
  new Zone("America/Louisville", "United States", "Kentucky", "Lexington"),
  new Zone("America/Louisville", "United States", "Kentucky", "Bowling Green"),
  new Zone("America/Louisville", "United States", "Kentucky", "Owensboro"),
  new Zone("America/Louisville", "United States", "Kentucky", "Covington"),

  // America/Lower_Princes (Atlantic Standard Time)
  new Zone("America/Lower_Princes", "Sint Maarten", null, "Lower Prince's Quarter"),
  new Zone("America/Lower_Princes", "Sint Maarten", null, "Philipsburg"),
  new Zone("America/Lower_Princes", "Sint Maarten", null, "Cul de Sac"),
  new Zone("America/Lower_Princes", "Sint Maarten", null, "Koolbaai"),
  new Zone("America/Lower_Princes", "Sint Maarten", null, "Dutch Quarter"),

  // America/Maceio (Brasília Time)
  new Zone("America/Maceio", "Brazil", "Alagoas", "Maceió"),
  new Zone("America/Maceio", "Brazil", "Alagoas", "Arapiraca"),
  new Zone("America/Maceio", "Brazil", "Alagoas", "Palmeira dos Índios"),
  new Zone("America/Maceio", "Brazil", "Alagoas", "Rio Largo"),
  new Zone("America/Maceio", "Brazil", "Alagoas", "União dos Palmares"),

  // America/Managua (Central Standard Time)
  new Zone("America/Managua", "Nicaragua", null, "Managua"),
  new Zone("America/Managua", "Nicaragua", null, "León"),
  new Zone("America/Managua", "Nicaragua", null, "Masaya"),
  new Zone("America/Managua", "Nicaragua", null, "Chinandega"),
  new Zone("America/Managua", "Nicaragua", null, "Matagalpa"),

  // America/Manaus (Amazon Time)
  new Zone("America/Manaus", "Brazil", "Amazonas", "Manaus"),
  new Zone("America/Manaus", "Brazil", "Amazonas", "Itacoatiara"),
  new Zone("America/Manaus", "Brazil", "Amazonas", "Manacapuru"),
  new Zone("America/Manaus", "Brazil", "Amazonas", "Parintins"),
  new Zone("America/Manaus", "Brazil", "Amazonas", "Coari"),

  // America/Marigot (Atlantic Standard Time)
  new Zone("America/Marigot", "Saint Martin", null, "Marigot"),
  new Zone("America/Marigot", "Saint Martin", null, "Grand Case"),
  new Zone("America/Marigot", "Saint Martin", null, "Cul de Sac"),
  new Zone("America/Marigot", "Saint Martin", null, "Orient Bay"),
  new Zone("America/Marigot", "Saint Martin", null, "Anse Marcel"),

  // America/Martinique (Atlantic Standard Time)
  new Zone("America/Martinique", "Martinique", null, "Fort-de-France"),
  new Zone("America/Martinique", "Martinique", null, "Le Lamentin"),
  new Zone("America/Martinique", "Martinique", null, "Schoelcher"),
  new Zone("America/Martinique", "Martinique", null, "Le Robert"),
  new Zone("America/Martinique", "Martinique", null, "Ducos"),

  // America/Matamoros (Central Daylight Time)
  new Zone("America/Matamoros", "Mexico", "Tamaulipas", "Matamoros"),
  new Zone("America/Matamoros", "Mexico", "Tamaulipas", "Reynosa"),
  new Zone("America/Matamoros", "Mexico", "Tamaulipas", "Nuevo Laredo"),
  new Zone("America/Matamoros", "Mexico", "Tamaulipas", "Ciudad Victoria"),
  new Zone("America/Matamoros", "Mexico", "Tamaulipas", "Tampico"),

  // America/Mazatlan (Mountain Standard Time)
  new Zone("America/Mazatlan", "Mexico", "Sinaloa", "Mazatlán"),
  new Zone("America/Mazatlan", "Mexico", "Sinaloa", "Culiacán"),
  new Zone("America/Mazatlan", "Mexico", "Sinaloa", "Los Mochis"),
  new Zone("America/Mazatlan", "Mexico", "Sinaloa", "Guamúchil"),
  new Zone("America/Mazatlan", "Mexico", "Sinaloa", "Navolato"),

  // America/Mendoza (Argentina Time)
  new Zone("America/Mendoza", "Argentina", "Mendoza", "Mendoza"),
  new Zone("America/Mendoza", "Argentina", "Mendoza", "San Rafael"),
  new Zone("America/Mendoza", "Argentina", "Mendoza", "San Martín"),
  new Zone("America/Mendoza", "Argentina", "Mendoza", "Godoy Cruz"),
  new Zone("America/Mendoza", "Argentina", "Mendoza", "Luján de Cuyo"),

  // America/Menominee (Central Daylight Time)
  new Zone("America/Menominee", "United States", "Michigan", "Menominee"),
  new Zone("America/Menominee", "United States", "Wisconsin", "Milwaukee"),
  new Zone("America/Menominee", "United States", "Wisconsin", "Sheboygan"),
  new Zone("America/Menominee", "United States", "Wisconsin", "Fitchburg"),
  new Zone("America/Menominee", "United States", "Wisconsin", "South Milwaukee"),

  // America/Merida (Central Standard Time)
  new Zone("America/Merida", "Mexico", "Yucatán", "Mérida"),
  new Zone("America/Merida", "Mexico", "Campeche", "Campeche"),
  new Zone("America/Merida", "Mexico", "Campeche", "Ciudad del Carmen"),
  new Zone("America/Merida", "Mexico", "Yucatán", "Kanasín"),
  new Zone("America/Merida", "Mexico", "Yucatán", "Valladolid"),

  // America/Metlakatla (Alaska Daylight Time)
  new Zone("America/Metlakatla", "United States", "Alaska", "Metlakatla"),
  new Zone("America/Metlakatla", "United States", "Alaska", "Ketchikan"),
  new Zone("America/Metlakatla", "United States", "Alaska", "Wrangell"),
  new Zone("America/Metlakatla", "United States", "Alaska", "Petersburg"),
  new Zone("America/Metlakatla", "United States", "Alaska", "Craig"),

  // America/Mexico_City (Central Standard Time)
  new Zone("America/Mexico_City", "Mexico", "Ciudad de México", "Mexico City"),
  new Zone("America/Mexico_City", "Mexico", "México", "Ecatepec de Morelos"),
  new Zone("America/Mexico_City", "Mexico", "Jalisco", "Guadalajara"),
  new Zone("America/Mexico_City", "Mexico", "Puebla", "Puebla"),
  new Zone("America/Mexico_City", "Mexico", "Guanajuato", "León"),

  // America/Miquelon (Pierre & Miquelon Daylight Time)
  new Zone("America/Miquelon", "Saint Pierre and Miquelon", null, "Saint-Pierre"),
  new Zone("America/Miquelon", "Saint Pierre and Miquelon", null, "Miquelon"),
  new Zone("America/Miquelon", "Saint Pierre and Miquelon", null, "Langlade"),
  new Zone("America/Miquelon", "Saint Pierre and Miquelon", null, "Île aux Marins"),
  new Zone("America/Miquelon", "Saint Pierre and Miquelon", null, "Île aux Chevaux"),

  // America/Moncton (Atlantic Daylight Time)
  new Zone("America/Moncton", "Canada", "New Brunswick", "Moncton"),
  new Zone("America/Moncton", "Canada", "New Brunswick", "Saint John"),
  new Zone("America/Moncton", "Canada", "New Brunswick", "Fredericton"),
  new Zone("America/Moncton", "Canada", "New Brunswick", "Dieppe"),
  new Zone("America/Moncton", "Canada", "New Brunswick", "Miramichi"),

  // America/Monterrey (Central Standard Time)
  new Zone("America/Monterrey", "Mexico", "Nuevo León", "Monterrey"),
  new Zone("America/Monterrey", "Mexico", "Nuevo León", "San Nicolás de los Garza"),
  new Zone("America/Monterrey", "Mexico", "Nuevo León", "Guadalupe"),
  new Zone("America/Monterrey", "Mexico", "Nuevo León", "Apodaca"),
  new Zone("America/Monterrey", "Mexico", "Nuevo León", "Santa Catarina"),

  // America/Montevideo (Uruguay Time)
  new Zone("America/Montevideo", "Uruguay", null, "Montevideo"),
  new Zone("America/Montevideo", "Uruguay", null, "Salto"),
  new Zone("America/Montevideo", "Uruguay", null, "Paysandú"),
  new Zone("America/Montevideo", "Uruguay", null, "Las Piedras"),
  new Zone("America/Montevideo", "Uruguay", null, "Rivera"),

  // America/Montserrat (Atlantic Standard Time)
  new Zone("America/Montserrat", "Montserrat", null, "Brades"),
  new Zone("America/Montserrat", "Montserrat", null, "Plymouth"),
  new Zone("America/Montserrat", "Montserrat", null, "Salem"),
  new Zone("America/Montserrat", "Montserrat", null, "Look Out"),
  new Zone("America/Montserrat", "Montserrat", null, "Woodlands"),

  // America/Nassau (Eastern Daylight Time)
  new Zone("America/Nassau", "Bahamas", null, "Nassau"),
  new Zone("America/Nassau", "Bahamas", null, "Freeport"),
  new Zone("America/Nassau", "Bahamas", null, "Lucaya"),
  new Zone("America/Nassau", "Bahamas", null, "Marsh Harbour"),
  new Zone("America/Nassau", "Bahamas", null, "George Town"),

  // America/New_York (Eastern Daylight Time)
  new Zone("America/New_York", "United States", "New York", "New York City"),
  new Zone("America/New_York", "United States", "Pennsylvania", "Philadelphia"),
  new Zone("America/New_York", "United States", "Massachusetts", "Boston"),
  new Zone("America/New_York", "United States", "Georgia", "Atlanta"),
  new Zone("America/New_York", "United States", "Florida", "Miami"),

  // America/Nome (Alaska Daylight Time)
  new Zone("America/Nome", "United States", "Alaska", "Nome"),
  new Zone("America/Nome", "United States", "Alaska", "Kotzebue"),
  new Zone("America/Nome", "United States", "Alaska", "Barrow"),
  new Zone("America/Nome", "United States", "Alaska", "Unalakleet"),
  new Zone("America/Nome", "United States", "Alaska", "Gambell"),

  // America/Noronha (Fernando de Noronha Time, UTC−2)
  new Zone("America/Noronha", "Brazil", "Pernambuco", "Fernando de Noronha"),
  new Zone("America/Noronha", "Brazil", "Pernambuco", "Vila dos Remédios"),
  new Zone("America/Noronha", "Brazil", "Pernambuco", "Sueste"),
  new Zone("America/Noronha", "Brazil", "Pernambuco", "Boldró"),
  new Zone("America/Noronha", "Brazil", "Pernambuco", "Floresta Nova"),

  // America/North_Dakota/Beulah (Central Time Zone)
  new Zone("America/North_Dakota/Beulah", "United States", "North Dakota", "Beulah"),
  new Zone("America/North_Dakota/Beulah", "United States", "North Dakota", "Hazen"),
  new Zone("America/North_Dakota/Beulah", "United States", "North Dakota", "Zap"),
  new Zone("America/North_Dakota/Beulah", "United States", "North Dakota", "Golden Valley"),
  new Zone("America/North_Dakota/Beulah", "United States", "North Dakota", "Pick City"),

  // America/North_Dakota/Center (Central Time Zone)
  new Zone("America/North_Dakota/Center", "United States", "North Dakota", "Center"),
  new Zone("America/North_Dakota/Center", "United States", "North Dakota", "Washburn"),
  new Zone("America/North_Dakota/Center", "United States", "North Dakota", "Wilton"),
  new Zone("America/North_Dakota/Center", "United States", "North Dakota", "Underwood"),
  new Zone("America/North_Dakota/Center", "United States", "North Dakota", "Turtle Lake"),

  // America/North_Dakota/New_Salem (Central Time Zone)
  new Zone("America/North_Dakota/New_Salem", "United States", "North Dakota", "New Salem"),
  new Zone("America/North_Dakota/New_Salem", "United States", "North Dakota", "Glen Ullin"),
  new Zone("America/North_Dakota/New_Salem", "United States", "North Dakota", "Hebron"),
  new Zone("America/North_Dakota/New_Salem", "United States", "North Dakota", "Almont"),
  new Zone("America/North_Dakota/New_Salem", "United States", "North Dakota", "Taylor"),

  // America/Ojinaga (Mountain Time Zone)
  new Zone("America/Ojinaga", "Mexico", "Chihuahua", "Ojinaga"),
  new Zone("America/Ojinaga", "Mexico", "Chihuahua", "Manuel Ojinaga"),
  new Zone("America/Ojinaga", "Mexico", "Chihuahua", "Aldama"),
  new Zone("America/Ojinaga", "Mexico", "Chihuahua", "Coyame del Sotol"),
  new Zone("America/Ojinaga", "Mexico", "Chihuahua", "Presidio"),

  // America/Panama (Eastern Standard Time, UTC−5)
  new Zone("America/Panama", "Panama", null, "Panama City"),
  new Zone("America/Panama", "Panama", null, "Colón"),
  new Zone("America/Panama", "Panama", null, "David"),
  new Zone("America/Panama", "Panama", null, "Santiago de Veraguas"),
  new Zone("America/Panama", "Panama", null, "Chitré"),

  // America/Paramaribo (Suriname Time, UTC−3)
  new Zone("America/Paramaribo", "Suriname", null, "Paramaribo"),
  new Zone("America/Paramaribo", "Suriname", null, "Nieuw Nickerie"),
  new Zone("America/Paramaribo", "Suriname", null, "Lelydorp"),
  new Zone("America/Paramaribo", "Suriname", null, "Moengo"),
  new Zone("America/Paramaribo", "Suriname", null, "Albina"),

  // America/Phoenix (Mountain Standard Time, UTC−7, no DST)
  new Zone("America/Phoenix", "United States", "Arizona", "Phoenix"),
  new Zone("America/Phoenix", "United States", "Arizona", "Tucson"),
  new Zone("America/Phoenix", "United States", "Arizona", "Mesa"),
  new Zone("America/Phoenix", "United States", "Arizona", "Chandler"),
  new Zone("America/Phoenix", "United States", "Arizona", "Scottsdale"),

  // America/Port-au-Prince (Eastern Standard Time, UTC−5)
  new Zone("America/Port-au-Prince", "Haiti", null, "Port-au-Prince"),
  new Zone("America/Port-au-Prince", "Haiti", null, "Cap-Haïtien"),
  new Zone("America/Port-au-Prince", "Haiti", null, "Les Cayes"),
  new Zone("America/Port-au-Prince", "Haiti", null, "Gonaïves"),
  new Zone("America/Port-au-Prince", "Haiti", null, "Jacmel"),

  // America/Port_of_Spain (Atlantic Standard Time, UTC−4)
  new Zone("America/Port_of_Spain", "Trinidad and Tobago", null, "Port of Spain"),
  new Zone("America/Port_of_Spain", "Trinidad and Tobago", null, "San Fernando"),
  new Zone("America/Port_of_Spain", "Trinidad and Tobago", null, "Chaguanas"),
  new Zone("America/Port_of_Spain", "Trinidad and Tobago", null, "Arima"),
  new Zone("America/Port_of_Spain", "Trinidad and Tobago", null, "Point Fortin"),

  // America/Porto_Velho (Amazon Time, UTC−4)
  new Zone("America/Porto_Velho", "Brazil", "Rondônia", "Porto Velho"),
  new Zone("America/Porto_Velho", "Brazil", "Rondônia", "Ji-Paraná"),
  new Zone("America/Porto_Velho", "Brazil", "Rondônia", "Vilhena"),
  new Zone("America/Porto_Velho", "Brazil", "Rondônia", "Ariquemes"),
  new Zone("America/Porto_Velho", "Brazil", "Rondônia", "Cacoal"),

  // America/Puerto_Rico (Atlantic Standard Time, UTC−4)
  new Zone("America/Puerto_Rico", "Puerto Rico", null, "San Juan"),
  new Zone("America/Puerto_Rico", "Puerto Rico", null, "Bayamón"),
  new Zone("America/Puerto_Rico", "Puerto Rico", null, "Ponce"),
  new Zone("America/Puerto_Rico", "Puerto Rico", null, "Carolina"),
  new Zone("America/Puerto_Rico", "Puerto Rico", null, "Caguas"),

  // America/Punta_Arenas (Chile Summer Time, UTC−3)
  new Zone("America/Punta_Arenas", "Chile", "Magallanes", "Punta Arenas"),
  new Zone("America/Punta_Arenas", "Chile", "Magallanes", "Puerto Natales"),
  new Zone("America/Punta_Arenas", "Chile", "Magallanes", "Porvenir"),
  new Zone("America/Punta_Arenas", "Chile", "Magallanes", "Puerto Williams"),
  new Zone("America/Punta_Arenas", "Chile", "Magallanes", "Cerro Sombrero"),

  // America/Rankin_Inlet (Central Time Zone - Nunavut, Canada)
  new Zone("America/Rankin_Inlet", "Canada", "Nunavut", "Rankin Inlet"),
  new Zone("America/Rankin_Inlet", "Canada", "Nunavut", "Arviat"),
  new Zone("America/Rankin_Inlet", "Canada", "Nunavut", "Whale Cove"),
  new Zone("America/Rankin_Inlet", "Canada", "Nunavut", "Chesterfield Inlet"),
  new Zone("America/Rankin_Inlet", "Canada", "Nunavut", "Coral Harbour"),

  // America/Recife (UTC−3, Pernambuco, Brazil)
  new Zone("America/Recife", "Brazil", "Pernambuco", "Recife"),
  new Zone("America/Recife", "Brazil", "Pernambuco", "Olinda"),
  new Zone("America/Recife", "Brazil", "Pernambuco", "Jaboatão dos Guararapes"),
  new Zone("America/Recife", "Brazil", "Pernambuco", "Caruaru"),
  new Zone("America/Recife", "Brazil", "Pernambuco", "Petrolina"),

  // America/Regina (Central Standard Time - Saskatchewan, no DST)
  new Zone("America/Regina", "Canada", "Saskatchewan", "Regina"),
  new Zone("America/Regina", "Canada", "Saskatchewan", "Moose Jaw"),
  new Zone("America/Regina", "Canada", "Saskatchewan", "Weyburn"),
  new Zone("America/Regina", "Canada", "Saskatchewan", "Estevan"),
  new Zone("America/Regina", "Canada", "Saskatchewan", "Fort Qu'Appelle"),

  // America/Resolute (Central/Daylight in summer - Nunavut)
  new Zone("America/Resolute", "Canada", "Nunavut", "Resolute"),
  new Zone("America/Resolute", "Canada", "Nunavut", "Grise Fiord"),
  new Zone("America/Resolute", "Canada", "Nunavut", "Pond Inlet"),
  new Zone("America/Resolute", "Canada", "Nunavut", "Artic Bay"),
  new Zone("America/Resolute", "Canada", "Nunavut", "Qikiqtarjuaq"),

  // America/Rio_Branco (UTC−5, Acre, Brazil)
  new Zone("America/Rio_Branco", "Brazil", "Acre", "Rio Branco"),
  new Zone("America/Rio_Branco", "Brazil", "Acre", "Cruzeiro do Sul"),
  new Zone("America/Rio_Branco", "Brazil", "Acre", "Sena Madureira"),
  new Zone("America/Rio_Branco", "Brazil", "Acre", "Tarauacá"),
  new Zone("America/Rio_Branco", "Brazil", "Acre", "Feijó"),

  // America/Santarem (UTC−3, Pará, Brazil)
  new Zone("America/Santarem", "Brazil", "Pará", "Santarém"),
  new Zone("America/Santarem", "Brazil", "Pará", "Alter do Chão"),
  new Zone("America/Santarem", "Brazil", "Pará", "Belterra"),
  new Zone("America/Santarem", "Brazil", "Pará", "Aveiro"),
  new Zone("America/Santarem", "Brazil", "Pará", "Mojuí dos Campos"),

  // America/Santiago (Chile Standard/Summer Time)
  new Zone("America/Santiago", "Chile", "Santiago Metropolitan", "Santiago"),
  new Zone("America/Santiago", "Chile", "Santiago Metropolitan", "Puente Alto"),
  new Zone("America/Santiago", "Chile", "Valparaíso", "Valparaíso"),
  new Zone("America/Santiago", "Chile", "Valparaíso", "Viña del Mar"),
  new Zone("America/Santiago", "Chile", "Maule", "Talca"),

  // America/Santo_Domingo (Atlantic Standard Time, no DST)
  new Zone("America/Santo_Domingo", "Dominican Republic", null, "Santo Domingo"),
  new Zone("America/Santo_Domingo", "Dominican Republic", null, "Santiago de los Caballeros"),
  new Zone("America/Santo_Domingo", "Dominican Republic", null, "San Pedro de Macorís"),
  new Zone("America/Santo_Domingo", "Dominican Republic", null, "La Romana"),
  new Zone("America/Santo_Domingo", "Dominican Republic", null, "San Francisco de Macorís"),

  // America/Sao_Paulo (UTC−3, São Paulo state)
  new Zone("America/Sao_Paulo", "Brazil", "São Paulo", "São Paulo"),
  new Zone("America/Sao_Paulo", "Brazil", "São Paulo", "Campinas"),
  new Zone("America/Sao_Paulo", "Brazil", "São Paulo", "Santos"),
  new Zone("America/Sao_Paulo", "Brazil", "São Paulo", "São Bernardo do Campo"),
  new Zone("America/Sao_Paulo", "Brazil", "São Paulo", "Guarulhos"),

  // America/Scoresbysund (UTC−1, Greenland - Ittoqqortoormiit)
  new Zone("America/Scoresbysund", "Greenland", null, "Ittoqqortoormiit"),
  new Zone("America/Scoresbysund", "Greenland", null, "Constable Pynt"),
  new Zone("America/Scoresbysund", "Greenland", null, "Hurry Inlet"),
  new Zone("America/Scoresbysund", "Greenland", null, "Cape Tobin"),
  new Zone("America/Scoresbysund", "Greenland", null, "Nerlerit Inaat"),

  // America/Sitka (Alaska Time Zone)
  new Zone("America/Sitka", "United States", "Alaska", "Sitka"),
  new Zone("America/Sitka", "United States", "Alaska", "Baranof Island"),
  new Zone("America/Sitka", "United States", "Alaska", "Port Alexander"),
  new Zone("America/Sitka", "United States", "Alaska", "Kake"),
  new Zone("America/Sitka", "United States", "Alaska", "Angoon"),

  // America/St_Barthelemy (AST, UTC−4)
  new Zone("America/St_Barthelemy", "Saint Barthélemy", null, "Gustavia"),
  new Zone("America/St_Barthelemy", "Saint Barthélemy", null, "Corossol"),
  new Zone("America/St_Barthelemy", "Saint Barthélemy", null, "Lorient"),
  new Zone("America/St_Barthelemy", "Saint Barthélemy", null, "Colombier"),
  new Zone("America/St_Barthelemy", "Saint Barthélemy", null, "St. Jean"),

  // America/St_Johns (Newfoundland Time Zone, UTC−3:30)
  new Zone("America/St_Johns", "Canada", "Newfoundland and Labrador", "St. John's"),
  new Zone("America/St_Johns", "Canada", "Newfoundland and Labrador", "Mount Pearl"),
  new Zone("America/St_Johns", "Canada", "Newfoundland and Labrador", "Conception Bay South"),
  new Zone("America/St_Johns", "Canada", "Newfoundland and Labrador", "Paradise"),
  new Zone("America/St_Johns", "Canada", "Newfoundland and Labrador", "Torbay"),

  // America/St_Kitts (AST, UTC−4)
  new Zone("America/St_Kitts", "Saint Kitts and Nevis", null, "Basseterre"),
  new Zone("America/St_Kitts", "Saint Kitts and Nevis", null, "Sandy Point Town"),
  new Zone("America/St_Kitts", "Saint Kitts and Nevis", null, "Dieppe Bay Town"),
  new Zone("America/St_Kitts", "Saint Kitts and Nevis", null, "Cayon"),
  new Zone("America/St_Kitts", "Saint Kitts and Nevis", null, "Tabernacle"),

  // America/St_Lucia (AST, UTC−4)
  new Zone("America/St_Lucia", "Saint Lucia", null, "Castries"),
  new Zone("America/St_Lucia", "Saint Lucia", null, "Soufrière"),
  new Zone("America/St_Lucia", "Saint Lucia", null, "Vieux Fort"),
  new Zone("America/St_Lucia", "Saint Lucia", null, "Gros Islet"),
  new Zone("America/St_Lucia", "Saint Lucia", null, "Dennery"),

  // America/St_Thomas (AST, UTC−4)
  new Zone("America/St_Thomas", "United States Virgin Islands", null, "Charlotte Amalie"),
  new Zone("America/St_Thomas", "United States Virgin Islands", null, "Red Hook"),
  new Zone("America/St_Thomas", "United States Virgin Islands", null, "Frenchtown"),
  new Zone("America/St_Thomas", "United States Virgin Islands", null, "Anna's Retreat"),
  new Zone("America/St_Thomas", "United States Virgin Islands", null, "Tutu"),

  // America/St_Vincent (AST, UTC−4)
  new Zone("America/St_Vincent", "Saint Vincent and the Grenadines", null, "Kingstown"),
  new Zone("America/St_Vincent", "Saint Vincent and the Grenadines", null, "Calliaqua"),
  new Zone("America/St_Vincent", "Saint Vincent and the Grenadines", null, "Georgetown"),
  new Zone("America/St_Vincent", "Saint Vincent and the Grenadines", null, "Barrouallie"),
  new Zone("America/St_Vincent", "Saint Vincent and the Grenadines", null, "Layou"),

  // America/Swift_Current (Saskatchewan - no DST)
  new Zone("America/Swift_Current", "Canada", "Saskatchewan", "Swift Current"),
  new Zone("America/Swift_Current", "Canada", "Saskatchewan", "Maple Creek"),
  new Zone("America/Swift_Current", "Canada", "Saskatchewan", "Shaunavon"),
  new Zone("America/Swift_Current", "Canada", "Saskatchewan", "Leader"),
  new Zone("America/Swift_Current", "Canada", "Saskatchewan", "Herbert"),

  // America/Tegucigalpa (UTC−6, Honduras)
  new Zone("America/Tegucigalpa", "Honduras", null, "Tegucigalpa"),
  new Zone("America/Tegucigalpa", "Honduras", null, "San Pedro Sula"),
  new Zone("America/Tegucigalpa", "Honduras", null, "La Ceiba"),
  new Zone("America/Tegucigalpa", "Honduras", null, "Choloma"),
  new Zone("America/Tegucigalpa", "Honduras", null, "Comayagua"),

  // America/Thule (UTC−4, Greenland - Pituffik)
  new Zone("America/Thule", "Greenland", null, "Pituffik"),
  new Zone("America/Thule", "Greenland", null, "Qaanaaq"),
  new Zone("America/Thule", "Greenland", null, "Savissivik"),
  new Zone("America/Thule", "Greenland", null, "Moriusaq"),
  new Zone("America/Thule", "Greenland", null, "Dundas"),

  // America/Tijuana (Pacific Time - Baja California)
  new Zone("America/Tijuana", "Mexico", "Baja California", "Tijuana"),
  new Zone("America/Tijuana", "Mexico", "Baja California", "Mexicali"),
  new Zone("America/Tijuana", "Mexico", "Baja California", "Rosarito"),
  new Zone("America/Tijuana", "Mexico", "Baja California", "Tecate"),
  new Zone("America/Tijuana", "Mexico", "Baja California", "San Felipe"),

  // America/Toronto (Eastern Time - Ontario)
  new Zone("America/Toronto", "Canada", "Ontario", "Toronto"),
  new Zone("America/Toronto", "Canada", "Ontario", "Ottawa"),
  new Zone("America/Toronto", "Canada", "Ontario", "Hamilton"),
  new Zone("America/Toronto", "Canada", "Ontario", "Mississauga"),
  new Zone("America/Toronto", "Canada", "Ontario", "London"),

  // America/Tortola (AST, UTC−4)
  new Zone("America/Tortola", "British Virgin Islands", null, "Road Town"),
  new Zone("America/Tortola", "British Virgin Islands", null, "West End"),
  new Zone("America/Tortola", "British Virgin Islands", null, "East End"),
  new Zone("America/Tortola", "British Virgin Islands", null, "Cane Garden Bay"),
  new Zone("America/Tortola", "British Virgin Islands", null, "Great Harbour"),

  // America/Vancouver (Pacific Time - British Columbia)
  new Zone("America/Vancouver", "Canada", "British Columbia", "Vancouver"),
  new Zone("America/Vancouver", "Canada", "British Columbia", "Surrey"),
  new Zone("America/Vancouver", "Canada", "British Columbia", "Burnaby"),
  new Zone("America/Vancouver", "Canada", "British Columbia", "Richmond"),
  new Zone("America/Vancouver", "Canada", "British Columbia", "Coquitlam"),

  // America/Whitehorse (Yukon Time - no DST)
  new Zone("America/Whitehorse", "Canada", "Yukon", "Whitehorse"),
  new Zone("America/Whitehorse", "Canada", "Yukon", "Dawson City"),
  new Zone("America/Whitehorse", "Canada", "Yukon", "Watson Lake"),
  new Zone("America/Whitehorse", "Canada", "Yukon", "Haines Junction"),
  new Zone("America/Whitehorse", "Canada", "Yukon", "Carmacks"),

  // America/Winnipeg (Central Time - Manitoba)
  new Zone("America/Winnipeg", "Canada", "Manitoba", "Winnipeg"),
  new Zone("America/Winnipeg", "Canada", "Manitoba", "Brandon"),
  new Zone("America/Winnipeg", "Canada", "Manitoba", "Portage la Prairie"),
  new Zone("America/Winnipeg", "Canada", "Manitoba", "Steinbach"),
  new Zone("America/Winnipeg", "Canada", "Manitoba", "Thompson"),

  // America/Yakutat (Alaska Time Zone)
  new Zone("America/Yakutat", "United States", "Alaska", "Yakutat"),
  new Zone("America/Yakutat", "United States", "Alaska", "Icy Bay"),
  new Zone("America/Yakutat", "United States", "Alaska", "Dry Bay"),
  new Zone("America/Yakutat", "United States", "Alaska", "Russell Fiord"),
  new Zone("America/Yakutat", "United States", "Alaska", "Hubbard Glacier"),

  // Antarctica/Casey (Casey Station, UTC+8)
  new Zone("Antarctica/Casey", "Australia", null, "Casey Station"),
  new Zone("Antarctica/Casey", "Australia", null, "Bailey Peninsula"),
  new Zone("Antarctica/Casey", "Australia", null, "Wilkes Land Coast"),
  new Zone("Antarctica/Casey", "Australia", null, "Newcomb Bay"),
  new Zone("Antarctica/Casey", "Australia", null, "Mitchell Peninsula"),

  // Antarctica/Davis (Davis Station, UTC+7)
  new Zone("Antarctica/Davis", "Australia", null, "Davis Station"),
  new Zone("Antarctica/Davis", "Australia", null, "Vestfold Hills"),
  new Zone("Antarctica/Davis", "Australia", null, "Prydz Bay"),
  new Zone("Antarctica/Davis", "Australia", null, "Broad Peninsula"),
  new Zone("Antarctica/Davis", "Australia", null, "Heidemann Bay"),

  // Antarctica/DumontDUrville (France, UTC+10)
  new Zone("Antarctica/DumontDUrville", "France", null, "Dumont d’Urville Station"),
  new Zone("Antarctica/DumontDUrville", "France", null, "Petrel Island"),
  new Zone("Antarctica/DumontDUrville", "France", null, "Adélie Land"),
  new Zone("Antarctica/DumontDUrville", "France", null, "Port Martin Ruins"),
  new Zone("Antarctica/DumontDUrville", "France", null, "Astrolabe Glacier"),

  // Antarctica/Macquarie (Australia, UTC+11)
  new Zone("Antarctica/Macquarie", "Australia", null, "Macquarie Island Station"),
  new Zone("Antarctica/Macquarie", "Australia", null, "Macquarie Island"),
  new Zone("Antarctica/Macquarie", "Australia", null, "Sandy Bay"),
  new Zone("Antarctica/Macquarie", "Australia", null, "The Nuggets"),
  new Zone("Antarctica/Macquarie", "Australia", null, "North Head"),

  // Antarctica/Mawson (Australia, UTC+5)
  new Zone("Antarctica/Mawson", "Australia", null, "Mawson Station"),
  new Zone("Antarctica/Mawson", "Australia", null, "Holme Bay"),
  new Zone("Antarctica/Mawson", "Australia", null, "Mac. Robertson Land"),
  new Zone("Antarctica/Mawson", "Australia", null, "Mount Henderson"),
  new Zone("Antarctica/Mawson", "Australia", null, "Béchervaise Island"),

  // Antarctica/McMurdo (New Zealand, UTC+12/+13 DST)
  new Zone("Antarctica/McMurdo", "New Zealand", null, "McMurdo Station"),
  new Zone("Antarctica/McMurdo", "United States", "Antarctica", "Scott Base"),
  new Zone("Antarctica/McMurdo", "United States", "Antarctica", "Ross Island"),
  new Zone("Antarctica/McMurdo", "United States", "Antarctica", "Mount Erebus"),
  new Zone("Antarctica/McMurdo", "United States", "Antarctica", "Hut Point"),

  // Antarctica/Palmer (Chile, UTC−3)
  new Zone("Antarctica/Palmer", "United States", null, "Palmer Station"),
  new Zone("Antarctica/Palmer", "United States", null, "Anvers Island"),
  new Zone("Antarctica/Palmer", "United States", null, "Marr Ice Piedmont"),
  new Zone("Antarctica/Palmer", "United States", null, "Hero Inlet"),
  new Zone("Antarctica/Palmer", "United States", null, "Arthur Harbour"),

  // Antarctica/Rothera (UK, UTC−3)
  new Zone("Antarctica/Rothera", "United Kingdom", null, "Rothera Station"),
  new Zone("Antarctica/Rothera", "United Kingdom", null, "Adelaide Island"),
  new Zone("Antarctica/Rothera", "United Kingdom", null, "Wright Peninsula"),
  new Zone("Antarctica/Rothera", "United Kingdom", null, "Reptile Ridge"),
  new Zone("Antarctica/Rothera", "United Kingdom", null, "South Cove"),

  // Antarctica/Syowa (Japan, UTC+3)
  new Zone("Antarctica/Syowa", "Japan", null, "Syowa Station"),
  new Zone("Antarctica/Syowa", "Japan", null, "East Ongul Island"),
  new Zone("Antarctica/Syowa", "Japan", null, "Queen Maud Land"),
  new Zone("Antarctica/Syowa", "Japan", null, "Lützow-Holm Bay"),
  new Zone("Antarctica/Syowa", "Japan", null, "Langhovde Hills"),

  // Antarctica/Troll (Norway, UTC+0 standard, UTC+2 in summer)
  new Zone("Antarctica/Troll", "Norway", null, "Troll Station"),
  new Zone("Antarctica/Troll", "Norway", null, "Jutulsessen"),
  new Zone("Antarctica/Troll", "Norway", null, "Fimbul Ice Shelf"),
  new Zone("Antarctica/Troll", "Norway", null, "Queen Maud Land"),
  new Zone("Antarctica/Troll", "Norway", null, "Gjelsvik Mountains"),

  // Antarctica/Vostok (Russia, UTC+6)
  new Zone("Antarctica/Vostok", "Russia", null, "Vostok Station"),
  new Zone("Antarctica/Vostok", "Russia", null, "Lake Vostok"),
  new Zone("Antarctica/Vostok", "Russia", null, "Pole of Cold"),
  new Zone("Antarctica/Vostok", "Russia", null, "Princess Elizabeth Land"),
  new Zone("Antarctica/Vostok", "Russia", null, "Dome Argus"),

  // Arctic/Longyearbyen (Norway, UTC+1/+2 DST)
  new Zone("Arctic/Longyearbyen", "Norway", "Svalbard", "Longyearbyen"),
  new Zone("Arctic/Longyearbyen", "Norway", "Svalbard", "Barentsburg"),
  new Zone("Arctic/Longyearbyen", "Norway", "Svalbard", "Ny-Ålesund"),
  new Zone("Arctic/Longyearbyen", "Norway", "Svalbard", "Sveagruva"),
  new Zone("Arctic/Longyearbyen", "Norway", "Svalbard", "Hornsund"),

  // Asia/Aden (Yemen, UTC+3)
  new Zone("Asia/Aden", "Yemen", null, "Aden"),
  new Zone("Asia/Aden", "Yemen", null, "Sana'a"),
  new Zone("Asia/Aden", "Yemen", null, "Al Hudaydah"),
  new Zone("Asia/Aden", "Yemen", null, "Taiz"),
  new Zone("Asia/Aden", "Yemen", null, "Mukalla"),

  // Asia/Almaty (Kazakhstan, UTC+6)
  new Zone("Asia/Almaty", "Kazakhstan", null, "Almaty"),
  new Zone("Asia/Almaty", "Kazakhstan", null, "Taldykorgan"),
  new Zone("Asia/Almaty", "Kazakhstan", null, "Kaskelen"),
  new Zone("Asia/Almaty", "Kazakhstan", null, "Esik"),
  new Zone("Asia/Almaty", "Kazakhstan", null, "Usharal"),

  // Asia/Amman (Jordan, UTC+2/+3 DST)
  new Zone("Asia/Amman", "Jordan", null, "Amman"),
  new Zone("Asia/Amman", "Jordan", null, "Irbid"),
  new Zone("Asia/Amman", "Jordan", null, "Zarqa"),
  new Zone("Asia/Amman", "Jordan", null, "Madaba"),
  new Zone("Asia/Amman", "Jordan", null, "Aqaba"),

  // Asia/Anadyr (Russia, UTC+12)
  new Zone("Asia/Anadyr", "Russia", "Chukotka", "Anadyr"),
  new Zone("Asia/Anadyr", "Russia", "Chukotka", "Beringovsky"),
  new Zone("Asia/Anadyr", "Russia", "Chukotka", "Lavrentiya"),
  new Zone("Asia/Anadyr", "Russia", "Chukotka", "Uelen"),
  new Zone("Asia/Anadyr", "Russia", "Chukotka", "Provideniya"),

  // Asia/Aqtau (Kazakhstan, UTC+5)
  new Zone("Asia/Aqtau", "Kazakhstan", null, "Aqtau"),
  new Zone("Asia/Aqtau", "Kazakhstan", null, "Fort-Shevchenko"),
  new Zone("Asia/Aqtau", "Kazakhstan", null, "Zhanaozen"),
  new Zone("Asia/Aqtau", "Kazakhstan", null, "Beyneu"),
  new Zone("Asia/Aqtau", "Kazakhstan", null, "Mangystau"),

  // Asia/Aqtobe (Kazakhstan, UTC+5)
  new Zone("Asia/Aqtobe", "Kazakhstan", null, "Aqtobe"),
  new Zone("Asia/Aqtobe", "Kazakhstan", null, "Khromtau"),
  new Zone("Asia/Aqtobe", "Kazakhstan", null, "Shalkar"),
  new Zone("Asia/Aqtobe", "Kazakhstan", null, "Emba"),
  new Zone("Asia/Aqtobe", "Kazakhstan", null, "Martuk"),

  // Asia/Ashgabat (Turkmenistan, UTC+5)
  new Zone("Asia/Ashgabat", "Turkmenistan", null, "Ashgabat"),
  new Zone("Asia/Ashgabat", "Turkmenistan", null, "Turkmenabat"),
  new Zone("Asia/Ashgabat", "Turkmenistan", null, "Mary"),
  new Zone("Asia/Ashgabat", "Turkmenistan", null, "Balkanabat"),
  new Zone("Asia/Ashgabat", "Turkmenistan", null, "Dashoguz"),

  // Asia/Atyrau (Kazakhstan, UTC+5)
  new Zone("Asia/Atyrau", "Kazakhstan", null, "Atyrau"),
  new Zone("Asia/Atyrau", "Kazakhstan", null, "Inderbor"),
  new Zone("Asia/Atyrau", "Kazakhstan", null, "Kulsary"),
  new Zone("Asia/Atyrau", "Kazakhstan", null, "Dossor"),
  new Zone("Asia/Atyrau", "Kazakhstan", null, "Makat"),

  // Asia/Baghdad (Iraq, UTC+3)
  new Zone("Asia/Baghdad", "Iraq", null, "Baghdad"),
  new Zone("Asia/Baghdad", "Iraq", null, "Basra"),
  new Zone("Asia/Baghdad", "Iraq", null, "Mosul"),
  new Zone("Asia/Baghdad", "Iraq", null, "Erbil"),
  new Zone("Asia/Baghdad", "Iraq", null, "Najaf"),

  // Asia/Bahrain (Bahrain, UTC+3)
  new Zone("Asia/Bahrain", "Bahrain", null, "Manama"),
  new Zone("Asia/Bahrain", "Bahrain", null, "Riffa"),
  new Zone("Asia/Bahrain", "Bahrain", null, "Muharraq"),
  new Zone("Asia/Bahrain", "Bahrain", null, "Isa Town"),
  new Zone("Asia/Bahrain", "Bahrain", null, "Hamad Town"),

  // Asia/Baku (Azerbaijan, UTC+4)
  new Zone("Asia/Baku", "Azerbaijan", null, "Baku"),
  new Zone("Asia/Baku", "Azerbaijan", null, "Sumqayit"),
  new Zone("Asia/Baku", "Azerbaijan", null, "Ganja"),
  new Zone("Asia/Baku", "Azerbaijan", null, "Mingachevir"),
  new Zone("Asia/Baku", "Azerbaijan", null, "Lankaran"),

  // Asia/Bangkok (Thailand, UTC+7)
  new Zone("Asia/Bangkok", "Thailand", null, "Bangkok"),
  new Zone("Asia/Bangkok", "Thailand", null, "Chiang Mai"),
  new Zone("Asia/Bangkok", "Thailand", null, "Phuket"),
  new Zone("Asia/Bangkok", "Thailand", null, "Pattaya"),
  new Zone("Asia/Bangkok", "Thailand", null, "Khon Kaen"),

  // Asia/Barnaul (Russia, UTC+7)
  new Zone("Asia/Barnaul", "Russia", "Altai Krai", "Barnaul"),
  new Zone("Asia/Barnaul", "Russia", "Altai Krai", "Biysk"),
  new Zone("Asia/Barnaul", "Russia", "Altai Krai", "Rubtsovsk"),
  new Zone("Asia/Barnaul", "Russia", "Altai Krai", "Novoaltaysk"),
  new Zone("Asia/Barnaul", "Russia", "Altai Krai", "Zarinsk"),

  // Asia/Beirut (Lebanon, UTC+2/+3 DST)
  new Zone("Asia/Beirut", "Lebanon", null, "Beirut"),
  new Zone("Asia/Beirut", "Lebanon", null, "Tripoli"),
  new Zone("Asia/Beirut", "Lebanon", null, "Sidon"),
  new Zone("Asia/Beirut", "Lebanon", null, "Tyre"),
  new Zone("Asia/Beirut", "Lebanon", null, "Zahle"),

  // Asia/Bishkek (Kyrgyzstan, UTC+6)
  new Zone("Asia/Bishkek", "Kyrgyzstan", null, "Bishkek"),
  new Zone("Asia/Bishkek", "Kyrgyzstan", null, "Osh"),
  new Zone("Asia/Bishkek", "Kyrgyzstan", null, "Jalal-Abad"),
  new Zone("Asia/Bishkek", "Kyrgyzstan", null, "Karakol"),
  new Zone("Asia/Bishkek", "Kyrgyzstan", null, "Talas"),

  // Asia/Brunei (Brunei, UTC+8)
  new Zone("Asia/Brunei", "Brunei", null, "Bandar Seri Begawan"),
  new Zone("Asia/Brunei", "Brunei", null, "Kuala Belait"),
  new Zone("Asia/Brunei", "Brunei", null, "Seria"),
  new Zone("Asia/Brunei", "Brunei", null, "Tutong"),
  new Zone("Asia/Brunei", "Brunei", null, "Bangar"),

  // Asia/Calcutta (India, UTC+5:30)
  new Zone("Asia/Calcutta", "India", "West Bengal", "Kolkata"),
  new Zone("Asia/Calcutta", "India", "Maharashtra", "Mumbai"),
  new Zone("Asia/Calcutta", "India", "Delhi", "New Delhi"),
  new Zone("Asia/Calcutta", "India", "Karnataka", "Bangalore"),
  new Zone("Asia/Calcutta", "India", "Tamil Nadu", "Chennai"),

  // Asia/Chita (Russia, UTC+9)
  new Zone("Asia/Chita", "Russia", "Zabaykalsky Krai", "Chita"),
  new Zone("Asia/Chita", "Russia", "Zabaykalsky Krai", "Borzya"),
  new Zone("Asia/Chita", "Russia", "Zabaykalsky Krai", "Krasnokamensk"),
  new Zone("Asia/Chita", "Russia", "Zabaykalsky Krai", "Petrovsk-Zabaykalsky"),
  new Zone("Asia/Chita", "Russia", "Zabaykalsky Krai", "Sretensk"),

  // Asia/Colombo (Sri Lanka, UTC+5:30)
  new Zone("Asia/Colombo", "Sri Lanka", null, "Colombo"),
  new Zone("Asia/Colombo", "Sri Lanka", null, "Kandy"),
  new Zone("Asia/Colombo", "Sri Lanka", null, "Galle"),
  new Zone("Asia/Colombo", "Sri Lanka", null, "Jaffna"),
  new Zone("Asia/Colombo", "Sri Lanka", null, "Negombo"),

  // Asia/Damascus (Syria, UTC+2/+3 DST)
  new Zone("Asia/Damascus", "Syria", null, "Damascus"),
  new Zone("Asia/Damascus", "Syria", null, "Aleppo"),
  new Zone("Asia/Damascus", "Syria", null, "Homs"),
  new Zone("Asia/Damascus", "Syria", null, "Latakia"),
  new Zone("Asia/Damascus", "Syria", null, "Hama"),

  // Asia/Dhaka (Bangladesh, UTC+6)
  new Zone("Asia/Dhaka", "Bangladesh", null, "Dhaka"),
  new Zone("Asia/Dhaka", "Bangladesh", null, "Chittagong"),
  new Zone("Asia/Dhaka", "Bangladesh", null, "Khulna"),
  new Zone("Asia/Dhaka", "Bangladesh", null, "Sylhet"),
  new Zone("Asia/Dhaka", "Bangladesh", null, "Rajshahi"),

  // Asia/Dili (Timor-Leste, UTC+9)
  new Zone("Asia/Dili", "Timor-Leste", null, "Dili"),
  new Zone("Asia/Dili", "Timor-Leste", null, "Baucau"),
  new Zone("Asia/Dili", "Timor-Leste", null, "Suai"),
  new Zone("Asia/Dili", "Timor-Leste", null, "Lospalos"),
  new Zone("Asia/Dili", "Timor-Leste", null, "Maliana"),

  // Asia/Dubai (UAE, UTC+4)
  new Zone("Asia/Dubai", "United Arab Emirates", null, "Dubai"),
  new Zone("Asia/Dubai", "United Arab Emirates", null, "Abu Dhabi"),
  new Zone("Asia/Dubai", "United Arab Emirates", null, "Sharjah"),
  new Zone("Asia/Dubai", "United Arab Emirates", null, "Ajman"),
  new Zone("Asia/Dubai", "United Arab Emirates", null, "Fujairah"),

  // Asia/Dushanbe (Tajikistan, UTC+5)
  new Zone("Asia/Dushanbe", "Tajikistan", null, "Dushanbe"),
  new Zone("Asia/Dushanbe", "Tajikistan", null, "Khujand"),
  new Zone("Asia/Dushanbe", "Tajikistan", null, "Kulob"),
  new Zone("Asia/Dushanbe", "Tajikistan", null, "Bokhtar"),
  new Zone("Asia/Dushanbe", "Tajikistan", null, "Istaravshan"),

  // Asia/Famagusta (Cyprus [Northern], UTC+3)
  new Zone("Asia/Famagusta", "Cyprus", "Northern Cyprus", "Famagusta"),
  new Zone("Asia/Famagusta", "Cyprus", "Northern Cyprus", "Nicosia (North)"),
  new Zone("Asia/Famagusta", "Cyprus", "Northern Cyprus", "Kyrenia"),
  new Zone("Asia/Famagusta", "Cyprus", "Northern Cyprus", "Morphou"),
  new Zone("Asia/Famagusta", "Cyprus", "Northern Cyprus", "Lefka"),

  // Asia/Gaza (Palestine, UTC+2/+3 DST)
  new Zone("Asia/Gaza", "Palestine", null, "Gaza City"),
  new Zone("Asia/Gaza", "Palestine", null, "Rafah"),
  new Zone("Asia/Gaza", "Palestine", null, "Khan Yunis"),
  new Zone("Asia/Gaza", "Palestine", null, "Beit Lahia"),
  new Zone("Asia/Gaza", "Palestine", null, "Deir al-Balah"),

  // Asia/Hebron (Palestine, UTC+2/+3 DST)
  new Zone("Asia/Hebron", "Palestine", null, "Hebron"),
  new Zone("Asia/Hebron", "Palestine", null, "Bethlehem"),
  new Zone("Asia/Hebron", "Palestine", null, "Ramallah"),
  new Zone("Asia/Hebron", "Palestine", null, "Nablus"),
  new Zone("Asia/Hebron", "Palestine", null, "Jenin"),

  // Asia/Hong_Kong (Hong Kong SAR, UTC+8)
  new Zone("Asia/Hong_Kong", "China", "Hong Kong", "Central"),
  new Zone("Asia/Hong_Kong", "China", "Hong Kong", "Kowloon"),
  new Zone("Asia/Hong_Kong", "China", "Hong Kong", "Sha Tin"),
  new Zone("Asia/Hong_Kong", "China", "Hong Kong", "Tuen Mun"),
  new Zone("Asia/Hong_Kong", "China", "Hong Kong", "Tsuen Wan"),

  // Asia/Hovd (Russia, UTC+7)
  new Zone("Asia/Hovd", "Mongolia", "Hovd Province", "Hovd"),
  new Zone("Asia/Hovd", "Mongolia", "Hovd Province", "Bulgan"),
  new Zone("Asia/Hovd", "Mongolia", "Hovd Province", "Altai"),
  new Zone("Asia/Hovd", "Mongolia", "Hovd Province", "Zereg"),
  new Zone("Asia/Hovd", "Mongolia", "Hovd Province", "Khovd Sum"),

  // Asia/Irkutsk (Russia, UTC+8)
  new Zone("Asia/Irkutsk", "Russia", "Irkutsk Oblast", "Irkutsk"),
  new Zone("Asia/Irkutsk", "Russia", "Irkutsk Oblast", "Angarsk"),
  new Zone("Asia/Irkutsk", "Russia", "Irkutsk Oblast", "Bratsk"),
  new Zone("Asia/Irkutsk", "Russia", "Irkutsk Oblast", "Usolye-Sibirskoye"),
  new Zone("Asia/Irkutsk", "Russia", "Irkutsk Oblast", "Ust-Ilimsk"),

  // Asia/Jakarta (Indonesia, UTC+7)
  new Zone("Asia/Jakarta", "Indonesia", "Jakarta", "Jakarta"),
  new Zone("Asia/Jakarta", "Indonesia", "West Java", "Bandung"),
  new Zone("Asia/Jakarta", "Indonesia", "Central Java", "Semarang"),
  new Zone("Asia/Jakarta", "Indonesia", "Yogyakarta", "Yogyakarta"),
  new Zone("Asia/Jakarta", "Indonesia", "Banten", "Serang"),

  // Asia/Jayapura (Indonesia, UTC+9)
  new Zone("Asia/Jayapura", "Indonesia", "Papua", "Jayapura"),
  new Zone("Asia/Jayapura", "Indonesia", "Papua", "Nabire"),
  new Zone("Asia/Jayapura", "Indonesia", "Papua", "Wamena"),
  new Zone("Asia/Jayapura", "Indonesia", "Papua", "Merauke"),
  new Zone("Asia/Jayapura", "Indonesia", "Highland Papua", "Timika"),

  // Asia/Jerusalem (Israel, UTC+2/+3 DST)
  new Zone("Asia/Jerusalem", "Israel", null, "Jerusalem"),
  new Zone("Asia/Jerusalem", "Israel", null, "Tel Aviv"),
  new Zone("Asia/Jerusalem", "Israel", null, "Haifa"),
  new Zone("Asia/Jerusalem", "Israel", null, "Beersheba"),
  new Zone("Asia/Jerusalem", "Israel", null, "Eilat"),

  // Asia/Kabul (Afghanistan, UTC+4:30)
  new Zone("Asia/Kabul", "Afghanistan", null, "Kabul"),
  new Zone("Asia/Kabul", "Afghanistan", null, "Kandahar"),
  new Zone("Asia/Kabul", "Afghanistan", null, "Herat"),
  new Zone("Asia/Kabul", "Afghanistan", null, "Mazar-i-Sharif"),
  new Zone("Asia/Kabul", "Afghanistan", null, "Jalalabad"),

  // Asia/Kamchatka (Russia, UTC+12)
  new Zone("Asia/Kamchatka", "Russia", "Kamchatka Krai", "Petropavlovsk-Kamchatsky"),
  new Zone("Asia/Kamchatka", "Russia", "Kamchatka Krai", "Yelizovo"),
  new Zone("Asia/Kamchatka", "Russia", "Kamchatka Krai", "Vilyuchinsk"),
  new Zone("Asia/Kamchatka", "Russia", "Kamchatka Krai", "Ust-Kamchatsk"),
  new Zone("Asia/Kamchatka", "Russia", "Kamchatka Krai", "Esso"),

  // Asia/Karachi (Pakistan, UTC+5)
  new Zone("Asia/Karachi", "Pakistan", "Sindh", "Karachi"),
  new Zone("Asia/Karachi", "Pakistan", "Punjab", "Lahore"),
  new Zone("Asia/Karachi", "Pakistan", "Islamabad Capital Territory", "Islamabad"),
  new Zone("Asia/Karachi", "Pakistan", "Khyber Pakhtunkhwa", "Peshawar"),
  new Zone("Asia/Karachi", "Pakistan", "Balochistan", "Quetta"),

  // Asia/Katmandu (Nepal, UTC+5:45)
  new Zone("Asia/Katmandu", "Nepal", null, "Kathmandu"),
  new Zone("Asia/Katmandu", "Nepal", null, "Pokhara"),
  new Zone("Asia/Katmandu", "Nepal", null, "Lalitpur"),
  new Zone("Asia/Katmandu", "Nepal", null, "Biratnagar"),
  new Zone("Asia/Katmandu", "Nepal", null, "Bharatpur"),

  // Asia/Khandyga (Russia, UTC+9)
  new Zone("Asia/Khandyga", "Russia", "Sakha Republic", "Khandyga"),
  new Zone("Asia/Khandyga", "Russia", "Sakha Republic", "Tomtor"),
  new Zone("Asia/Khandyga", "Russia", "Sakha Republic", "Ytyk-Kyuyol"),
  new Zone("Asia/Khandyga", "Russia", "Sakha Republic", "Churapcha"),
  new Zone("Asia/Khandyga", "Russia", "Sakha Republic", "Amga"),

  // Asia/Krasnoyarsk (Russia, UTC+7)
  new Zone("Asia/Krasnoyarsk", "Russia", "Krasnoyarsk Krai", "Krasnoyarsk"),
  new Zone("Asia/Krasnoyarsk", "Russia", "Krasnoyarsk Krai", "Norilsk"),
  new Zone("Asia/Krasnoyarsk", "Russia", "Krasnoyarsk Krai", "Achinsk"),
  new Zone("Asia/Krasnoyarsk", "Russia", "Krasnoyarsk Krai", "Zheleznogorsk"),
  new Zone("Asia/Krasnoyarsk", "Russia", "Krasnoyarsk Krai", "Minusinsk"),

  // Asia/Kuala_Lumpur (Malaysia, UTC+8)
  new Zone("Asia/Kuala_Lumpur", "Malaysia", "Selangor", "Kuala Lumpur"),
  new Zone("Asia/Kuala_Lumpur", "Malaysia", "Penang", "George Town"),
  new Zone("Asia/Kuala_Lumpur", "Malaysia", "Perak", "Ipoh"),
  new Zone("Asia/Kuala_Lumpur", "Malaysia", "Johor", "Johor Bahru"),
  new Zone("Asia/Kuala_Lumpur", "Malaysia", "Malacca", "Malacca City"),

  // Asia/Kuching (Malaysia – Borneo side, UTC+8)
  new Zone("Asia/Kuching", "Malaysia", "Sarawak", "Kuching"),
  new Zone("Asia/Kuching", "Malaysia", "Sarawak", "Miri"),
  new Zone("Asia/Kuching", "Malaysia", "Sarawak", "Bintulu"),
  new Zone("Asia/Kuching", "Malaysia", "Sabah", "Kota Kinabalu"),
  new Zone("Asia/Kuching", "Malaysia", "Sabah", "Sandakan"),

  // Asia/Kuwait (Kuwait, UTC+3)
  new Zone("Asia/Kuwait", "Kuwait", null, "Kuwait City"),
  new Zone("Asia/Kuwait", "Kuwait", null, "Al Ahmadi"),
  new Zone("Asia/Kuwait", "Kuwait", null, "Hawalli"),
  new Zone("Asia/Kuwait", "Kuwait", null, "Salmiya"),
  new Zone("Asia/Kuwait", "Kuwait", null, "Farwaniya"),

   // Asia/Macau (China SAR, UTC+8)
  new Zone("Asia/Macau", "China", "Macau SAR", "Macau"),
  new Zone("Asia/Macau", "China", "Macau SAR", "Taipa"),
  new Zone("Asia/Macau", "China", "Macau SAR", "Cotai"),
  new Zone("Asia/Macau", "China", "Macau SAR", "Coloane"),
  new Zone("Asia/Macau", "China", "Macau SAR", "Macau Peninsula"),

  // Asia/Magadan (Russia, UTC+11)
  new Zone("Asia/Magadan", "Russia", "Magadan Oblast", "Magadan"),
  new Zone("Asia/Magadan", "Russia", "Magadan Oblast", "Susuman"),
  new Zone("Asia/Magadan", "Russia", "Magadan Oblast", "Yagodnoye"),
  new Zone("Asia/Magadan", "Russia", "Magadan Oblast", "Olsky"),
  new Zone("Asia/Magadan", "Russia", "Magadan Oblast", "Srednekansky"),

  // Asia/Makassar (Indonesia, UTC+8)
  new Zone("Asia/Makassar", "Indonesia", "South Sulawesi", "Makassar"),
  new Zone("Asia/Makassar", "Indonesia", "South Sulawesi", "Parepare"),
  new Zone("Asia/Makassar", "Indonesia", "South Sulawesi", "Bulukumba"),
  new Zone("Asia/Makassar", "Indonesia", "South Sulawesi", "Pangkajene Islands"),
  new Zone("Asia/Makassar", "Indonesia", "South Sulawesi", "Bantaeng"),

  // Asia/Manila (Philippines, UTC+8)
  new Zone("Asia/Manila", "Philippines", "Metro Manila", "Manila"),
  new Zone("Asia/Manila", "Philippines", "Metro Manila", "Quezon City"),
  new Zone("Asia/Manila", "Philippines", "Metro Manila", "Makati"),
  new Zone("Asia/Manila", "Philippines", "Metro Manila", "Pasig"),
  new Zone("Asia/Manila", "Philippines", "Metro Manila", "Taguig"),

  // Asia/Muscat (Oman, UTC+4)
  new Zone("Asia/Muscat", "Oman", null, "Muscat"),
  new Zone("Asia/Muscat", "Oman", null, "Salalah"),
  new Zone("Asia/Muscat", "Oman", null, "Sohar"),
  new Zone("Asia/Muscat", "Oman", null, "Nizwa"),
  new Zone("Asia/Muscat", "Oman", null, "Sur"),

  // Asia/Nicosia (Cyprus, UTC+2/+3 DST)
  new Zone("Asia/Nicosia", "Cyprus", null, "Nicosia"),
  new Zone("Asia/Nicosia", "Cyprus", null, "Limassol"),
  new Zone("Asia/Nicosia", "Cyprus", null, "Larnaca"),
  new Zone("Asia/Nicosia", "Cyprus", null, "Paphos"),
  new Zone("Asia/Nicosia", "Cyprus", null, "Famagusta"),

  // Asia/Novokuznetsk (Russia, UTC+7)
  new Zone("Asia/Novokuznetsk", "Russia", "Kemerovo Oblast", "Novokuznetsk"),
  new Zone("Asia/Novokuznetsk", "Russia", "Kemerovo Oblast", "Prokopyevsk"),
  new Zone("Asia/Novokuznetsk", "Russia", "Kemerovo Oblast", "Mezhdurechensk"),
  new Zone("Asia/Novokuznetsk", "Russia", "Kemerovo Oblast", "Novaya Kuznetsk"),
  new Zone("Asia/Novokuznetsk", "Russia", "Kemerovo Oblast", "Tashtagol"),

  // Asia/Novosibirsk (Russia, UTC+7)
  new Zone("Asia/Novosibirsk", "Russia", "Novosibirsk Oblast", "Novosibirsk"),
  new Zone("Asia/Novosibirsk", "Russia", "Novosibirsk Oblast", "Berdsk"),
  new Zone("Asia/Novosibirsk", "Russia", "Novosibirsk Oblast", "Iskitim"),
  new Zone("Asia/Novosibirsk", "Russia", "Novosibirsk Oblast", "Ob"),
  new Zone("Asia/Novosibirsk", "Russia", "Novosibirsk Oblast", "Kuybyshev"),

  // Asia/Omsk (Russia, UTC+6)
  new Zone("Asia/Omsk", "Russia", "Omsk Oblast", "Omsk"),
  new Zone("Asia/Omsk", "Russia", "Omsk Oblast", "Tara"),
  new Zone("Asia/Omsk", "Russia", "Omsk Oblast", "Nazyvayevsk"),
  new Zone("Asia/Omsk", "Russia", "Omsk Oblast", "Lyubinsky"),
  new Zone("Asia/Omsk", "Russia", "Omsk Oblast", "Isilkul"),

  // Asia/Oral (Kazakhstan, UTC+5)
  new Zone("Asia/Oral", "Kazakhstan", "West Kazakhstan Region", "Oral"),
  new Zone("Asia/Oral", "Kazakhstan", "West Kazakhstan Region", "Aksai"),
  new Zone("Asia/Oral", "Kazakhstan", "West Kazakhstan Region", "Kostanay"),
  new Zone("Asia/Oral", "Kazakhstan", "West Kazakhstan Region", "Akzhaik"),
  new Zone("Asia/Oral", "Kazakhstan", "West Kazakhstan Region", "Bayterek"),

  // Asia/Phnom_Penh (Cambodia, UTC+7)
  new Zone("Asia/Phnom_Penh", "Cambodia", null, "Phnom Penh"),
  new Zone("Asia/Phnom_Penh", "Cambodia", null, "Siem Reap"),
  new Zone("Asia/Phnom_Penh", "Cambodia", null, "Battambang"),
  new Zone("Asia/Phnom_Penh", "Cambodia", null, "Sihanoukville"),
  new Zone("Asia/Phnom_Penh", "Cambodia", null, "Kampong Cham"),

  // Asia/Pontianak (Indonesia, UTC+7)
  new Zone("Asia/Pontianak", "Indonesia", "West Kalimantan", "Pontianak"),
  new Zone("Asia/Pontianak", "Indonesia", "West Kalimantan", "Singkawang"),
  new Zone("Asia/Pontianak", "Indonesia", "West Kalimantan", "Sambas"),
  new Zone("Asia/Pontianak", "Indonesia", "West Kalimantan", "Ketapang"),
  new Zone("Asia/Pontianak", "Indonesia", "West Kalimantan", "Sintang"),

  // Asia/Pyongyang (North Korea, UTC+9)
  new Zone("Asia/Pyongyang", "North Korea", null, "Pyongyang"),
  new Zone("Asia/Pyongyang", "North Korea", null, "Hamhung"),
  new Zone("Asia/Pyongyang", "North Korea", null, "Chongjin"),
  new Zone("Asia/Pyongyang", "North Korea", null, "Nampo"),
  new Zone("Asia/Pyongyang", "North Korea", null, "Wonsan"),

  // Asia/Qatar (Qatar, UTC+3)
  new Zone("Asia/Qatar", "Qatar", null, "Doha"),
  new Zone("Asia/Qatar", "Qatar", null, "Al Rayyan"),
  new Zone("Asia/Qatar", "Qatar", null, "Al Wakrah"),
  new Zone("Asia/Qatar", "Qatar", null, "Al Khor"),
  new Zone("Asia/Qatar", "Qatar", null, "Al Daayen"),

  // Asia/Qostanay (Kazakhstan, UTC+6)
  new Zone("Asia/Qostanay", "Kazakhstan", "Kostanay Region", "Kostanay"),
  new Zone("Asia/Qostanay", "Kazakhstan", "Kostanay Region", "Lisakovsk"),
  new Zone("Asia/Qostanay", "Kazakhstan", "Kostanay Region", "Rudny"),
  new Zone("Asia/Qostanay", "Kazakhstan", "Kostanay Region", "Zhitikara"),
  new Zone("Asia/Qostanay", "Kazakhstan", "Kostanay Region", "Arkalyk"),

  // Asia/Qyzylorda (Kazakhstan, UTC+5)
  new Zone("Asia/Qyzylorda", "Kazakhstan", "Qyzylorda Region", "Qyzylorda"),
  new Zone("Asia/Qyzylorda", "Kazakhstan", "Qyzylorda Region", "Aral"),
  new Zone("Asia/Qyzylorda", "Kazakhstan", "Qyzylorda Region", "Baikonur"),
  new Zone("Asia/Qyzylorda", "Kazakhstan", "Qyzylorda Region", "Zhanakorgan"),
  new Zone("Asia/Qyzylorda", "Kazakhstan", "Qyzylorda Region", "Kazaly"),

  // Asia/Rangoon (Myanmar, UTC+6:30)
  new Zone("Asia/Rangoon", "Myanmar", null, "Yangon"),
  new Zone("Asia/Rangoon", "Myanmar", null, "Mandalay"),
  new Zone("Asia/Rangoon", "Myanmar", null, "Naypyidaw"),
  new Zone("Asia/Rangoon", "Myanmar", null, "Bago"),
  new Zone("Asia/Rangoon", "Myanmar", null, "Taunggyi"),

  // Asia/Riyadh (Saudi Arabia, UTC+3)
  new Zone("Asia/Riyadh", "Saudi Arabia", null, "Riyadh"),
  new Zone("Asia/Riyadh", "Saudi Arabia", null, "Jeddah"),
  new Zone("Asia/Riyadh", "Saudi Arabia", null, "Mecca"),
  new Zone("Asia/Riyadh", "Saudi Arabia", null, "Medina"),
  new Zone("Asia/Riyadh", "Saudi Arabia", null, "Dammam"),

  // Asia/Saigon (Vietnam, UTC+7) [also Asia/Ho_Chi_Minh]
  new Zone("Asia/Saigon", "Vietnam", null, "Ho Chi Minh City"),
  new Zone("Asia/Saigon", "Vietnam", null, "Hanoi"),
  new Zone("Asia/Saigon", "Vietnam", null, "Da Nang"),
  new Zone("Asia/Saigon", "Vietnam", null, "Can Tho"),
  new Zone("Asia/Saigon", "Vietnam", null, "Nha Trang"),

  // Asia/Sakhalin (Russia, UTC+11)
  new Zone("Asia/Sakhalin", "Russia", "Sakhalin Oblast", "Yuzhno-Sakhalinsk"),
  new Zone("Asia/Sakhalin", "Russia", "Sakhalin Oblast", "Korsakov"),
  new Zone("Asia/Sakhalin", "Russia", "Sakhalin Oblast", "Poronaysk"),
  new Zone("Asia/Sakhalin", "Russia", "Sakhalin Oblast", "Nevelsk"),
  new Zone("Asia/Sakhalin", "Russia", "Sakhalin Oblast", "Holmsk"),

  // Asia/Samarkand (Uzbekistan, UTC+5)
  new Zone("Asia/Samarkand", "Uzbekistan", "Samarkand Region", "Samarkand"),
  new Zone("Asia/Samarkand", "Uzbekistan", "Samarkand Region", "Jomboy"),
  new Zone("Asia/Samarkand", "Uzbekistan", "Samarkand Region", "Bulungur"),
  new Zone("Asia/Samarkand", "Uzbekistan", "Samarkand Region", "Ishtikhon"),
  new Zone("Asia/Samarkand", "Uzbekistan", "Samarkand Region", "Kattakurgan"),

  // Asia/Seoul (South Korea, UTC+9)
  new Zone("Asia/Seoul", "South Korea", null, "Seoul"),
  new Zone("Asia/Seoul", "South Korea", null, "Busan"),
  new Zone("Asia/Seoul", "South Korea", null, "Incheon"),
  new Zone("Asia/Seoul", "South Korea", null, "Daegu"),
  new Zone("Asia/Seoul", "South Korea", null, "Daejeon"),

  // Asia/Shanghai (China, UTC+8)
  new Zone("Asia/Shanghai", "China", null, "Shanghai"),
  new Zone("Asia/Shanghai", "China", null, "Beijing"),
  new Zone("Asia/Shanghai", "China", null, "Guangzhou"),
  new Zone("Asia/Shanghai", "China", null, "Shenzhen"),
  new Zone("Asia/Shanghai", "China", null, "Chengdu"),

  // Asia/Singapore (Singapore, UTC+8)
  new Zone("Asia/Singapore", "Singapore", null, "Singapore"),
  new Zone("Asia/Singapore", "Singapore", null, "Jurong"),
  new Zone("Asia/Singapore", "Singapore", null, "Woodlands"),
  new Zone("Asia/Singapore", "Singapore", null, "Bukit Timah"),
  new Zone("Asia/Singapore", "Singapore", null, "Sentosa"),

  // Asia/Srednekolymsk (Russia, UTC+11)
  new Zone("Asia/Srednekolymsk", "Russia", "Sakha Republic", "Srednekolymsk"),
  new Zone("Asia/Srednekolymsk", "Russia", "Sakha Republic", "Chersky"),
  new Zone("Asia/Srednekolymsk", "Russia", "Sakha Republic", "Alykel"),
  new Zone("Asia/Srednekolymsk", "Russia", "Sakha Republic", "Tiksi"),
  new Zone("Asia/Srednekolymsk", "Russia", "Sakha Republic", "Nizhny Bestyakh"),

  // Asia/Taipei (Taiwan, UTC+8)
  new Zone("Asia/Taipei", "Taiwan", null, "Taipei"),
  new Zone("Asia/Taipei", "Taiwan", null, "Kaohsiung"),
  new Zone("Asia/Taipei", "Taiwan", null, "Taichung"),
  new Zone("Asia/Taipei", "Taiwan", null, "Tainan"),
  new Zone("Asia/Taipei", "Taiwan", null, "Hsinchu"),

  // Asia/Tashkent (Uzbekistan, UTC+5)
  new Zone("Asia/Tashkent", "Uzbekistan", null, "Tashkent"),
  new Zone("Asia/Tashkent", "Uzbekistan", null, "Chirchiq"),
  new Zone("Asia/Tashkent", "Uzbekistan", null, "Angren"),
  new Zone("Asia/Tashkent", "Uzbekistan", null, "Bekabad"),
  new Zone("Asia/Tashkent", "Uzbekistan", null, "Olmaliq"),

  // Asia/Tbilisi (Georgia, UTC+4)
  new Zone("Asia/Tbilisi", "Georgia", null, "Tbilisi"),
  new Zone("Asia/Tbilisi", "Georgia", null, "Batumi"),
  new Zone("Asia/Tbilisi", "Georgia", null, "Kutaisi"),
  new Zone("Asia/Tbilisi", "Georgia", null, "Rustavi"),
  new Zone("Asia/Tbilisi", "Georgia", null, "Gori"),

  // Asia/Tehran (Iran, UTC+3:30)
  new Zone("Asia/Tehran", "Iran", null, "Tehran"),
  new Zone("Asia/Tehran", "Iran", null, "Mashhad"),
  new Zone("Asia/Tehran", "Iran", null, "Isfahan"),
  new Zone("Asia/Tehran", "Iran", null, "Tabriz"),
  new Zone("Asia/Tehran", "Iran", null, "Shiraz"),

  // Asia/Thimphu (Bhutan, UTC+6)
  new Zone("Asia/Thimphu", "Bhutan", null, "Thimphu"),
  new Zone("Asia/Thimphu", "Bhutan", null, "Phuntsholing"),
  new Zone("Asia/Thimphu", "Bhutan", null, "Punakha"),
  new Zone("Asia/Thimphu", "Bhutan", null, "Paro"),
  new Zone("Asia/Thimphu", "Bhutan", null, "Wangdue Phodrang"),

  // Asia/Tokyo (Japan, UTC+9)
  new Zone("Asia/Tokyo", "Japan", null, "Tokyo"),
  new Zone("Asia/Tokyo", "Japan", null, "Osaka"),
  new Zone("Asia/Tokyo", "Japan", null, "Nagoya"),
  new Zone("Asia/Tokyo", "Japan", null, "Sapporo"),
  new Zone("Asia/Tokyo", "Japan", null, "Fukuoka"),

  // Asia/Tomsk (Russia, UTC+7)
  new Zone("Asia/Tomsk", "Russia", "Tomsk Oblast", "Tomsk"),
  new Zone("Asia/Tomsk", "Russia", "Tomsk Oblast", "Seversk"),
  new Zone("Asia/Tomsk", "Russia", "Tomsk Oblast", "Strezhevoy"),
  new Zone("Asia/Tomsk", "Russia", "Tomsk Oblast", "Kolpashevo"),
  new Zone("Asia/Tomsk", "Russia", "Tomsk Oblast", "Kedrovy"),

  // Asia/Ulaanbaatar (Mongolia, UTC+8)
  new Zone("Asia/Ulaanbaatar", "Mongolia", null, "Ulaanbaatar"),
  new Zone("Asia/Ulaanbaatar", "Mongolia", null, "Erdenet"),
  new Zone("Asia/Ulaanbaatar", "Mongolia", null, "Darkhan"),
  new Zone("Asia/Ulaanbaatar", "Mongolia", null, "Choibalsan"),
  new Zone("Asia/Ulaanbaatar", "Mongolia", null, "Mörön"),

  // Asia/Urumqi (China, Xinjiang, UTC+6)
  new Zone("Asia/Urumqi", "China", "Xinjiang", "Ürümqi"),
  new Zone("Asia/Urumqi", "China", "Xinjiang", "Karamay"),
  new Zone("Asia/Urumqi", "China", "Xinjiang", "Hotan"),
  new Zone("Asia/Urumqi", "China", "Xinjiang", "Aksu"),
  new Zone("Asia/Urumqi", "China", "Xinjiang", "Kashgar"),

  // Asia/Ust-Nera (Russia, UTC+10)
  new Zone("Asia/Ust-Nera", "Russia", "Sakha Republic", "Ust-Nera"),
  new Zone("Asia/Ust-Nera", "Russia", "Sakha Republic", "Oymyakon"),
  new Zone("Asia/Ust-Nera", "Russia", "Sakha Republic", "Tomtor"),
  new Zone("Asia/Ust-Nera", "Russia", "Sakha Republic", "Verkhoyansk"),
  new Zone("Asia/Ust-Nera", "Russia", "Sakha Republic", "Chokurdakh"),

  // Asia/Vientiane (Laos, UTC+7)
  new Zone("Asia/Vientiane", "Laos", null, "Vientiane"),
  new Zone("Asia/Vientiane", "Laos", null, "Luang Prabang"),
  new Zone("Asia/Vientiane", "Laos", null, "Savannakhet"),
  new Zone("Asia/Vientiane", "Laos", null, "Pakse"),
  new Zone("Asia/Vientiane", "Laos", null, "Thakhek"),

  // Asia/Vladivostok (Russia, UTC+10)
  new Zone("Asia/Vladivostok", "Russia", "Primorsky Krai", "Vladivostok"),
  new Zone("Asia/Vladivostok", "Russia", "Primorsky Krai", "Ussuriysk"),
  new Zone("Asia/Vladivostok", "Russia", "Primorsky Krai", "Nakhodka"),
  new Zone("Asia/Vladivostok", "Russia", "Primorsky Krai", "Artem"),
  new Zone("Asia/Vladivostok", "Russia", "Primorsky Krai", "Spassk-Dalny"),

  // Asia/Yakutsk (Russia, UTC+9)
  new Zone("Asia/Yakutsk", "Russia", "Sakha Republic", "Yakutsk"),
  new Zone("Asia/Yakutsk", "Russia", "Sakha Republic", "Lensk"),
  new Zone("Asia/Yakutsk", "Russia", "Sakha Republic", "Neryungri"),
  new Zone("Asia/Yakutsk", "Russia", "Sakha Republic", "Mirny"),
  new Zone("Asia/Yakutsk", "Russia", "Sakha Republic", "Aldan"),

  // Asia/Yekaterinburg (Russia, UTC+5)
  new Zone("Asia/Yekaterinburg", "Russia", "Sverdlovsk Oblast", "Yekaterinburg"),
  new Zone("Asia/Yekaterinburg", "Russia", "Sverdlovsk Oblast", "Nizhny Tagil"),
  new Zone("Asia/Yekaterinburg", "Russia", "Sverdlovsk Oblast", "Kamensk-Uralsky"),
  new Zone("Asia/Yekaterinburg", "Russia", "Sverdlovsk Oblast", "Serov"),
  new Zone("Asia/Yekaterinburg", "Russia", "Sverdlovsk Oblast", "Pervouralsk"),

  // Asia/Yerevan (Armenia, UTC+4)
  new Zone("Asia/Yerevan", "Armenia", null, "Yerevan"),
  new Zone("Asia/Yerevan", "Armenia", null, "Gyumri"),
  new Zone("Asia/Yerevan", "Armenia", null, "Vanadzor"),
  new Zone("Asia/Yerevan", "Armenia", null, "Vagharshapat"),
  new Zone("Asia/Yerevan", "Armenia", null, "Hrazdan"),

  // Atlantic/Azores (Portugal, Azores, UTC-1)
  new Zone("Atlantic/Azores", "Portugal", "Azores", "Ponta Delgada"),
  new Zone("Atlantic/Azores", "Portugal", "Azores", "Angra do Heroísmo"),
  new Zone("Atlantic/Azores", "Portugal", "Azores", "Horta"),
  new Zone("Atlantic/Azores", "Portugal", "Azores", "Ribeira Grande"),
  new Zone("Atlantic/Azores", "Portugal", "Azores", "Vila Franca do Campo"),

  // Atlantic/Bermuda (Bermuda, UTC-4)
  new Zone("Atlantic/Bermuda", "Bermuda", null, "Hamilton"),
  new Zone("Atlantic/Bermuda", "Bermuda", null, "St. George's"),
  new Zone("Atlantic/Bermuda", "Bermuda", null, "Somerset"),
  new Zone("Atlantic/Bermuda", "Bermuda", null, "Paget Parish"),
  new Zone("Atlantic/Bermuda", "Bermuda", null, "Southampton Parish"),

  // Atlantic/Canary (Spain, Canary Islands, UTC+0)
  new Zone("Atlantic/Canary", "Spain", "Canary Islands", "Las Palmas"),
  new Zone("Atlantic/Canary", "Spain", "Canary Islands", "Santa Cruz de Tenerife"),
  new Zone("Atlantic/Canary", "Spain", "Canary Islands", "San Cristóbal de La Laguna"),
  new Zone("Atlantic/Canary", "Spain", "Canary Islands", "Arrecife"),
  new Zone("Atlantic/Canary", "Spain", "Canary Islands", "Puerto del Rosario"),

  // Atlantic/Cape_Verde (Cape Verde, UTC-1)
  new Zone("Atlantic/Cape_Verde", "Cape Verde", null, "Praia"),
  new Zone("Atlantic/Cape_Verde", "Cape Verde", null, "Mindelo"),
  new Zone("Atlantic/Cape_Verde", "Cape Verde", null, "Santa Maria"),
  new Zone("Atlantic/Cape_Verde", "Cape Verde", null, "Espargos"),
  new Zone("Atlantic/Cape_Verde", "Cape Verde", null, "São Filipe"),

  // Atlantic/Faeroe (Faroe Islands, Denmark, UTC+0)
  new Zone("Atlantic/Faeroe", "Denmark", "Faroe Islands", "Tórshavn"),
  new Zone("Atlantic/Faeroe", "Denmark", "Faroe Islands", "Klaksvík"),
  new Zone("Atlantic/Faeroe", "Denmark", "Faroe Islands", "Runavík"),
  new Zone("Atlantic/Faeroe", "Denmark", "Faroe Islands", "Tvøroyri"),
  new Zone("Atlantic/Faeroe", "Denmark", "Faroe Islands", "Sandur"),

  // Atlantic/Madeira (Portugal, Madeira Islands, UTC+0)
  new Zone("Atlantic/Madeira", "Portugal", "Madeira", "Funchal"),
  new Zone("Atlantic/Madeira", "Portugal", "Madeira", "Santa Cruz"),
  new Zone("Atlantic/Madeira", "Portugal", "Madeira", "Machico"),
  new Zone("Atlantic/Madeira", "Portugal", "Madeira", "Câmara de Lobos"),
  new Zone("Atlantic/Madeira", "Portugal", "Madeira", "Porto Moniz"),

  // Atlantic/Reykjavik (Iceland, UTC+0)
  new Zone("Atlantic/Reykjavik", "Iceland", null, "Reykjavik"),
  new Zone("Atlantic/Reykjavik", "Iceland", null, "Kópavogur"),
  new Zone("Atlantic/Reykjavik", "Iceland", null, "Hafnarfjörður"),
  new Zone("Atlantic/Reykjavik", "Iceland", null, "Akureyri"),
  new Zone("Atlantic/Reykjavik", "Iceland", null, "Selfoss"),

  // Atlantic/South_Georgia (South Georgia and the South Sandwich Islands, UTC-2)
  new Zone("Atlantic/South_Georgia", "South Georgia and the South Sandwich Islands", null, "King Edward Point"),
  new Zone("Atlantic/South_Georgia", "South Georgia and the South Sandwich Islands", null, "Grytviken"),
  new Zone("Atlantic/South_Georgia", "South Georgia and the South Sandwich Islands", null, "Stromness"),
  new Zone("Atlantic/South_Georgia", "South Georgia and the South Sandwich Islands", null, "Leith Harbour"),
  new Zone("Atlantic/South_Georgia", "South Georgia and the South Sandwich Islands", null, "Possession Bay"),

  // Atlantic/St_Helena (Saint Helena, Ascension and Tristan da Cunha, UTC+0)
  new Zone("Atlantic/St_Helena", "Saint Helena, Ascension and Tristan da Cunha", null, "Jamestown"),
  new Zone("Atlantic/St_Helena", "Saint Helena, Ascension and Tristan da Cunha", null, "Half Tree Hollow"),
  new Zone("Atlantic/St_Helena", "Saint Helena, Ascension and Tristan da Cunha", null, "Saint Paul's"),
  new Zone("Atlantic/St_Helena", "Saint Helena, Ascension and Tristan da Cunha", null, "Longwood"),
  new Zone("Atlantic/St_Helena", "Saint Helena, Ascension and Tristan da Cunha", null, "Blue Hill"),

  // Atlantic/Stanley (Falkland Islands, UTC-3)
  new Zone("Atlantic/Stanley", "Falkland Islands", null, "Stanley"),
  new Zone("Atlantic/Stanley", "Falkland Islands", null, "Mount Pleasant"),
  new Zone("Atlantic/Stanley", "Falkland Islands", null, "Fox Bay"),
  new Zone("Atlantic/Stanley", "Falkland Islands", null, "Port Howard"),
  new Zone("Atlantic/Stanley", "Falkland Islands", null, "Goose Green"),

  // Australia/Adelaide (Australia, South Australia, UTC+9:30)
  new Zone("Australia/Adelaide", "Australia", "South Australia", "Adelaide"),
  new Zone("Australia/Adelaide", "Australia", "South Australia", "Mount Gambier"),
  new Zone("Australia/Adelaide", "Australia", "South Australia", "Whyalla"),
  new Zone("Australia/Adelaide", "Australia", "South Australia", "Port Augusta"),
  new Zone("Australia/Adelaide", "Australia", "South Australia", "Murray Bridge"),

  // Australia/Brisbane (Australia, Queensland, UTC+10)
  new Zone("Australia/Brisbane", "Australia", "Queensland", "Brisbane"),
  new Zone("Australia/Brisbane", "Australia", "Queensland", "Gold Coast"),
  new Zone("Australia/Brisbane", "Australia", "Queensland", "Cairns"),
  new Zone("Australia/Brisbane", "Australia", "Queensland", "Townsville"),
  new Zone("Australia/Brisbane", "Australia", "Queensland", "Toowoomba"),

  // Australia/Broken_Hill (Australia, New South Wales, UTC+9:30)
  new Zone("Australia/Broken_Hill", "Australia", "New South Wales", "Broken Hill"),
  new Zone("Australia/Broken_Hill", "Australia", "New South Wales", "Wilcannia"),
  new Zone("Australia/Broken_Hill", "Australia", "New South Wales", "Menindee"),
  new Zone("Australia/Broken_Hill", "Australia", "New South Wales", "Silverton"),
  new Zone("Australia/Broken_Hill", "Australia", "New South Wales", "Tibooburra"),

  // Australia/Darwin (Australia, Northern Territory, UTC+9:30)
  new Zone("Australia/Darwin", "Australia", "Northern Territory", "Darwin"),
  new Zone("Australia/Darwin", "Australia", "Northern Territory", "Alice Springs"),
  new Zone("Australia/Darwin", "Australia", "Northern Territory", "Katherine"),
  new Zone("Australia/Darwin", "Australia", "Northern Territory", "Tennant Creek"),
  new Zone("Australia/Darwin", "Australia", "Northern Territory", "Nhulunbuy"),

  // Australia/Eucla (Australia, Western Australia, UTC+8:45)
  new Zone("Australia/Eucla", "Australia", "Western Australia", "Eucla"),
  new Zone("Australia/Eucla", "Australia", "Western Australia", "Cocklebiddy"),
  new Zone("Australia/Eucla", "Australia", "Western Australia", "Caiguna"),
  new Zone("Australia/Eucla", "Australia", "Western Australia", "Madura"),
  new Zone("Australia/Eucla", "Australia", "Western Australia", "Norseman"),

  // Australia/Hobart (Australia, Tasmania, UTC+10)
  new Zone("Australia/Hobart", "Australia", "Tasmania", "Hobart"),
  new Zone("Australia/Hobart", "Australia", "Tasmania", "Launceston"),
  new Zone("Australia/Hobart", "Australia", "Tasmania", "Devonport"),
  new Zone("Australia/Hobart", "Australia", "Tasmania", "Burnie"),
  new Zone("Australia/Hobart", "Australia", "Tasmania", "Kingston"),

  // Australia/Lindeman (Australia, Queensland, UTC+10)
  new Zone("Australia/Lindeman", "Australia", "Queensland", "Lindeman Island"),
  new Zone("Australia/Lindeman", "Australia", "Queensland", "Airlie Beach"),
  new Zone("Australia/Lindeman", "Australia", "Queensland", "Proserpine"),
  new Zone("Australia/Lindeman", "Australia", "Queensland", "Bowen"),
  new Zone("Australia/Lindeman", "Australia", "Queensland", "Mackay"),

  // Australia/Lord_Howe (Australia, Lord Howe Island, UTC+10:30)
  new Zone("Australia/Lord_Howe", "Australia", null, "Lord Howe Island"),
  new Zone("Australia/Lord_Howe", "Australia", null, "Middle Beach"),
  new Zone("Australia/Lord_Howe", "Australia", null, "Transit Hill"),
  new Zone("Australia/Lord_Howe", "Australia", null, "Neds Beach"),
  new Zone("Australia/Lord_Howe", "Australia", null, "Cap Island"),

  // Australia/Melbourne (Australia, Victoria, UTC+10)
  new Zone("Australia/Melbourne", "Australia", "Victoria", "Melbourne"),
  new Zone("Australia/Melbourne", "Australia", "Victoria", "Geelong"),
  new Zone("Australia/Melbourne", "Australia", "Victoria", "Ballarat"),
  new Zone("Australia/Melbourne", "Australia", "Victoria", "Bendigo"),
  new Zone("Australia/Melbourne", "Australia", "Victoria", "Shepparton"),

  // Australia/Perth (Australia, Western Australia, UTC+8)
  new Zone("Australia/Perth", "Australia", "Western Australia", "Perth"),
  new Zone("Australia/Perth", "Australia", "Western Australia", "Fremantle"),
  new Zone("Australia/Perth", "Australia", "Western Australia", "Bunbury"),
  new Zone("Australia/Perth", "Australia", "Western Australia", "Albany"),
  new Zone("Australia/Perth", "Australia", "Western Australia", "Geraldton"),

  // Australia/Sydney (Australia, New South Wales, UTC+10)
  new Zone("Australia/Sydney", "Australia", "New South Wales", "Sydney"),
  new Zone("Australia/Sydney", "Australia", "New South Wales", "Newcastle"),
  new Zone("Australia/Sydney", "Australia", "New South Wales", "Wollongong"),
  new Zone("Australia/Sydney", "Australia", "New South Wales", "Coffs Harbour"),
  new Zone("Australia/Sydney", "Australia", "New South Wales", "Tamworth"),

  // Europe/Amsterdam (Netherlands, UTC+1)
  new Zone("Europe/Amsterdam", "Netherlands", null, "Amsterdam"),
  new Zone("Europe/Amsterdam", "Netherlands", null, "Rotterdam"),
  new Zone("Europe/Amsterdam", "Netherlands", null, "The Hague"),
  new Zone("Europe/Amsterdam", "Netherlands", null, "Utrecht"),
  new Zone("Europe/Amsterdam", "Netherlands", null, "Eindhoven"),

  // Europe/Andorra (Andorra, UTC+1)
  new Zone("Europe/Andorra", "Andorra", null, "Andorra la Vella"),
  new Zone("Europe/Andorra", "Andorra", null, "Escaldes-Engordany"),
  new Zone("Europe/Andorra", "Andorra", null, "Encamp"),
  new Zone("Europe/Andorra", "Andorra", null, "Sant Julià de Lòria"),
  new Zone("Europe/Andorra", "Andorra", null, "La Massana"),

  // Europe/Astrakhan (Russia, Astrakhan Oblast, UTC+4)
  new Zone("Europe/Astrakhan", "Russia", "Astrakhan Oblast", "Astrakhan"),
  new Zone("Europe/Astrakhan", "Russia", "Astrakhan Oblast", "Znamensk"),
  new Zone("Europe/Astrakhan", "Russia", "Astrakhan Oblast", "Kamyshevatskaya"),
  new Zone("Europe/Astrakhan", "Russia", "Astrakhan Oblast", "Nikolskoye"),
  new Zone("Europe/Astrakhan", "Russia", "Astrakhan Oblast", "Kharabali"),

  // Europe/Athens (Greece, Attica, UTC+2)
  new Zone("Europe/Athens", "Greece", "Attica", "Athens"),
  new Zone("Europe/Athens", "Greece", "Attica", "Piraeus"),
  new Zone("Europe/Athens", "Greece", "Attica", "Marousi"),
  new Zone("Europe/Athens", "Greece", "Attica", "Kifisia"),
  new Zone("Europe/Athens", "Greece", "Attica", "Nea Smyrni"),

  // Europe/Belgrade (Serbia, Belgrade, UTC+1)
  new Zone("Europe/Belgrade", "Serbia", "Belgrade", "Belgrade"),
  new Zone("Europe/Belgrade", "Serbia", "Belgrade", "Novi Sad"),
  new Zone("Europe/Belgrade", "Serbia", "Belgrade", "Niš"),
  new Zone("Europe/Belgrade", "Serbia", "Belgrade", "Kragujevac"),
  new Zone("Europe/Belgrade", "Serbia", "Belgrade", "Subotica"),

  // Europe/Berlin (Germany, Berlin, UTC+1)
  new Zone("Europe/Berlin", "Germany", "Berlin", "Berlin"),
  new Zone("Europe/Berlin", "Germany", "Berlin", "Potsdam"),
  new Zone("Europe/Berlin", "Germany", "Berlin", "Brandenburg"),
  new Zone("Europe/Berlin", "Germany", "Berlin", "Cottbus"),
  new Zone("Europe/Berlin", "Germany", "Berlin", "Frankfurt (Oder)"),

  // Europe/Bratislava (Slovakia, Bratislava Region, UTC+1)
  new Zone("Europe/Bratislava", "Slovakia", "Bratislava Region", "Bratislava"),
  new Zone("Europe/Bratislava", "Slovakia", "Bratislava Region", "Pezinok"),
  new Zone("Europe/Bratislava", "Slovakia", "Bratislava Region", "Senec"),
  new Zone("Europe/Bratislava", "Slovakia", "Bratislava Region", "Malacky"),
  new Zone("Europe/Bratislava", "Slovakia", "Bratislava Region", "Hlohovec"),

  // Europe/Brussels (Belgium, Brussels-Capital Region, UTC+1)
  new Zone("Europe/Brussels", "Belgium", "Brussels-Capital Region", "Brussels"),
  new Zone("Europe/Brussels", "Belgium", "Brussels-Capital Region", "Saint-Gilles"),
  new Zone("Europe/Brussels", "Belgium", "Brussels-Capital Region", "Schaerbeek"),
  new Zone("Europe/Brussels", "Belgium", "Brussels-Capital Region", "Ixelles"),
  new Zone("Europe/Brussels", "Belgium", "Brussels-Capital Region", "Anderlecht"),

  // Europe/Bucharest (Romania, Bucharest, UTC+2)
  new Zone("Europe/Bucharest", "Romania", "Bucharest", "Bucharest"),
  new Zone("Europe/Bucharest", "Romania", "Bucharest", "Sector 1"),
  new Zone("Europe/Bucharest", "Romania", "Bucharest", "Sector 2"),
  new Zone("Europe/Bucharest", "Romania", "Bucharest", "Sector 3"),
  new Zone("Europe/Bucharest", "Romania", "Bucharest", "Sector 4"),

  // Europe/Budapest (Hungary, Budapest, UTC+1)
  new Zone("Europe/Budapest", "Hungary", "Budapest", "Budapest"),
  new Zone("Europe/Budapest", "Hungary", "Budapest", "Debrecen"),
  new Zone("Europe/Budapest", "Hungary", "Budapest", "Szeged"),
  new Zone("Europe/Budapest", "Hungary", "Budapest", "Miskolc"),
  new Zone("Europe/Budapest", "Hungary", "Budapest", "Pécs"),

  // Europe/Busingen (Germany, Baden-Württemberg, UTC+1)
  new Zone("Europe/Busingen", "Germany", "Baden-Württemberg", "Büsingen am Hochrhein"),
  new Zone("Europe/Busingen", "Germany", "Baden-Württemberg", "Singen"),
  new Zone("Europe/Busingen", "Germany", "Baden-Württemberg", "Konstanz"),
  new Zone("Europe/Busingen", "Germany", "Baden-Württemberg", "Radolfzell"),
  new Zone("Europe/Busingen", "Germany", "Baden-Württemberg", "Friedrichshafen"),

  // Europe/Chisinau (Moldova, Chisinau, UTC+2)
  new Zone("Europe/Chisinau", "Moldova", null, "Chișinău"),
  new Zone("Europe/Chisinau", "Moldova", null, "Tiraspol"),
  new Zone("Europe/Chisinau", "Moldova", null, "Bălți"),
  new Zone("Europe/Chisinau", "Moldova", null, "Cahul"),
  new Zone("Europe/Chisinau", "Moldova", null, "Ungheni"),

  // Europe/Copenhagen (Denmark, Capital Region, UTC+1)
  new Zone("Europe/Copenhagen", "Denmark", "Capital Region", "Copenhagen"),
  new Zone("Europe/Copenhagen", "Denmark", "Capital Region", "Frederiksberg"),
  new Zone("Europe/Copenhagen", "Denmark", "Capital Region", "Lyngby"),
  new Zone("Europe/Copenhagen", "Denmark", "Capital Region", "Helsingør"),
  new Zone("Europe/Copenhagen", "Denmark", "Capital Region", "Roskilde"),

  // Europe/Dublin (Ireland, Leinster, UTC+0)
  new Zone("Europe/Dublin", "Ireland", "Leinster", "Dublin"),
  new Zone("Europe/Dublin", "Ireland", "Leinster", "Bray"),
  new Zone("Europe/Dublin", "Ireland", "Leinster", "Drogheda"),
  new Zone("Europe/Dublin", "Ireland", "Leinster", "Swords"),
  new Zone("Europe/Dublin", "Ireland", "Leinster", "Naas"),

  // Europe/Gibraltar (Gibraltar, UTC+1)
  new Zone("Europe/Gibraltar", "Gibraltar", null, "Gibraltar"),
  new Zone("Europe/Gibraltar", "Gibraltar", null, "Catalan Bay"),
  new Zone("Europe/Gibraltar", "Gibraltar", null, "Europa Point"),
  new Zone("Europe/Gibraltar", "Gibraltar", null, "Main Street"),
  new Zone("Europe/Gibraltar", "Gibraltar", null, "North District"),

  // Europe/Guernsey (UK, Channel Islands, UTC+0)
  new Zone("Europe/Guernsey", "UK", "Channel Islands", "St Peter Port"),
  new Zone("Europe/Guernsey", "UK", "Channel Islands", "St Sampson"),
  new Zone("Europe/Guernsey", "UK", "Channel Islands", "Vale"),
  new Zone("Europe/Guernsey", "UK", "Channel Islands", "Forest"),
  new Zone("Europe/Guernsey", "UK", "Channel Islands", "Torteval"),

  // Europe/Helsinki (Finland, Uusimaa, UTC+2)
  new Zone("Europe/Helsinki", "Finland", "Uusimaa", "Helsinki"),
  new Zone("Europe/Helsinki", "Finland", "Uusimaa", "Espoo"),
  new Zone("Europe/Helsinki", "Finland", "Uusimaa", "Vantaa"),
  new Zone("Europe/Helsinki", "Finland", "Uusimaa", "Kauniainen"),
  new Zone("Europe/Helsinki", "Finland", "Uusimaa", "Porvoo"),

  // Europe/Isle_of_Man (UK, Isle of Man, UTC+0)
  new Zone("Europe/Isle_of_Man", "UK", "Isle of Man", "Douglas"),
  new Zone("Europe/Isle_of_Man", "UK", "Isle of Man", "Peel"),
  new Zone("Europe/Isle_of_Man", "UK", "Isle of Man", "Ramsey"),
  new Zone("Europe/Isle_of_Man", "UK", "Isle of Man", "Castletown"),
  new Zone("Europe/Isle_of_Man", "UK", "Isle of Man", "Port Erin"),

  // Europe/Istanbul (Turkey, Istanbul, UTC+3)
  new Zone("Europe/Istanbul", "Turkey", "Istanbul", "Istanbul"),
  new Zone("Europe/Istanbul", "Turkey", "Istanbul", "Kadıköy"),
  new Zone("Europe/Istanbul", "Turkey", "Istanbul", "Beşiktaş"),
  new Zone("Europe/Istanbul", "Turkey", "Istanbul", "Üsküdar"),
  new Zone("Europe/Istanbul", "Turkey", "Istanbul", "Bakırköy"),

  // Europe/Jersey (UK, Channel Islands, UTC+0)
  new Zone("Europe/Jersey", "UK", "Channel Islands", "Saint Helier"),
  new Zone("Europe/Jersey", "UK", "Channel Islands", "Saint Brelade"),
  new Zone("Europe/Jersey", "UK", "Channel Islands", "Saint Saviour"),
  new Zone("Europe/Jersey", "UK", "Channel Islands", "Trinity"),
  new Zone("Europe/Jersey", "UK", "Channel Islands", "Saint Peter"),

  // Europe/Kaliningrad (Russia, Kaliningrad Oblast, UTC+2)
  new Zone("Europe/Kaliningrad", "Russia", "Kaliningrad Oblast", "Kaliningrad"),
  new Zone("Europe/Kaliningrad", "Russia", "Kaliningrad Oblast", "Svetly"),
  new Zone("Europe/Kaliningrad", "Russia", "Kaliningrad Oblast", "Gusev"),
  new Zone("Europe/Kaliningrad", "Russia", "Kaliningrad Oblast", "Chernyakhovsk"),
  new Zone("Europe/Kaliningrad", "Russia", "Kaliningrad Oblast", "Neman"),

  // Europe/Kiev (Ukraine, Kyiv City, UTC+2)
  new Zone("Europe/Kiev", "Ukraine", "Kyiv City", "Kyiv"),
  new Zone("Europe/Kiev", "Ukraine", "Kyiv City", "Boryspil"),
  new Zone("Europe/Kiev", "Ukraine", "Kyiv City", "Irpin"),
  new Zone("Europe/Kiev", "Ukraine", "Kyiv City", "Bila Tserkva"),
  new Zone("Europe/Kiev", "Ukraine", "Kyiv City", "Vyshneve"),

  // Europe/Kirov (Russia, Kirov Oblast, UTC+3)
  new Zone("Europe/Kirov", "Russia", "Kirov Oblast", "Kirov"),
  new Zone("Europe/Kirov", "Russia", "Kirov Oblast", "Slobodskoy"),
  new Zone("Europe/Kirov", "Russia", "Kirov Oblast", "Vyatskiye Polyany"),
  new Zone("Europe/Kirov", "Russia", "Kirov Oblast", "Kotelnich"),
  new Zone("Europe/Kirov", "Russia", "Kirov Oblast", "Murashi"),

  // Europe/Lisbon (Portugal, Lisbon, UTC+0)
  new Zone("Europe/Lisbon", "Portugal", "Lisbon", "Lisbon"),
  new Zone("Europe/Lisbon", "Portugal", "Lisbon", "Sintra"),
  new Zone("Europe/Lisbon", "Portugal", "Lisbon", "Cascais"),
  new Zone("Europe/Lisbon", "Portugal", "Lisbon", "Amadora"),
  new Zone("Europe/Lisbon", "Portugal", "Lisbon", "Oeiras"),

  // Europe/Ljubljana (Slovenia, Ljubljana, UTC+1)
  new Zone("Europe/Ljubljana", "Slovenia", "Ljubljana", "Ljubljana"),
  new Zone("Europe/Ljubljana", "Slovenia", "Ljubljana", "Maribor"),
  new Zone("Europe/Ljubljana", "Slovenia", "Ljubljana", "Celje"),
  new Zone("Europe/Ljubljana", "Slovenia", "Ljubljana", "Kranj"),
  new Zone("Europe/Ljubljana", "Slovenia", "Ljubljana", "Velenje"),

  // Europe/London (UK, England, UTC+0)
  new Zone("Europe/London", "UK", "England", "London"),
  new Zone("Europe/London", "UK", "England", "Manchester"),
  new Zone("Europe/London", "UK", "England", "Birmingham"),
  new Zone("Europe/London", "UK", "England", "Liverpool"),
  new Zone("Europe/London", "UK", "England", "Bristol"),

  // Europe/Luxembourg (Luxembourg, Luxembourg, UTC+1)
  new Zone("Europe/Luxembourg", "Luxembourg", "Luxembourg", "Luxembourg City"),
  new Zone("Europe/Luxembourg", "Luxembourg", "Luxembourg", "Esch-sur-Alzette"),
  new Zone("Europe/Luxembourg", "Luxembourg", "Luxembourg", "Differdange"),
  new Zone("Europe/Luxembourg", "Luxembourg", "Luxembourg", "Dudelange"),
  new Zone("Europe/Luxembourg", "Luxembourg", "Luxembourg", "Bettembourg"),

  // Europe/Madrid (Spain, Madrid, UTC+1)
  new Zone("Europe/Madrid", "Spain", "Madrid", "Madrid"),
  new Zone("Europe/Madrid", "Spain", "Madrid", "Alcalá de Henares"),
  new Zone("Europe/Madrid", "Spain", "Madrid", "Getafe"),
  new Zone("Europe/Madrid", "Spain", "Madrid", "Leganés"),
  new Zone("Europe/Madrid", "Spain", "Madrid", "Móstoles"),

  // Europe/Malta (Malta, Malta, UTC+1)
  new Zone("Europe/Malta", "Malta", null, "Valletta"),
  new Zone("Europe/Malta", "Malta", null, "Sliema"),
  new Zone("Europe/Malta", "Malta", null, "Mdina"),
  new Zone("Europe/Malta", "Malta", null, "St. Julian's"),
  new Zone("Europe/Malta", "Malta", null, "Birgu"),

  // Europe/Mariehamn (Finland, Åland Islands, UTC+2)
  new Zone("Europe/Mariehamn", "Finland", "Åland Islands", "Mariehamn"),
  new Zone("Europe/Mariehamn", "Finland", "Åland Islands", "Jomala"),
  new Zone("Europe/Mariehamn", "Finland", "Åland Islands", "Finström"),
  new Zone("Europe/Mariehamn", "Finland", "Åland Islands", "Lemland"),
  new Zone("Europe/Mariehamn", "Finland", "Åland Islands", "Saltvik"),

  // Europe/Minsk (Belarus, Minsk, UTC+3)
  new Zone("Europe/Minsk", "Belarus", "Minsk", "Minsk"),
  new Zone("Europe/Minsk", "Belarus", "Minsk", "Borisov"),
  new Zone("Europe/Minsk", "Belarus", "Minsk", "Zhodino"),
  new Zone("Europe/Minsk", "Belarus", "Minsk", "Molodechno"),
  new Zone("Europe/Minsk", "Belarus", "Minsk", "Smolevichi"),

  // Europe/Monaco (Monaco, Monaco, UTC+1)
  new Zone("Europe/Monaco", "Monaco", null, "Monaco"),
  new Zone("Europe/Monaco", "Monaco", null, "Monte Carlo"),
  new Zone("Europe/Monaco", "Monaco", null, "La Condamine"),
  new Zone("Europe/Monaco", "Monaco", null, "Fontvieille"),
  new Zone("Europe/Monaco", "Monaco", null, "Moneghetti"),

  // Europe/Moscow (Russia, Moscow, UTC+3)
  new Zone("Europe/Moscow", "Russia", "Moscow", "Moscow"),
  new Zone("Europe/Moscow", "Russia", "Moscow", "Zelenograd"),
  new Zone("Europe/Moscow", "Russia", "Moscow", "Khimki"),
  new Zone("Europe/Moscow", "Russia", "Moscow", "Podolsk"),
  new Zone("Europe/Moscow", "Russia", "Moscow", "Korolyov"),

  // Europe/Oslo (Norway, Oslo, UTC+1)
  new Zone("Europe/Oslo", "Norway", "Oslo", "Oslo"),
  new Zone("Europe/Oslo", "Norway", "Oslo", "Bærum"),
  new Zone("Europe/Oslo", "Norway", "Oslo", "Lillestrøm"),
  new Zone("Europe/Oslo", "Norway", "Oslo", "Asker"),
  new Zone("Europe/Oslo", "Norway", "Oslo", "Drammen"),

  // Europe/Paris (France, Île-de-France, UTC+1)
  new Zone("Europe/Paris", "France", "Île-de-France", "Paris"),
  new Zone("Europe/Paris", "France", "Île-de-France", "Boulogne-Billancourt"),
  new Zone("Europe/Paris", "France", "Île-de-France", "Saint-Denis"),
  new Zone("Europe/Paris", "France", "Île-de-France", "Versailles"),
  new Zone("Europe/Paris", "France", "Île-de-France", "Nanterre"),

  // Europe/Podgorica (Montenegro, Podgorica, UTC+1)
  new Zone("Europe/Podgorica", "Montenegro", "Podgorica", "Podgorica"),
  new Zone("Europe/Podgorica", "Montenegro", "Podgorica", "Nikšić"),
  new Zone("Europe/Podgorica", "Montenegro", "Podgorica", "Herceg Novi"),
  new Zone("Europe/Podgorica", "Montenegro", "Podgorica", "Bar"),
  new Zone("Europe/Podgorica", "Montenegro", "Podgorica", "Cetinje"),

  // Europe/Prague (Czech Republic, Prague, UTC+1)
  new Zone("Europe/Prague", "Czech Republic", "Prague", "Prague"),
  new Zone("Europe/Prague", "Czech Republic", "Prague", "Brno"),
  new Zone("Europe/Prague", "Czech Republic", "Prague", "Ostrava"),
  new Zone("Europe/Prague", "Czech Republic", "Prague", "Plzeň"),
  new Zone("Europe/Prague", "Czech Republic", "Prague", "Liberec"),

  // Europe/Riga (Latvia, Riga, UTC+2)
  new Zone("Europe/Riga", "Latvia", "Riga", "Riga"),
  new Zone("Europe/Riga", "Latvia", "Riga", "Daugavpils"),
  new Zone("Europe/Riga", "Latvia", "Riga", "Liepāja"),
  new Zone("Europe/Riga", "Latvia", "Riga", "Jelgava"),
  new Zone("Europe/Riga", "Latvia", "Riga", "Jūrmala"),

  // Europe/Rome (Italy, Lazio, UTC+1)
  new Zone("Europe/Rome", "Italy", "Lazio", "Rome"),
  new Zone("Europe/Rome", "Italy", "Lazio", "Fiumicino"),
  new Zone("Europe/Rome", "Italy", "Lazio", "Guidonia Montecelio"),
  new Zone("Europe/Rome", "Italy", "Lazio", "Ciampino"),
  new Zone("Europe/Rome", "Italy", "Lazio", "Tivoli"),

  // Europe/Samara (Russia, Samara Oblast, UTC+4)
  new Zone("Europe/Samara", "Russia", "Samara Oblast", "Samara"),
  new Zone("Europe/Samara", "Russia", "Samara Oblast", "Tolyatti"),
  new Zone("Europe/Samara", "Russia", "Samara Oblast", "Syzran"),
  new Zone("Europe/Samara", "Russia", "Samara Oblast", "Novokuybyshevsk"),
  new Zone("Europe/Samara", "Russia", "Samara Oblast", "Chapaevsk"),

  // Europe/San_Marino (San Marino, San Marino, UTC+1)
  new Zone("Europe/San_Marino", "San Marino", null, "San Marino"),
  new Zone("Europe/San_Marino", "San Marino", null, "Serravalle"),
  new Zone("Europe/San_Marino", "San Marino", null, "Borgo Maggiore"),
  new Zone("Europe/San_Marino", "San Marino", null, "Domagnano"),
  new Zone("Europe/San_Marino", "San Marino", null, "Fiorentino"),

  // Europe/Sarajevo (Bosnia and Herzegovina, Federation of Bosnia and Herzegovina, UTC+1)
  new Zone("Europe/Sarajevo", "Bosnia and Herzegovina", "Federation of Bosnia and Herzegovina", "Sarajevo"),
  new Zone("Europe/Sarajevo", "Bosnia and Herzegovina", "Federation of Bosnia and Herzegovina", "Banja Luka"),
  new Zone("Europe/Sarajevo", "Bosnia and Herzegovina", "Federation of Bosnia and Herzegovina", "Tuzla"),
  new Zone("Europe/Sarajevo", "Bosnia and Herzegovina", "Federation of Bosnia and Herzegovina", "Zenica"),
  new Zone("Europe/Sarajevo", "Bosnia and Herzegovina", "Federation of Bosnia and Herzegovina", "Mostar"),

  // Europe/Saratov (Russia, Saratov Oblast, UTC+4)
  new Zone("Europe/Saratov", "Russia", "Saratov Oblast", "Saratov"),
  new Zone("Europe/Saratov", "Russia", "Saratov Oblast", "Engels"),
  new Zone("Europe/Saratov", "Russia", "Saratov Oblast", "Balakovo"),
  new Zone("Europe/Saratov", "Russia", "Saratov Oblast", "Krasny Kut"),
  new Zone("Europe/Saratov", "Russia", "Saratov Oblast", "Pugachyov"),

  // Europe/Simferopol (Crimea, Simferopol, UTC+3)
  new Zone("Europe/Simferopol", "Crimea", "Simferopol", "Simferopol"),
  new Zone("Europe/Simferopol", "Crimea", "Simferopol", "Sevastopol"),
  new Zone("Europe/Simferopol", "Crimea", "Simferopol", "Yalta"),
  new Zone("Europe/Simferopol", "Crimea", "Simferopol", "Feodosia"),
  new Zone("Europe/Simferopol", "Crimea", "Simferopol", "Kerch"),

  // Europe/Skopje (North Macedonia, Skopje, UTC+1)
  new Zone("Europe/Skopje", "North Macedonia", "Skopje", "Skopje"),
  new Zone("Europe/Skopje", "North Macedonia", "Skopje", "Bitola"),
  new Zone("Europe/Skopje", "North Macedonia", "Skopje", "Kumanovo"),
  new Zone("Europe/Skopje", "North Macedonia", "Skopje", "Prilep"),
  new Zone("Europe/Skopje", "North Macedonia", "Skopje", "Tetovo"),

  // Europe/Sofia (Bulgaria, Sofia City Province, UTC+2)
  new Zone("Europe/Sofia", "Bulgaria", "Sofia City Province", "Sofia"),
  new Zone("Europe/Sofia", "Bulgaria", "Sofia City Province", "Plovdiv"),
  new Zone("Europe/Sofia", "Bulgaria", "Sofia City Province", "Varna"),
  new Zone("Europe/Sofia", "Bulgaria", "Sofia City Province", "Burgas"),
  new Zone("Europe/Sofia", "Bulgaria", "Sofia City Province", "Ruse"),

  // Europe/Stockholm (Sweden, Stockholm County, UTC+1)
  new Zone("Europe/Stockholm", "Sweden", "Stockholm County", "Stockholm"),
  new Zone("Europe/Stockholm", "Sweden", "Stockholm County", "Uppsala"),
  new Zone("Europe/Stockholm", "Sweden", "Stockholm County", "Västerås"),
  new Zone("Europe/Stockholm", "Sweden", "Stockholm County", "Örebro"),
  new Zone("Europe/Stockholm", "Sweden", "Stockholm County", "Linköping"),

  // Europe/Tallinn (Estonia, Harju County, UTC+2)
  new Zone("Europe/Tallinn", "Estonia", "Harju County", "Tallinn"),
  new Zone("Europe/Tallinn", "Estonia", "Harju County", "Tartu"),
  new Zone("Europe/Tallinn", "Estonia", "Harju County", "Narva"),
  new Zone("Europe/Tallinn", "Estonia", "Harju County", "Pärnu"),
  new Zone("Europe/Tallinn", "Estonia", "Harju County", "Kohtla-Järve"),

  // Europe/Tirane (Albania, Tirana, UTC+1)
  new Zone("Europe/Tirane", "Albania", "Tirana", "Tirana"),
  new Zone("Europe/Tirane", "Albania", "Tirana", "Durrës"),
  new Zone("Europe/Tirane", "Albania", "Tirana", "Vlorë"),
  new Zone("Europe/Tirane", "Albania", "Tirana", "Elbasan"),
  new Zone("Europe/Tirane", "Albania", "Tirana", "Shkodër"),

  // Europe/Ulyanovsk (Russia, Ulyanovsk Oblast, UTC+4)
  new Zone("Europe/Ulyanovsk", "Russia", "Ulyanovsk Oblast", "Ulyanovsk"),
  new Zone("Europe/Ulyanovsk", "Russia", "Ulyanovsk Oblast", "Novoulianovsk"),
  new Zone("Europe/Ulyanovsk", "Russia", "Ulyanovsk Oblast", "Inza"),
  new Zone("Europe/Ulyanovsk", "Russia", "Ulyanovsk Oblast", "Barysh"),
  new Zone("Europe/Ulyanovsk", "Russia", "Ulyanovsk Oblast", "Sengiley"),

  // Europe/Vaduz (Liechtenstein, Vaduz, UTC+1)
  new Zone("Europe/Vaduz", "Liechtenstein", null, "Vaduz"),
  new Zone("Europe/Vaduz", "Liechtenstein", null, "Schaan"),
  new Zone("Europe/Vaduz", "Liechtenstein", null, "Triesen"),
  new Zone("Europe/Vaduz", "Liechtenstein", null, "Balzers"),
  new Zone("Europe/Vaduz", "Liechtenstein", null, "Mauren"),

  // Europe/Vatican (Vatican City, Vatican City, UTC+1)
  new Zone("Europe/Vatican", "Vatican City", null, "Vatican City"),
  new Zone("Europe/Vatican", "Vatican City", null, "Borgo"),
  new Zone("Europe/Vatican", "Vatican City", null, "Prati"),
  new Zone("Europe/Vatican", "Vatican City", null, "Trastevere"),
  new Zone("Europe/Vatican", "Vatican City", null, "Monti"),

  // Europe/Vienna (Austria, Vienna, UTC+1)
  new Zone("Europe/Vienna", "Austria", "Vienna", "Vienna"),
  new Zone("Europe/Vienna", "Austria", "Lower Austria", "St. Pölten"),
  new Zone("Europe/Vienna", "Austria", "Vienna", "Floridsdorf"),
  new Zone("Europe/Vienna", "Austria", "Vienna", "Favoriten"),
  new Zone("Europe/Vienna", "Austria", "Vienna", "Leopoldstadt"),

  // Europe/Vilnius (Lithuania, Vilnius County, UTC+2)
  new Zone("Europe/Vilnius", "Lithuania", "Vilnius County", "Vilnius"),
  new Zone("Europe/Vilnius", "Lithuania", "Vilnius County", "Kaunas"),
  new Zone("Europe/Vilnius", "Lithuania", "Vilnius County", "Klaipėda"),
  new Zone("Europe/Vilnius", "Lithuania", "Vilnius County", "Šiauliai"),
  new Zone("Europe/Vilnius", "Lithuania", "Vilnius County", "Panevėžys"),

  // Europe/Volgograd (Russia, Volgograd Oblast, UTC+3)
  new Zone("Europe/Volgograd", "Russia", "Volgograd Oblast", "Volgograd"),
  new Zone("Europe/Volgograd", "Russia", "Volgograd Oblast", "Kamyshin"),
  new Zone("Europe/Volgograd", "Russia", "Volgograd Oblast", "Mikhaylovka"),
  new Zone("Europe/Volgograd", "Russia", "Volgograd Oblast", "Uryupinsk"),
  new Zone("Europe/Volgograd", "Russia", "Volgograd Oblast", "Frolovo"),

  // Europe/Warsaw (Poland, Masovian Voivodeship, UTC+1)
  new Zone("Europe/Warsaw", "Poland", "Masovian Voivodeship", "Warsaw"),
  new Zone("Europe/Warsaw", "Poland", "Masovian Voivodeship", "Radom"),
  new Zone("Europe/Warsaw", "Poland", "Masovian Voivodeship", "Płock"),
  new Zone("Europe/Warsaw", "Poland", "Masovian Voivodeship", "Siedlce"),
  new Zone("Europe/Warsaw", "Poland", "Masovian Voivodeship", "Ostrołęka"),

  // Europe/Zagreb (Croatia, City of Zagreb, UTC+1)
  new Zone("Europe/Zagreb", "Croatia", "City of Zagreb", "Zagreb"),
  new Zone("Europe/Zagreb", "Croatia", "City of Zagreb", "Velika Gorica"),
  new Zone("Europe/Zagreb", "Croatia", "City of Zagreb", "Samobor"),
  new Zone("Europe/Zagreb", "Croatia", "City of Zagreb", "Zaprešić"),
  new Zone("Europe/Zagreb", "Croatia", "City of Zagreb", "Dugo Selo"),

  // Europe/Zurich (Switzerland, Canton of Zurich, UTC+1)
  new Zone("Europe/Zurich", "Switzerland", "Canton of Zurich", "Zurich"),
  new Zone("Europe/Zurich", "Switzerland", "Canton of Zurich", "Winterthur"),
  new Zone("Europe/Zurich", "Switzerland", "Canton of Zurich", "Uster"),
  new Zone("Europe/Zurich", "Switzerland", "Canton of Zurich", "Dübendorf"),
  new Zone("Europe/Zurich", "Switzerland", "Canton of Zurich", "Dietikon"),

  // Indian/Antananarivo (Madagascar, Antananarivo, UTC+3)
  new Zone("Indian/Antananarivo", "Madagascar", null, "Antananarivo"),
  new Zone("Indian/Antananarivo", "Madagascar", null, "Toamasina"),
  new Zone("Indian/Antananarivo", "Madagascar", null, "Antsirabe"),
  new Zone("Indian/Antananarivo", "Madagascar", null, "Fianarantsoa"),
  new Zone("Indian/Antananarivo", "Madagascar", null, "Mahajanga"),

  // Indian/Chagos (British Indian Ocean Territory, Chagos Archipelago, UTC+6)
  new Zone("Indian/Chagos", "British Indian Ocean Territory", null, "Diego Garcia"),
  new Zone("Indian/Chagos", "British Indian Ocean Territory", null, "Peros Banhos"),
  new Zone("Indian/Chagos", "British Indian Ocean Territory", null, "Salomon Islands"),
  new Zone("Indian/Chagos", "British Indian Ocean Territory", null, "Egmont Islands"),
  new Zone("Indian/Chagos", "British Indian Ocean Territory", null, "Three Brothers Islands"),

  // Indian/Christmas (Christmas Island, Territory of Christmas Island, UTC+7)
  new Zone("Indian/Christmas", "Christmas Island", null, "Flying Fish Cove"),
  new Zone("Indian/Christmas", "Christmas Island", null, "Silver City"),
  new Zone("Indian/Christmas", "Christmas Island", null, "Poon Saan"),
  new Zone("Indian/Christmas", "Christmas Island", null, "West Island"),
  new Zone("Indian/Christmas", "Christmas Island", null, "Drumsite"),

  // Indian/Cocos (Cocos (Keeling) Islands, UTC+6:30)
  new Zone("Indian/Cocos", "Cocos (Keeling) Islands", null, "West Island"),
  new Zone("Indian/Cocos", "Cocos (Keeling) Islands", null, "Home Island"),
  new Zone("Indian/Cocos", "Cocos (Keeling) Islands", null, "North Keeling Island"),
  new Zone("Indian/Cocos", "Cocos (Keeling) Islands", null, "South Island"),
  new Zone("Indian/Cocos", "Cocos (Keeling) Islands", null, "Direction Island"),

  // Indian/Comoro (Comoros, Ngazidja, UTC+3)
  new Zone("Indian/Comoro", "Comoros", null, "Moroni"),
  new Zone("Indian/Comoro", "Comoros", null, "Mutsamudu"),
  new Zone("Indian/Comoro", "Comoros", null, "Fomboni"),
  new Zone("Indian/Comoro", "Comoros", null, "Iconi"),
  new Zone("Indian/Comoro", "Comoros", null, "Domoni"),

  // Indian/Kerguelen (French Southern and Antarctic Lands, Kerguelen Islands, UTC+5)
  new Zone("Indian/Kerguelen", "French Southern and Antarctic Lands", null, "Port-aux-Français"),
  new Zone("Indian/Kerguelen", "French Southern and Antarctic Lands", null, "Baie de l'Oiseau"),
  new Zone("Indian/Kerguelen", "French Southern and Antarctic Lands", null, "Baie de l’Hoste"),
  new Zone("Indian/Kerguelen", "French Southern and Antarctic Lands", null, "Pointe Suzanne"),
  new Zone("Indian/Kerguelen", "French Southern and Antarctic Lands", null, "Île Australia"),

  // Indian/Mahe (Seychelles, Mahe Island, UTC+4)
  new Zone("Indian/Mahe", "Seychelles", null, "Victoria"),
  new Zone("Indian/Mahe", "Seychelles", null, "Beau Vallon"),
  new Zone("Indian/Mahe", "Seychelles", null, "Anse Royale"),
  new Zone("Indian/Mahe", "Seychelles", null, "Bel Ombre"),
  new Zone("Indian/Mahe", "Seychelles", null, "Glacis"),

  // Indian/Maldives (Maldives, Kaafu Atoll, UTC+5)
  new Zone("Indian/Maldives", "Maldives", null, "Malé"),
  new Zone("Indian/Maldives", "Maldives", null, "Addu City"),
  new Zone("Indian/Maldives", "Maldives", null, "Fuvahmulah"),
  new Zone("Indian/Maldives", "Maldives", null, "Hulhumalé"),
  new Zone("Indian/Maldives", "Maldives", null, "Kulhudhuffushi"),

  // Indian/Mauritius (Mauritius, Port Louis District, UTC+4)
  new Zone("Indian/Mauritius", "Mauritius", null, "Port Louis"),
  new Zone("Indian/Mauritius", "Mauritius", null, "Curepipe"),
  new Zone("Indian/Mauritius", "Mauritius", null, "Quatre Bornes"),
  new Zone("Indian/Mauritius", "Mauritius", null, "Vacoas-Phoenix"),
  new Zone("Indian/Mauritius", "Mauritius", null, "Rose Hill"),

  // Indian/Mayotte (Mayotte, Overseas Department of France, UTC+3)
  new Zone("Indian/Mayotte", "Mayotte", null, "Mamoudzou"),
  new Zone("Indian/Mayotte", "Mayotte", null, "Dzaoudzi"),
  new Zone("Indian/Mayotte", "Mayotte", null, "Koungou"),
  new Zone("Indian/Mayotte", "Mayotte", null, "Bandrele"),
  new Zone("Indian/Mayotte", "Mayotte", null, "Chirongui"),

  // Indian/Reunion (Réunion Island, Overseas Department of France, UTC+4)
  new Zone("Indian/Reunion", "Réunion", null, "Saint-Denis"),
  new Zone("Indian/Reunion", "Réunion", null, "Saint-Paul"),
  new Zone("Indian/Reunion", "Réunion", null, "Saint-Pierre"),
  new Zone("Indian/Reunion", "Réunion", null, "Le Tampon"),
  new Zone("Indian/Reunion", "Réunion", null, "Saint-André"),

  // Pacific/Apia (Samoa, Apia, UTC+13)
  new Zone("Pacific/Apia", "Samoa", null, "Apia"),
  new Zone("Pacific/Apia", "Samoa", null, "Vaitele"),
  new Zone("Pacific/Apia", "Samoa", null, "Faleula"),
  new Zone("Pacific/Apia", "Samoa", null, "Mulifanua"),
  new Zone("Pacific/Apia", "Samoa", null, "Leulumoega"),

  // Pacific/Auckland (New Zealand, Auckland, UTC+12)
  new Zone("Pacific/Auckland", "New Zealand", "Auckland Region", "Auckland"),
  new Zone("Pacific/Auckland", "New Zealand", "Auckland Region", "Manukau"),
  new Zone("Pacific/Auckland", "New Zealand", "Auckland Region", "North Shore"),
  new Zone("Pacific/Auckland", "New Zealand", "Auckland Region", "Waitakere"),
  new Zone("Pacific/Auckland", "New Zealand", "Auckland Region", "Papakura"),

  // Pacific/Bougainville (Papua New Guinea, Bougainville Island, UTC+11)
  new Zone("Pacific/Bougainville", "Papua New Guinea", null, "Buka"),
  new Zone("Pacific/Bougainville", "Papua New Guinea", null, "Arawa"),
  new Zone("Pacific/Bougainville", "Papua New Guinea", null, "Buin"),
  new Zone("Pacific/Bougainville", "Papua New Guinea", null, "Kieta"),
  new Zone("Pacific/Bougainville", "Papua New Guinea", null, "Tonolei"),

  // Pacific/Chatham (New Zealand, Chatham Islands, UTC+12:45)
  new Zone("Pacific/Chatham", "New Zealand", "Chatham Islands", "Waitangi"),
  new Zone("Pacific/Chatham", "New Zealand", "Chatham Islands", "Te One"),
  new Zone("Pacific/Chatham", "New Zealand", "Chatham Islands", "Kaingaroa"),
  new Zone("Pacific/Chatham", "New Zealand", "Chatham Islands", "Owenga"),
  new Zone("Pacific/Chatham", "New Zealand", "Chatham Islands", "Port Hutt"),

  // Pacific/Easter (Chile, Easter Island, UTC-6)
  new Zone("Pacific/Easter", "Chile", "Easter Island", "Hanga Roa"),
  new Zone("Pacific/Easter", "Chile", "Easter Island", "Anakena"),
  new Zone("Pacific/Easter", "Chile", "Easter Island", "Ahu Tongariki"),
  new Zone("Pacific/Easter", "Chile", "Easter Island", "Orongo"),
  new Zone("Pacific/Easter", "Chile", "Easter Island", "Vinapu"),

  // Pacific/Efate (Vanuatu, Efate Island, UTC+11)
  new Zone("Pacific/Efate", "Vanuatu", null, "Port Vila"),
  new Zone("Pacific/Efate", "Vanuatu", null, "Luganville"),
  new Zone("Pacific/Efate", "Vanuatu", null, "Norsup"),
  new Zone("Pacific/Efate", "Vanuatu", null, "Santo"),
  new Zone("Pacific/Efate", "Vanuatu", null, "Tanna"),

  // Pacific/Enderbury (Phoenix Islands, Kiribati, UTC+13)
  new Zone("Pacific/Enderbury", "Kiribati", null, "Enderbury Island"),
  new Zone("Pacific/Enderbury", "Kiribati", null, "Rawaki Island"),
  new Zone("Pacific/Enderbury", "Kiribati", null, "Manra Island"),
  new Zone("Pacific/Enderbury", "Kiribati", null, "Orona Atoll"),
  new Zone("Pacific/Enderbury", "Kiribati", null, "Nikumaroro"),

  // Pacific/Fakaofo (Tokelau, Fakaofo Atoll, UTC+13)
  new Zone("Pacific/Fakaofo", "Tokelau", null, "Fakaofo"),
  new Zone("Pacific/Fakaofo", "Tokelau", null, "Teafuanonu"),
  new Zone("Pacific/Fakaofo", "Tokelau", null, "Nukunonu"),
  new Zone("Pacific/Fakaofo", "Tokelau", null, "Atafu"),
  new Zone("Pacific/Fakaofo", "Tokelau", null, "Fenuafala"),

  // Pacific/Fiji (Fiji, Central Division, UTC+12)
  new Zone("Pacific/Fiji", "Fiji", "Central Division", "Suva"),
  new Zone("Pacific/Fiji", "Fiji", "Western Division", "Nadi"),
  new Zone("Pacific/Fiji", "Fiji", "Northern Division", "Labasa"),
  new Zone("Pacific/Fiji", "Fiji", "Eastern Division", "Levuka"),
  new Zone("Pacific/Fiji", "Fiji", "Central Division", "Nausori"),

  // Pacific/Funafuti (Tuvalu, Funafuti Atoll, UTC+12)
  new Zone("Pacific/Funafuti", "Tuvalu", null, "Funafuti"),
  new Zone("Pacific/Funafuti", "Tuvalu", null, "Vaitupu"),
  new Zone("Pacific/Funafuti", "Tuvalu", null, "Nanumea"),
  new Zone("Pacific/Funafuti", "Tuvalu", null, "Nukufetau"),
  new Zone("Pacific/Funafuti", "Tuvalu", null, "Nui"),

  // Pacific/Galapagos (Ecuador, Galápagos Islands, UTC-6)
  new Zone("Pacific/Galapagos", "Ecuador", "Galápagos", "Puerto Ayora"),
  new Zone("Pacific/Galapagos", "Ecuador", "Galápagos", "Puerto Baquerizo Moreno"),
  new Zone("Pacific/Galapagos", "Ecuador", "Galápagos", "Puerto Villamil"),
  new Zone("Pacific/Galapagos", "Ecuador", "Galápagos", "Puerto Velasco Ibarra"),
  new Zone("Pacific/Galapagos", "Ecuador", "Galápagos", "Puerto Baquerizo"),

  // Pacific/Gambier (French Polynesia, Gambier Islands, UTC-9)
  new Zone("Pacific/Gambier", "French Polynesia", null, "Mangareva"),
  new Zone("Pacific/Gambier", "French Polynesia", null, "Akamaru"),
  new Zone("Pacific/Gambier", "French Polynesia", null, "Taravai"),
  new Zone("Pacific/Gambier", "French Polynesia", null, "Aukena"),
  new Zone("Pacific/Gambier", "French Polynesia", null, "Tuamotu"),

  // Pacific/Guadalcanal (Solomon Islands, Guadalcanal Province, UTC+11)
  new Zone("Pacific/Guadalcanal", "Solomon Islands", null, "Honiara"),
  new Zone("Pacific/Guadalcanal", "Solomon Islands", null, "Aola"),
  new Zone("Pacific/Guadalcanal", "Solomon Islands", null, "Tandai"),
  new Zone("Pacific/Guadalcanal", "Solomon Islands", null, "Vura"),
  new Zone("Pacific/Guadalcanal", "Solomon Islands", null, "Mbalavu"),

  // Pacific/Guam (USA Territory, Guam, UTC+10)
  new Zone("Pacific/Guam", "USA", "Guam", "Hagåtña"),
  new Zone("Pacific/Guam", "USA", "Guam", "Dededo"),
  new Zone("Pacific/Guam", "USA", "Guam", "Tamuning"),
  new Zone("Pacific/Guam", "USA", "Guam", "Yigo"),
  new Zone("Pacific/Guam", "USA", "Guam", "Mangilao"),

  // Pacific/Honolulu (USA, Hawaii, UTC-10)
  new Zone("Pacific/Honolulu", "USA", "Hawaii", "Honolulu"),
  new Zone("Pacific/Honolulu", "USA", "Hawaii", "Hilo"),
  new Zone("Pacific/Honolulu", "USA", "Hawaii", "Kailua"),
  new Zone("Pacific/Honolulu", "USA", "Hawaii", "Kapolei"),
  new Zone("Pacific/Honolulu", "USA", "Hawaii", "Waikiki"),

  // Pacific/Kiritimati (Kiribati, Line Islands, UTC+14)
  new Zone("Pacific/Kiritimati", "Kiribati", null, "Kiritimati"),
  new Zone("Pacific/Kiritimati", "Kiribati", null, "London Island"),
  new Zone("Pacific/Kiritimati", "Kiribati", null, "Tebua Tarawa"),
  new Zone("Pacific/Kiritimati", "Kiribati", null, "Tatakoto"),
  new Zone("Pacific/Kiritimati", "Kiribati", null, "Tabuaeran"),

  // Pacific/Kosrae (Micronesia, Kosrae State, UTC+11)
  new Zone("Pacific/Kosrae", "Micronesia", "Kosrae State", "Lelu"),
  new Zone("Pacific/Kosrae", "Micronesia", "Kosrae State", "Tafunsak"),
  new Zone("Pacific/Kosrae", "Micronesia", "Kosrae State", "Malem"),
  new Zone("Pacific/Kosrae", "Micronesia", "Kosrae State", "Tofol"),
  new Zone("Pacific/Kosrae", "Micronesia", "Kosrae State", "Okat"),

  // Pacific/Kwajalein (Marshall Islands, Kwajalein Atoll, UTC+12)
  new Zone("Pacific/Kwajalein", "Marshall Islands", null, "Kwajalein"),
  new Zone("Pacific/Kwajalein", "Marshall Islands", null, "Majuro"),
  new Zone("Pacific/Kwajalein", "Marshall Islands", null, "Ebeye"),
  new Zone("Pacific/Kwajalein", "Marshall Islands", null, "Rongelap"),
  new Zone("Pacific/Kwajalein", "Marshall Islands", null, "Wotje"),

  // Pacific/Majuro (Marshall Islands, Majuro Atoll, UTC+12)
  new Zone("Pacific/Majuro", "Marshall Islands", null, "Majuro"),
  new Zone("Pacific/Majuro", "Marshall Islands", null, "Jabat"),
  new Zone("Pacific/Majuro", "Marshall Islands", null, "Ailinglaplap"),
  new Zone("Pacific/Majuro", "Marshall Islands", null, "Bikini Atoll"),
  new Zone("Pacific/Majuro", "Marshall Islands", null, "Ujae"),

  // Pacific/Marquesas (French Polynesia, Marquesas Islands, UTC-9:30)
  new Zone("Pacific/Marquesas", "French Polynesia", null, "Taiohae"),
  new Zone("Pacific/Marquesas", "French Polynesia", null, "Hakahau"),
  new Zone("Pacific/Marquesas", "French Polynesia", null, "Ua Pou"),
  new Zone("Pacific/Marquesas", "French Polynesia", null, "Nuku Hiva"),
  new Zone("Pacific/Marquesas", "French Polynesia", null, "Hiva Oa"),

  // Pacific/Midway (USA Territory, Midway Atoll, UTC-11)
  new Zone("Pacific/Midway", "USA", "Midway Atoll", "Sand Island"),
  new Zone("Pacific/Midway", "USA", "Midway Atoll", "Eastern Island"),
  new Zone("Pacific/Midway", "USA", "Midway Atoll", "Spit Island"),
  new Zone("Pacific/Midway", "USA", "Midway Atoll", "Green Island"),
  new Zone("Pacific/Midway", "USA", "Midway Atoll", "Cape Kumukahi"),

  // Pacific/Nauru (Nauru, no states, UTC+12)
  new Zone("Pacific/Nauru", "Nauru", null, "Yaren"),
  new Zone("Pacific/Nauru", "Nauru", null, "Boe"),
  new Zone("Pacific/Nauru", "Nauru", null, "Anabar"),
  new Zone("Pacific/Nauru", "Nauru", null, "Meneng"),
  new Zone("Pacific/Nauru", "Nauru", null, "Aiwo"),

  // Pacific/Niue (Niue, no states, UTC-11)
  new Zone("Pacific/Niue", "Niue", null, "Alofi"),
  new Zone("Pacific/Niue", "Niue", null, "Makefu"),
  new Zone("Pacific/Niue", "Niue", null, "Hikutavake"),
  new Zone("Pacific/Niue", "Niue", null, "Avatele"),
  new Zone("Pacific/Niue", "Niue", null, "Tamakautoga"),

  // Pacific/Norfolk (Australia territory, Norfolk Island, UTC+11)
  new Zone("Pacific/Norfolk", "Australia", "Norfolk Island", "Kingston"),
  new Zone("Pacific/Norfolk", "Australia", "Norfolk Island", "Burnt Pine"),
  new Zone("Pacific/Norfolk", "Australia", "Norfolk Island", "Middlegate"),
  new Zone("Pacific/Norfolk", "Australia", "Norfolk Island", "Emily Bay"),
  new Zone("Pacific/Norfolk", "Australia", "Norfolk Island", "Cascade Bay"),

  // Pacific/Noumea (New Caledonia, no states, UTC+11)
  new Zone("Pacific/Noumea", "New Caledonia", null, "Nouméa"),
  new Zone("Pacific/Noumea", "New Caledonia", null, "Dumbea"),
  new Zone("Pacific/Noumea", "New Caledonia", null, "Mont-Dore"),
  new Zone("Pacific/Noumea", "New Caledonia", null, "Bourail"),
  new Zone("Pacific/Noumea", "New Caledonia", null, "Poindimié"),

  // Pacific/Pago_Pago (American Samoa, no states, UTC-11)
  new Zone("Pacific/Pago_Pago", "USA", "American Samoa", "Pago Pago"),
  new Zone("Pacific/Pago_Pago", "USA", "American Samoa", "Fagasa"),
  new Zone("Pacific/Pago_Pago", "USA", "American Samoa", "Afao"),
  new Zone("Pacific/Pago_Pago", "USA", "American Samoa", "Aua"),
  new Zone("Pacific/Pago_Pago", "USA", "American Samoa", "Tula"),

  // Pacific/Palau (Palau, no states, UTC+9)
  new Zone("Pacific/Palau", "Palau", null, "Ngerulmud"),
  new Zone("Pacific/Palau", "Palau", null, "Koror"),
  new Zone("Pacific/Palau", "Palau", null, "Airai"),
  new Zone("Pacific/Palau", "Palau", null, "Melekeok"),
  new Zone("Pacific/Palau", "Palau", null, "Ngardmau"),

  // Pacific/Pitcairn (Pitcairn Islands, no states, UTC-8)
  new Zone("Pacific/Pitcairn", "Pitcairn Islands", null, "Adamstown"),
  new Zone("Pacific/Pitcairn", "Pitcairn Islands", null, "Bounty Bay"),
  new Zone("Pacific/Pitcairn", "Pitcairn Islands", null, "Down Rope"),
  new Zone("Pacific/Pitcairn", "Pitcairn Islands", null, "Hillsborough"),
  new Zone("Pacific/Pitcairn", "Pitcairn Islands", null, "St. Paul's"),

  // Pacific/Ponape (FSM, Pohnpei State, UTC+11)
  new Zone("Pacific/Ponape", "Micronesia", "Pohnpei State", "Kolonia"),
  new Zone("Pacific/Ponape", "Micronesia", "Pohnpei State", "Palikir"),
  new Zone("Pacific/Ponape", "Micronesia", "Pohnpei State", "Kepin"),
  new Zone("Pacific/Ponape", "Micronesia", "Pohnpei State", "Mwoakilloa"),
  new Zone("Pacific/Ponape", "Micronesia", "Pohnpei State", "Sekere"),

  // Pacific/Port_Moresby (Papua New Guinea, no states, UTC+10)
  new Zone("Pacific/Port_Moresby", "Papua New Guinea", null, "Port Moresby"),
  new Zone("Pacific/Port_Moresby", "Papua New Guinea", null, "Lae"),
  new Zone("Pacific/Port_Moresby", "Papua New Guinea", null, "Mount Hagen"),
  new Zone("Pacific/Port_Moresby", "Papua New Guinea", null, "Goroka"),
  new Zone("Pacific/Port_Moresby", "Papua New Guinea", null, "Madang"),

  // Pacific/Rarotonga (Cook Islands, no states, UTC-10)
  new Zone("Pacific/Rarotonga", "Cook Islands", null, "Avarua"),
  new Zone("Pacific/Rarotonga", "Cook Islands", null, "Arorangi"),
  new Zone("Pacific/Rarotonga", "Cook Islands", null, "Titikaveka"),
  new Zone("Pacific/Rarotonga", "Cook Islands", null, "Nikao"),
  new Zone("Pacific/Rarotonga", "Cook Islands", null, "Matavera"),

  // Pacific/Saipan (Northern Mariana Islands, USA, UTC+10)
  new Zone("Pacific/Saipan", "USA", "Northern Mariana Islands", "Saipan"),
  new Zone("Pacific/Saipan", "USA", "Northern Mariana Islands", "Tinian"),
  new Zone("Pacific/Saipan", "USA", "Northern Mariana Islands", "Rota"),
  new Zone("Pacific/Saipan", "USA", "Northern Mariana Islands", "San Jose"),
  new Zone("Pacific/Saipan", "USA", "Northern Mariana Islands", "Kagman"),

  // Pacific/Tahiti (French Polynesia, no states, UTC-10)
  new Zone("Pacific/Tahiti", "French Polynesia", null, "Papeete"),
  new Zone("Pacific/Tahiti", "French Polynesia", null, "Faaa"),
  new Zone("Pacific/Tahiti", "French Polynesia", null, "Punaauia"),
  new Zone("Pacific/Tahiti", "French Polynesia", null, "Mahina"),
  new Zone("Pacific/Tahiti", "French Polynesia", null, "Paea"),

  // Pacific/Tarawa (Kiribati, no states, UTC+12)
  new Zone("Pacific/Tarawa", "Kiribati", null, "South Tarawa"),
  new Zone("Pacific/Tarawa", "Kiribati", null, "Bairiki"),
  new Zone("Pacific/Tarawa", "Kiribati", null, "Betio"),
  new Zone("Pacific/Tarawa", "Kiribati", null, "Teaoraereke"),
  new Zone("Pacific/Tarawa", "Kiribati", null, "Nanikai"),

  // Pacific/Tongatapu (Tonga, no states, UTC+13)
  new Zone("Pacific/Tongatapu", "Tonga", null, "Nuku'alofa"),
  new Zone("Pacific/Tongatapu", "Tonga", null, "Neiafu"),
  new Zone("Pacific/Tongatapu", "Tonga", null, "Havelu"),
  new Zone("Pacific/Tongatapu", "Tonga", null, "Mu'a"),
  new Zone("Pacific/Tongatapu", "Tonga", null, "Kolomotu'a"),

  // Pacific/Truk (Chuuk, FSM, no states, UTC+10)
  new Zone("Pacific/Truk", "Micronesia", "Chuuk State", "Weno"),
  new Zone("Pacific/Truk", "Micronesia", "Chuuk State", "Fefan"),
  new Zone("Pacific/Truk", "Micronesia", "Chuuk State", "Uman"),
  new Zone("Pacific/Truk", "Micronesia", "Chuuk State", "Tol"),
  new Zone("Pacific/Truk", "Micronesia", "Chuuk State", "Fananu"),

  // Pacific/Wake (Wake Island, USA, no states, UTC+12)
  new Zone("Pacific/Wake", "USA", "Wake Island", "Wake Island"),
  new Zone("Pacific/Wake", "USA", "Wake Island", "Wilkes"),
  new Zone("Pacific/Wake", "USA", "Wake Island", "Peale"),
  new Zone("Pacific/Wake", "USA", "Wake Island", "Wake Atoll"),
  new Zone("Pacific/Wake", "USA", "Wake Island", "Eastern Island"),

  // Pacific/Wallis (Wallis and Futuna, no states, UTC+12)
  new Zone("Pacific/Wallis", "Wallis and Futuna", null, "Mata-Utu"),
  new Zone("Pacific/Wallis", "Wallis and Futuna", null, "Halalo"),
  new Zone("Pacific/Wallis", "Wallis and Futuna", null, "Futuna"),
  new Zone("Pacific/Wallis", "Wallis and Futuna", null, "Lutui"),
  new Zone("Pacific/Wallis", "Wallis and Futuna", null, "Vaitupu")

]

module.exports = zones

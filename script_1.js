
let map
let heatmap
const munich = { lat: 48.1351, lng: 11.5820 }
let colorPrice = ""
let colorStars = ""
let sizeStars = 0
let collisionBehavior = ""
let contentString = ""
let icon = ""

const hotelData = {
    A: {
        name: "Mercure Hotel München Altstadt",
        address: "Hotterstr. 4, Altstadt-Lehel, 80331 Munich, Germany",
        position: { lat: 48.13722, lng: 11.57093 },
        ratings: 8.4,
        stars: 3,
        price: 0,
        available: false,
        type: "hotel",
        imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/499064406.jpg?k=d683688b5e4f7300f6ef23e6b3cc924ca6e95e1efea842752461ecaf5dc1b1c5&o=&hp=1",
        link: "https://www.booking.com/hotel/de/mercure-munchen-altstadt.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaDuIAQGYAQm4AQfIAQzYAQHoAQH4AQyIAgGoAgO4AvjfvKsGwAIB0gIkNzFmOTE2M2MtMzdjYi00ZTE2LTlkZWQtNTA3YjFlMTBlYzc32AIG4AIB&sid=21756af46f38b55084648a7dc35393d4&atlas_src=sr_iw_btn;checkin=2023-12-15;checkout=2023-12-17;dest_id=-1829149;dest_type=city;dist=0;group_adults=2;group_children=0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&"
    },
    B: {
        name: "Hotel Am Markt",
        address: "Heiliggeiststr. 6, Altstadt-Lehel, 80331 Munich, Germany",
        position: { lat: 48.13548, lng: 11.57709 },
        ratings: 8.1,
        stars: 3,
        price: 220,
        available: true,
        type: "hotel",
        imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/260036017.jpg?k=25eacfdf1e5761c12b713c0182d0010664dc4eaca5624c04303e704ffd0ccaaa&o=&hp=1",
        link: "https://www.booking.com/hotel/de/ammarkt.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaDuIAQGYAQm4AQfIAQzYAQHoAQH4AQyIAgGoAgO4AvjfvKsGwAIB0gIkNzFmOTE2M2MtMzdjYi00ZTE2LTlkZWQtNTA3YjFlMTBlYzc32AIG4AIB&sid=21756af46f38b55084648a7dc35393d4&atlas_src=sr_iw_btn;checkin=2023-12-15;checkout=2023-12-17;dest_id=-1829149;dest_type=city;dist=0;group_adults=2;group_children=0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&"
    },
    C: {
        name: "Hotel Torbräu",
        address: "Tal 41, Altstadt-Lehel, 80331 Munich, Germany",
        position: { lat: 14.13562, lng: 11.58157 },
        ratings: 8.9,
        stars: 4,
        price: 756,
        available: true,
        type: "hotel",
        imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/190961235.jpg?k=89d515e28ffd870b67d9fcaf922cbe0fb5c6a82bd4a0f474324c90a45e331527&o=&hp=1",
        link: "https://www.booking.com/hotel/de/torbrau.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaDuIAQGYAQm4AQfIAQzYAQHoAQH4AQyIAgGoAgO4AvjfvKsGwAIB0gIkNzFmOTE2M2MtMzdjYi00ZTE2LTlkZWQtNTA3YjFlMTBlYzc32AIG4AIB&sid=21756af46f38b55084648a7dc35393d4&atlas_src=sr_iw_btn;checkin=2023-12-15;checkout=2023-12-17;dest_id=-1829149;dest_type=city;dist=0;group_adults=2;group_children=0;highlighted_blocks=6000403_309328442_2_2_0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&"
    },
    D: {
        name: "Eden Hotel Wolff",
        address: "Arnulfstrasse 4, Maxvorstadt, 80335 Munich, Germany",
        position: { lat: 48.14177, lng: 11.55918 },
        ratings: 8.2,
        stars: 4,
        price: 368,
        available: true,
        type: "hotel",
        imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/89402106.jpg?k=fed9e375e8bf03180c43c302833fcb22774d905e6522d473f98fc810407a4adc&o=&hp=1",
        link: "https://www.booking.com/hotel/de/edenwolff.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaDuIAQGYAQm4AQfIAQzYAQHoAQH4AQyIAgGoAgO4AvjfvKsGwAIB0gIkNzFmOTE2M2MtMzdjYi00ZTE2LTlkZWQtNTA3YjFlMTBlYzc32AIG4AIB&sid=21756af46f38b55084648a7dc35393d4&atlas_src=sr_iw_btn;checkin=2023-12-15;checkout=2023-12-17;dest_id=-1829149;dest_type=city;dist=0;group_adults=2;group_children=0;highlighted_blocks=6010202_360775772_1_2_0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&"
    },
    E: {
        name: "Ruby Lilly Hotel Munich",
        address: "Dachauer Straße 37, Maxvorstadt, 80335 Munich, Germany",
        position: { lat: 48.14625166776147, lng: 11.559179384730966 },
        ratings: 8.0,
        stars: 4,
        price: 0,
        available: false,
        type: "hotel",
        imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/92533880.jpg?k=853efb0330ec251976a45afe1216b1f7583a0a8923c8300a5b6daedd95cd03e8&o=&hp=1",
        link: "https://www.booking.com/hotel/de/ruby-lilly-munich.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaDuIAQGYAQm4AQfIAQzYAQHoAQH4AQyIAgGoAgO4AvjfvKsGwAIB0gIkNzFmOTE2M2MtMzdjYi00ZTE2LTlkZWQtNTA3YjFlMTBlYzc32AIG4AIB&sid=21756af46f38b55084648a7dc35393d4&atlas_src=sr_iw_btn;checkin=2023-12-15;checkout=2023-12-17;dest_id=-1829149;dest_type=city;dist=0;group_adults=2;group_children=0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&"
    },
    F: {
        name: "Gästehaus der Katholischen Akademie in Bayern",
        address: "23 Mandlstraße, Schwabing-Freimann, 80802 Munich, Germany",
        position: { lat: 48.160238577912594, lng: 11.591248082878275 },
        ratings: 8.9,
        stars: 2,
        price: 138,
        available: true,
        type: "apartment",
        imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/253934802.jpg?k=5206d74c4015094267f9e724172149585fe3226a7d323aa370977f60cc0e17a8&o=&hp=1",
        link: "https://www.booking.com/hotel/de/gastehaus-der-katholischen-akademie.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaDuIAQGYAQm4AQfIAQzYAQHoAQH4AQyIAgGoAgO4AvjfvKsGwAIB0gIkNzFmOTE2M2MtMzdjYi00ZTE2LTlkZWQtNTA3YjFlMTBlYzc32AIG4AIB&sid=21756af46f38b55084648a7dc35393d4&checkin=2023-12-14;checkout=2023-12-15;dest_id=-1829149;dest_type=city;dist=0;group_adults=8;group_children=0;hapos=1;hpos=1;no_rooms=3;req_adults=8;req_children=0;room1=A%2CA;room2=A%2CA%2CA;room3=A%2CA%2CA;sb_price_type=total;soh=1;sr_order=popularity;srepoch=1701786995;srpvid=273d66b234f200ff;type=total;ucfs=1&#no_availability_msg"
    },
    G: {
        name: "Hilton Munich Park",
        address: "Am Tucherpark 7, Schwabing-Freimann, 80538 Munich, Germany",
        position: { lat: 48.15289086519391, lng: 11.598074579031781 },
        ratings: 7.4,
        stars: 5,
        price: 387,
        available: true,
        type: "hotel",
        imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/484069355.jpg?k=228b8447e35ceb66c534ba9bd361426783a92e21e20a632935cd48313a9d47a0&o=&hp=1",
        link: "https://www.booking.com/hotel/de/hilton-munich-park.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaDuIAQGYAQm4AQfIAQzYAQHoAQH4AQyIAgGoAgO4AvjfvKsGwAIB0gIkNzFmOTE2M2MtMzdjYi00ZTE2LTlkZWQtNTA3YjFlMTBlYzc32AIG4AIB&sid=21756af46f38b55084648a7dc35393d4&atlas_src=sr_iw_btn;checkin=2023-12-15;checkout=2023-12-17;dest_id=-1829149;dest_type=city;dist=0;group_adults=2;group_children=0;highlighted_blocks=6395927_338448061_2_2_0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&"
    },
    H: {
        name: "JAMS Music Hotel Munich",
        address: "Stubenvollstraße 2, Au-Haidhausen, 81667 Munich, Germany",
        position: { lat: 48.13262690274588, lng: 11.591396267532565 },
        ratings: 8.4,
        stars: 4,
        price: 491,
        available: true,
        type: "hotel",
        imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/204162179.jpg?k=d621ad5429c5f2ea7be5274f4e8f2aeaf3c89e2ad1f1885b6c354643d4c18197&o=&hp=1",
        link: "https://www.booking.com/hotel/de/hotelpreysing.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaDuIAQGYAQm4AQfIAQzYAQHoAQH4AQyIAgGoAgO4AvjfvKsGwAIB0gIkNzFmOTE2M2MtMzdjYi00ZTE2LTlkZWQtNTA3YjFlMTBlYzc32AIG4AIB&sid=21756af46f38b55084648a7dc35393d4&atlas_src=sr_iw_btn;checkin=2023-12-15;checkout=2023-12-17;dest_id=-1829149;dest_type=city;dist=0;group_adults=2;group_children=0;highlighted_blocks=9813808_132673324_2_1_0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&"
    },
    I: {
        name: "Hotel Prinz",
        address: "Hochstrasse 45, Au-Haidhausen, 81541 Munich, Germany",
        position: { lat: 48.12467862121463, lng: 11.58609455252584 },
        ratings: 8.0,
        stars: 4,
        price: 353,
        available: true,
        type: "hotel",
        imageUrl: "https://cf.bstatic.com/images/hotel/max1024x768/413/413261202.jpg",
        link: "https://www.booking.com/hotel/de/prinz.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaDuIAQGYAQm4AQfIAQzYAQHoAQH4AQyIAgGoAgO4AvjfvKsGwAIB0gIkNzFmOTE2M2MtMzdjYi00ZTE2LTlkZWQtNTA3YjFlMTBlYzc32AIG4AIB&sid=21756af46f38b55084648a7dc35393d4&atlas_src=sr_iw_btn;checkin=2023-12-15;checkout=2023-12-17;dest_id=-1829149;dest_type=city;dist=0;group_adults=2;group_children=0;highlighted_blocks=6008012_91903819_2_1_0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&"
    },
    J: {
        name: "Lizz Hotel Munich",
        address: "Lindwurmstraße 24, Ludwigsvorstadt, 80337 Munich, Germany",
        position: { lat: 48.12915616422393, lng: 11.556050794515421 },
        ratings: 9.1,
        stars: 3,
        price: 228,
        available: true,
        type: "hotel",
        imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/218480311.jpg?k=98d05f950ede4a38fe19245bfbf193e448f458c087608aaff7340328e7d9ea57&o=&hp=1",
        link: "https://www.booking.com/hotel/de/lizz-munich.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaDuIAQGYAQm4AQfIAQzYAQHoAQH4AQyIAgGoAgO4AvjfvKsGwAIB0gIkNzFmOTE2M2MtMzdjYi00ZTE2LTlkZWQtNTA3YjFlMTBlYzc32AIG4AIB&sid=21756af46f38b55084648a7dc35393d4&atlas_src=sr_iw_btn;checkin=2023-12-15;checkout=2023-12-17;dest_id=-1829149;dest_type=city;dist=0;group_adults=2;group_children=0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&"
    },
    K: {
        name: "Bold Hotel München Zentrum",
        address: "Lindwurmstraße 70a, Ludwigsvorstadt, 80337 Munich, Germany",
        position: { lat: 48.126458691895856, lng: 11.551575798221673 },
        ratings: 8.0,
        stars: 3,
        price: 270,
        available: true,
        type: "hotel",
        imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/158906316.jpg?k=48a434a8ce0d8f529ba777d93503f3ada63feb0072ff6c89cca6b509020025b8&o=&hp=1",
        link: "https://www.booking.com/hotel/de/bold-hotel-munchen-zentrum.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaDuIAQGYAQm4AQfIAQzYAQHoAQH4AQyIAgGoAgO4AvjfvKsGwAIB0gIkNzFmOTE2M2MtMzdjYi00ZTE2LTlkZWQtNTA3YjFlMTBlYzc32AIG4AIB&sid=21756af46f38b55084648a7dc35393d4&atlas_src=sr_iw_btn;checkin=2023-12-15;checkout=2023-12-17;dest_id=-1829149;dest_type=city;dist=0;group_adults=2;group_children=0;highlighted_blocks=36246408_93114341_1_2_0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&"
    },
    L: {
        name: "ibis München City Nord",
        address: "Ungererstrasse 139, Schwabing-Freimann, 80805 Munich, Germany",
        position: { lat: 48.17545105965528, lng: 11.598272230560974 },
        ratings: 7.7,
        stars: 2,
        price: 167,
        available: true,
        type: "hotel",
        imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/251700235.jpg?k=6e5632d0f185d80aea0e6594bc97156f56ee55528db6c560afca1c515eec919f&o=&hp=1",
        link: "https://www.booking.com/hotel/de/ibis-munchen-nord.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaDuIAQGYAQm4AQfIAQzYAQHoAQH4AQyIAgGoAgO4AvjfvKsGwAIB0gIkNzFmOTE2M2MtMzdjYi00ZTE2LTlkZWQtNTA3YjFlMTBlYzc32AIG4AIB&sid=21756af46f38b55084648a7dc35393d4&atlas_src=sr_iw_btn;checkin=2023-12-15;checkout=2023-12-17;dest_id=-1829149;dest_type=city;dist=0;group_adults=2;group_children=0;highlighted_blocks=6430708_338443932_2_2_0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&"
    },
    M: {
        name: "Schwan Locke",
        address: "75 Landwehrstraße, Ludwigsvorstadt, 80336 Munich, Germany ",
        position: { lat: 48.136489770901875, lng: 11.55473888473055 },
        ratings: 8.7,
        stars: 4,
        price: 394,
        available: true,
        type: "apartment",
        imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/297777387.jpg?k=6f7e2266ebc5e0addc5f949e59ea3111d8b656141f618617dc1371f441ef6187&o=&hp=1",
        link: "https://www.booking.com/hotel/de/schwan-locke.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaDuIAQGYAQm4AQfIAQzYAQHoAQH4AQyIAgGoAgO4AvjfvKsGwAIB0gIkNzFmOTE2M2MtMzdjYi00ZTE2LTlkZWQtNTA3YjFlMTBlYzc32AIG4AIB&sid=21756af46f38b55084648a7dc35393d4&atlas_src=sr_iw_btn;checkin=2023-12-15;checkout=2023-12-17;dest_id=-1829149;dest_type=city;dist=0;group_adults=2;group_children=0;highlighted_blocks=713077401_298173196_2_0_0;nflt=ht_id%3D201;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&"
    },
    N: {
        name: "Spacious 4 Bedroom Apartment near City Center",
        address: "5 Taubenstraße, Au-Haidhausen, 81541 Munich, Germany",
        position: { lat: 48.12191399764074, lng: 11.579714854040795 },
        ratings: 8.7,
        stars: 4,
        price: 1075,
        available: true,
        type: "apartment",
        imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/457304643.jpg?k=cc2caa61b9ceafc6ae791a9536517fa000ab9bd37986e02db6fa85fcd9a45fc8&o=&hp=1",
        link: "https://www.booking.com/hotel/de/spacious-apartment-munchen.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaDuIAQGYAQm4AQfIAQzYAQHoAQH4AQyIAgGoAgO4AvjfvKsGwAIB0gIkNzFmOTE2M2MtMzdjYi00ZTE2LTlkZWQtNTA3YjFlMTBlYzc32AIG4AIB&sid=21756af46f38b55084648a7dc35393d4&atlas_src=sr_iw_btn;checkin=2023-12-15;checkout=2023-12-17;dest_id=-1829149;dest_type=city;dist=0;group_adults=2;group_children=0;highlighted_blocks=1003816101_373312037_8_0_0;nflt=ht_id%3D201;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&"
    },
    O: {
        name: "City Apartment Munich",
        address: "6 Oettingenstraße, Altstadt-Lehel, 80538 Munich, Germany",
        position: { lat: 48.14165997144354, lng: 11.591714682877608 },
        ratings: 6.1,
        stars: 3,
        price: 378,
        available: true,
        type: "apartment",
        imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/170327410.jpg?k=5dbbeb4215b80b038b0844118453102d04babae5018837f9d25b419f59c99c96&o=&hp=1",
        link: "https://www.booking.com/hotel/de/city-apartment-munich.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaDuIAQGYAQm4AQfIAQzYAQHoAQH4AQyIAgGoAgO4AvjfvKsGwAIB0gIkNzFmOTE2M2MtMzdjYi00ZTE2LTlkZWQtNTA3YjFlMTBlYzc32AIG4AIB&sid=21756af46f38b55084648a7dc35393d4&dest_id=-1829149&dest_type=city&nflt=ht_id%3D201%3Breview_score%3D60&room1=A%2CA&;group_adults=2;group_children=0;no_rooms=1;checkin=2023-12-15;checkout=2023-12-17;highlighted_blocks=414422402_126213272_2_0_0;atlas_src=sr_iw_btn;from_sr_map=1;from=searchresults;ucfs=1"
    },
    P: {
        name: "Ausbildungshotel St. Theresia",
        address: "Hanebergstraße 8 München Neuhausen-Gern, Neuhausen - Nymphenburg",
        position: { lat: 48.16248034202132, lng: 11.536493227059193 },
        ratings: 8.3,
        stars: 3,
        price: 0,
        available: false,
        type: "apartment",
        imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/182021068.jpg?k=d29e02210f860f882bc687d5f3f8024a09e11eb324df0eb4915799ed857a36d8&o=&hp=1",
        link: "https://www.booking.com/hotel/de/ausbildungshotel-st-theresia.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaDuIAQGYAQm4AQfIAQzYAQHoAQH4AQyIAgGoAgO4AvjfvKsGwAIB0gIkNzFmOTE2M2MtMzdjYi00ZTE2LTlkZWQtNTA3YjFlMTBlYzc32AIG4AIB&sid=21756af46f38b55084648a7dc35393d4&atlas_src=sr_iw_btn;checkin=2023-12-15;checkout=2023-12-17;dest_id=-1829149;dest_type=city;dist=0;group_adults=2;group_children=0;nflt=ht_id%3D201%3Breview_score%3D60;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&"
    },
    R: {
        name: "HApato",
        address: "Fallmerayerstrasse 22, Schwabing-West, 80796 Munich, Germany",
        position: { lat: 48.16237409869066, lng: 11.57208204055063 },
        ratings: 8.9,
        stars: 3,
        price: 0,
        available: false,
        type: "apartment",
        imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/478484908.jpg?k=0f7b861004a2d10e047254167f576721597a00d5f6027694c199a554c8ed91da&o=&hp=1",
        link: "https://www.booking.com/hotel/de/h-otello-fallmerayerstrasse.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaDuIAQGYAQm4AQfIAQzYAQHoAQH4AQyIAgGoAgO4AvjfvKsGwAIB0gIkNzFmOTE2M2MtMzdjYi00ZTE2LTlkZWQtNTA3YjFlMTBlYzc32AIG4AIB&sid=21756af46f38b55084648a7dc35393d4&dest_id=-1829149&dest_type=city&nflt=ht_id%3D201%3Breview_score%3D60&room1=A%2CA&;group_adults=2;group_children=0;no_rooms=1;checkin=2023-12-15;checkout=2023-12-17;atlas_src=sr_iw_btn;from_sr_map=1;from=searchresults;ucfs=1"
    },
    S: {
        name: "a&o München Hackerbrücke",
        address: "Arnulfstr. 102, Neuhausen - Nymphenburg, 80639 Munich, Germany",
        position: { lat: 48.1457584886604, lng: 11.541082572606152 },
        ratings: 6.7,
        stars: 2,
        price: 88,
        available: true,
        type: "hostel",
        imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/457991251.jpg?k=08a228cc1c73bc3842c55db085559025797442b818d63ff256ec430b6941032d&o=&hp=1",
        link: "https://www.booking.com/hotel/de/a-o-hostel-munchen.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaDuIAQGYAQm4AQfIAQzYAQHoAQH4AQyIAgGoAgO4AvjfvKsGwAIB0gIkNzFmOTE2M2MtMzdjYi00ZTE2LTlkZWQtNTA3YjFlMTBlYzc32AIG4AIB&sid=21756af46f38b55084648a7dc35393d4&dest_id=-1829149&dest_type=city&nflt=ht_id%3D203%3Breview_score%3D60&room1=A%2CA&;group_adults=2;group_children=0;no_rooms=1;checkin=2023-12-15;checkout=2023-12-17;highlighted_blocks=6421654_91460522_6_2_0;atlas_src=sr_iw_btn;from_sr_map=1;from=searchresults;ucfs=1"
    },
    T: {
        name: "CVJM Jugendhotel München",
        address: "Landwehrstraße 13, Ludwigsvorstadt, 80336 Munich, Germany",
        position: { lat: 48.13636377124762, lng: 11.56267901171357 },
        ratings: 8.7,
        stars: 3,
        price: 97,
        available: true,
        type: "hostel",
        imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/488298822.jpg?k=1a2311a1493718d95a4628038d992a7748173f5f26b72ec1d1cdbc3980a5f03a&o=&hp=1",
        link: "https://www.booking.com/hotel/de/cvjm-jugendgastehaus.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaDuIAQGYAQm4AQfIAQzYAQHoAQH4AQyIAgGoAgO4AvjfvKsGwAIB0gIkNzFmOTE2M2MtMzdjYi00ZTE2LTlkZWQtNTA3YjFlMTBlYzc32AIG4AIB&sid=21756af46f38b55084648a7dc35393d4&atlas_src=sr_iw_btn;checkin=2023-12-15;checkout=2023-12-17;dest_id=-1829149;dest_type=city;dist=0;group_adults=2;group_children=0;highlighted_blocks=308077603_374785257_1_1_0%2C308077601_374785257_1_1_0;nflt=ht_id%3D203%3Breview_score%3D60;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&"
    },
    U: {
        name: "Schwabinger Wahrheit by Geisel",
        address: "Hohenzollernstrasse 5, Schwabing-Freimann, 80801 Munich, Germany",
        position: { lat: 48.15956977435925, lng: 11.58419948291073 },
        ratings: 8.5,
        stars: 4,
        price: 470,
        available: true,
        type: "hotel",
        imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/157661847.jpg?k=70db290094bf08ab51500f133118132e7d4f323996e992e06910c3c7f166113b&o=&hp=1",
        link: "https://www.booking.com/hotel/de/cosmopolitan.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaDuIAQGYAQm4AQfIAQzYAQHoAQH4AQyIAgGoAgO4AvjfvKsGwAIB0gIkNzFmOTE2M2MtMzdjYi00ZTE2LTlkZWQtNTA3YjFlMTBlYzc32AIG4AIB&sid=21756af46f38b55084648a7dc35393d4&atlas_src=sr_iw_btn;checkin=2023-12-15;checkout=2023-12-17;dest_id=-1829149;dest_type=city;dist=0;group_adults=2;group_children=0;highlighted_blocks=6694012_380345323_2_2_0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&"
    },
    V: {
        name: "Artist Residence Schwabing",
        address: "23 Elisabethstrasse 4. Etage / Klingelschild: Art Signum GmbH / Kaufmann, Schwabing-West, 80796 Munich, Germany",
        position: { lat: 48.158771677699015, lng: 11.569394100110037 },
        ratings: 9.5,
        stars: 4,
        price: 434,
        available: true,
        type: "apartment",
        imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/95323028.jpg?k=ef4f9f8dd4d31f5f720012d900db41413c1a71043c98e40405ee87666244e7cd&o=&hp=1",
        link: "https://www.booking.com/hotel/de/artist-residence-schwabing.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaDuIAQGYAQm4AQfIAQzYAQHoAQH4AQyIAgGoAgO4AvjfvKsGwAIB0gIkNzFmOTE2M2MtMzdjYi00ZTE2LTlkZWQtNTA3YjFlMTBlYzc32AIG4AIB&sid=21756af46f38b55084648a7dc35393d4&atlas_src=sr_iw_btn;checkin=2023-12-15;checkout=2023-12-17;dest_id=-1829149;dest_type=city;dist=0;group_adults=2;group_children=0;highlighted_blocks=221533001_365391442_2_0_0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&"
    },
    Z: {
        name: "Appartement München Zentrum",
        address: "Neureuther Straße 18, Maxvorstadt, 80799 Munich, Germany",
        position: { lat: 48.15530974727436, lng: 11.571696764418151 },
        ratings: 6.4,
        stars: 3,
        price: 210,
        available: true,
        type: "apartment",
        imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/491546581.jpg?k=7daf077936bdbc7752ea011df5c85f32dc133d499aacba2f2a039c54f2d10cdc&o=&hp=1",
        link: "https://www.booking.com/hotel/de/appartement-munchen-zentrum.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaDuIAQGYAQm4AQfIAQzYAQHoAQH4AQyIAgGoAgO4AvjfvKsGwAIB0gIkNzFmOTE2M2MtMzdjYi00ZTE2LTlkZWQtNTA3YjFlMTBlYzc32AIG4AIB&sid=21756af46f38b55084648a7dc35393d4&atlas_src=sr_iw_btn;checkin=2023-12-15;checkout=2023-12-17;dest_id=-1829149;dest_type=city;dist=0;group_adults=2;group_children=0;highlighted_blocks=1075123501_380089001_2_0_0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&"
    }
}


// receives two colors as input and calculates the corresponding color based on the spectrum (min, max)
function lerpColor(color1, color2, t) {
    const hex = (c) => {
        const hex = c.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    const r = Math.floor(color1[0] + t * (color2[0] - color1[0]));
    const g = Math.floor(color1[1] + t * (color2[1] - color1[1]));
    const b = Math.floor(color1[2] + t * (color2[2] - color1[2]));

    return `#${hex(r)}${hex(g)}${hex(b)}`;
}


// return the background color of the marker based on the hotel price
function getPriceColor(price) {
    // if accommodation is not available (price == 0)
    if (price == 0) {
        return "grey"
    }

    const minPrice = 88;
    const maxPrice = 500; // Adjust the maximum price as needed
    const t = Math.min(1, Math.max(0, (price - minPrice) / (maxPrice - minPrice)));

    // Define the gradient colors (green to red)
    const color1 = [34, 139, 34]; // Forest Green
    const color2 = [255, 30, 0]; // Red-Orange

    return lerpColor(color1, color2, t);
}


// initializes map
async function initMap() {


    (g => { var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => { await (a = m.createElement("script")); e.set("libraries", [...r] + ""); for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q); a.src = `https://maps.${c}apis.com/maps/api/js?` + e; d[q] = f; a.onerror = () => h = n(Error(p + " could not load.")); a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a) })); d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)) })({
        key: process.env.MAPS_API_KEY,
        v: "weekly",
        // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
        // Add other bootstrap parameters as needed, using camel case.
    });

    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement, InfoWindow } = await google.maps.importLibrary("marker");
    const { HeatmapLayer } = await google.maps.importLibrary("visualization");

    // heatmap areas
    heatmapData = []
    for (const i in hotelData) {
        console.log(hotelData[i].position.lat)
        item = { location: new google.maps.LatLng(hotelData[i].position.lat, hotelData[i].position.lng), weight: hotelData[i].price / 200 }
        heatmapData.push(item)
    }

    // create map
    map = new Map(document.getElementById("map"), {
        center: munich,
        zoom: 13,
        mapId: process.env.MAP_ID
    });
    console.log("Map initialized")

    heatmap = new HeatmapLayer({
        map,
        data: heatmapData,
        dissipating: false
    })

    for (const key in hotelData) {
        colorPrice = getPriceColor(hotelData[key].price)

        // glyph is gold if hotel has 5 stars
        hotelData[key].stars == 5 ? colorStars = "gold" : colorStars = "white"

        if (hotelData[key].stars == 2) {
            collisionBehavior = "OPTIONAL_AND_HIDES_LOWER_PRIORITY"
            sizeStars = 0.8
        } else if (hotelData[key].stars == 3) {
            collisionBehavior = "OPTIONAL_AND_HIDES_LOWER_PRIORITY"
            sizeStars = 0.9
        } else if (hotelData[key].stars == 4) {
            collisionBehavior = "REQUIRED_AND_HIDES_OPTIONAL"
            sizeStars = 1.1
        } else {
            collisionBehavior = "REQUIRED"
            sizeStars = 1.25
        }

        const pinBackground = new PinElement({
            background: colorPrice,
            glyphColor: colorStars,
            borderColor: "transparent",
            scale: sizeStars
        });

        const marker = new google.maps.marker.AdvancedMarkerElement({
            map,
            position: hotelData[key].position,
            collisionBehavior: collisionBehavior,
            content: pinBackground.element
        });

        if (hotelData[key].available) {
            contentString = `
            <div style="display: flex; align-items: center;">
            <div style="flex: 1;">
                <img src="${hotelData[key].imageUrl}" alt="${hotelData[key].name}" width="100%">
            </div>
            <div style="flex: 1; padding-left: 10px;">
                <h5 style="margin: 0;">${hotelData[key].name}</h5>
                <p style="margin: 0;">Ratings: ${hotelData[key].ratings}</p>
                <p style="margin: 0;">Price: ${hotelData[key].price} €</p>
            </div>
            </div>
                `
        } else {
            contentString = `
            <div style="display: flex; align-items: center;">
            <div style="flex: 1;">
                <img src="${hotelData[key].imageUrl}" alt="${hotelData[key].name}" width="100%">
            </div>
            <div style="flex: 1; padding-left: 10px;">
                <h5 style="margin: 0;">${hotelData[key].name}</h5>
                <p style="margin: 0;">Ratings: ${hotelData[key].ratings}</p>
            </div>
            </div>
                `
        }

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 300
        })

        marker.addListener('click', () => {
            // Handle marker click (open info window, navigate to a page, etc.)
            console.log(`Marker for ${hotelData[key].name} clicked`);
            infowindow.open({
                map,
                anchor: marker
            })
        });

    }

    document.getElementById("toggle-heatmap").addEventListener("click", () => {
        heatmap.setMap(heatmap.getMap() ? null : map)
    })

}

initMap();
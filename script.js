// DATABASE

let allProducts = [
    {
        'Name': 'Noice B99',
        'type': 'Croptop',
        'color': 'Black',
        'id': 'ct1',
        'location': './img/CropTop/1.jpg',
        'oldPrice': 499,
        'newPrice': 299,
        'sizeAvail': ['0XS', 'S', 'M', 'L', '0XL', '0XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Savage',
        'type': 'Croptop',
        'color': 'Black',
        'id': 'ct2',
        'location': './img/CropTop/2.jpg',
        'oldPrice': 499,
        'newPrice': 299,
        'sizeAvail': ['XS', 'S', '0M', '0L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'yes'
    },
    {
        'Name': 'Not Today',
        'type': 'Croptop',
        'color': 'Grey',
        'id': 'ct3',
        'location': './img/CropTop/3.jpg',
        'oldPrice': 499,
        'newPrice': 299,
        'sizeAvail': ['XS', 'S', 'M', '0L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Blah',
        'type': 'Croptop',
        'color': 'Black',
        'id': 'ct4',
        'location': './img/CropTop/4.jpg',
        'oldPrice': 499,
        'newPrice': 299,
        'sizeAvail': ['XS', '0S', 'M', 'L', '0XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Strong Female Lead',
        'type': 'Croptop',
        'color': 'White',
        'id': 'ct5',
        'location': './img/CropTop/5.jpg',
        'oldPrice': 499,
        'newPrice': 299,
        'sizeAvail': ['0XS', 'S', 'M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Moodu',
        'type': 'Croptop',
        'color': 'Red',
        'id': 'ct6',
        'location': './img/CropTop/6.jpg',
        'oldPrice': 499,
        'newPrice': 299,
        'sizeAvail': ['0XS', 'S', 'M', '0L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'OCD',
        'type': 'Croptop',
        'color': 'Black',
        'id': 'ct7',
        'location': './img/CropTop/7.jpg',
        'oldPrice': 499,
        'newPrice': 299,
        'sizeAvail': ['XS', 'S', '0M', 'L', '0XL', '0XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Nap Queen',
        'type': 'Croptop',
        'color': 'White',
        'id': 'ct8',
        'location': './img/CropTop/8.jpg',
        'oldPrice': 499,
        'newPrice': 299,
        'sizeAvail': ['0XS', '0S', '0M', 'L', 'XL', '0XXL'],
        'newArrival': 'no',
        'BestSelling': 'yes'
    },
    {
        'Name': 'Influencer',
        'type': 'Croptop',
        'color': 'White',
        'id': 'ct9',
        'location': './img/CropTop/9.jpg',
        'oldPrice': 499,
        'newPrice': 299,
        'sizeAvail': ['XS', 'S', 'M', 'L', 'XL', '0XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Cool B99',
        'type': 'Full Sleeve',
        'color': 'Black',
        'id': 'fs1',
        'location': './img/FullSleeve/1.jpg',
        'oldPrice': 699,
        'newPrice': 589,
        'sizeAvail': ['0XS', 'S', 'M', '0L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Mani-ARR Life',
        'type': 'Full Sleeve',
        'color': 'Dark Blue',
        'id': 'fs2',
        'location': './img/FullSleeve/2.jpg',
        'oldPrice': 699,
        'newPrice': 589,
        'sizeAvail': ['0XS', 'S', '0M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'yes'
    },
    {
        'Name': 'Money Heist',
        'type': 'Full Sleeve',
        'color': 'Black',
        'id': 'fs3',
        'location': './img/FullSleeve/3.jpg',
        'oldPrice': 699,
        'newPrice': 589,
        'sizeAvail': ['0XS', '0S', 'M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Moodu',
        'type': 'Full Sleeve',
        'color': 'Red',
        'id': 'fs4',
        'location': './img/FullSleeve/4.jpg',
        'oldPrice': 699,
        'newPrice': 589,
        'sizeAvail': ['0XS', 'S', 'M', '0L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Morattu Single',
        'type': 'Full Sleeve',
        'color': 'Black',
        'id': 'fs5',
        'location': './img/FullSleeve/5.jpg',
        'oldPrice': 699,
        'newPrice': 589,
        'sizeAvail': ['XS', '0S', '0M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Valimai-Quote',
        'type': 'Full Sleeve',
        'color': 'Green',
        'id': 'fs7',
        'location': './img/FullSleeve/7.jpg',
        'oldPrice': 699,
        'newPrice': 589,
        'sizeAvail': ['0XS', 'S', 'M', 'L', 'XL', 'XXL'],
        'newArrival': 'yes',
        'BestSelling': 'no'
    },
    {
        'Name': 'OCD',
        'type': 'Full Sleeve',
        'color': 'Black',
        'id': 'fs8',
        'location': './img/FullSleeve/8.jpg',
        'oldPrice': 699,
        'newPrice': 589,
        'sizeAvail': ['XS', 'S', '0M', 'L', '0XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Positivitea',
        'type': 'Full Sleeve',
        'color': 'White',
        'id': 'fs9',
        'location': './img/FullSleeve/9.jpg',
        'oldPrice': 699,
        'newPrice': 589,
        'sizeAvail': ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Kickass',
        'type': 'Full Sleeve',
        'color': 'Green',
        'id': 'fs10',
        'location': './img/FullSleeve/10.jpg',
        'oldPrice': 699,
        'newPrice': 589,
        'sizeAvail': ['0XS', 'S', 'M', '0L', 'XL', '0XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'I Love AK',
        'type': 'Full Sleeve',
        'color': 'Black',
        'id': 'fs11',
        'location': './img/FullSleeve/11.jpg',
        'oldPrice': 699,
        'newPrice': 589,
        'sizeAvail': ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Idhu Valiba Vayasu',
        'type': 'Full Sleeve',
        'color': 'Dark Blue',
        'id': 'fs12',
        'location': './img/FullSleeve/12.jpg',
        'oldPrice': 699,
        'newPrice': 589,
        'sizeAvail': ['0XS', '0S', 'M', 'L', 'XL', '0XXL'],
        'newArrival': 'no',
        'BestSelling': 'yes'
    },
    {
        'Name': 'Rise Again',
        'type': 'Full Sleeve',
        'color': 'Black',
        'id': 'fs13',
        'location': './img/FullSleeve/13.jpg',
        'oldPrice': 699,
        'newPrice': 589,
        'sizeAvail': ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Believe',
        'type': 'Full Sleeve',
        'color': 'Dark Blue',
        'id': 'fs14',
        'location': './img/FullSleeve/14.jpg',
        'oldPrice': 699,
        'newPrice': 589,
        'sizeAvail': ['0XS', 'S', '0M', 'L', '0XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Hmm.',
        'type': 'Full Sleeve',
        'color': 'Black',
        'id': 'fs15',
        'location': './img/FullSleeve/15.jpg',
        'oldPrice': 699,
        'newPrice': 589,
        'sizeAvail': ['XS', 'S', '0M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Quit Game',
        'type': 'Full Sleeve',
        'color': 'Dark Blue',
        'id': 'fs16',
        'location': './img/FullSleeve/16.jpg',
        'oldPrice': 699,
        'newPrice': 589,
        'sizeAvail': ['XS', '0S', 'M', 'L', 'XL', '0XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Get It Done',
        'type': 'Full Sleeve',
        'color': 'Maroon',
        'id': 'fs17',
        'location': './img/FullSleeve/17.jpg',
        'oldPrice': 699,
        'newPrice': 589,
        'sizeAvail': ['XS', 'S', 'M', '0L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Rowdy Baby',
        'type': 'Hoodie',
        'color': 'Red',
        'id': 'h1',
        'location': './img/Hoodie/1.jpg',
        'oldPrice': 799,
        'newPrice': 599,
        'sizeAvail': ['0XS', 'S', 'M', '0L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Mani-ARR Life',
        'type': 'Hoodie',
        'color': 'Dark Blue',
        'id': 'h2',
        'location': './img/Hoodie/2.jpg',
        'oldPrice': 799,
        'newPrice': 599,
        'sizeAvail': ['XS', 'S', 'M', 'L', '0XL', '0XXL'],
        'newArrival': 'no',
        'BestSelling': 'yes'
    },
    {
        'Name': 'Game Over',
        'type': 'Hoodie',
        'color': 'Dark Blue',
        'id': 'h3',
        'location': './img/Hoodie/3.jpg',
        'oldPrice': 799,
        'newPrice': 599,
        'sizeAvail': ['XS', '0S', 'M', 'L', 'XL', '0XXL'],
        'newArrival': 'yes',
        'BestSelling': 'no'
    },
    {
        'Name': '90s Inside',
        'type': 'Hoodie',
        'color': 'Black',
        'id': 'h4',
        'location': './img/Hoodie/4.jpg',
        'oldPrice': 799,
        'newPrice': 599,
        'sizeAvail': ['XS', 'S', 'M', 'L', '0XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'yes'
    },
    {
        'Name': 'Yuvanism',
        'type': 'Hoodie',
        'color': 'Dark Blue',
        'id': 'h5',
        'location': './img/Hoodie/5.jpg',
        'oldPrice': 799,
        'newPrice': 599,
        'sizeAvail': ['XS', 'S', '0M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'ARR',
        'type': 'Hoodie',
        'color': 'White',
        'id': 'h6',
        'location': './img/Hoodie/6.jpg',
        'oldPrice': 799,
        'newPrice': 599,
        'sizeAvail': ['0XS', 'S', '0M', 'L', 'XL', 'XXL'],
        'newArrival': 'yes',
        'BestSelling': 'no'
    },
    {
        'Name': 'We are the Boys-u',
        'type': 'Hoodie',
        'color': 'Red',
        'id': 'h7',
        'location': './img/Hoodie/7.jpg',
        'oldPrice': 799,
        'newPrice': 599,
        'sizeAvail': ['XS', 'S', '0M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Gurunadha',
        'type': 'Hoodie',
        'color': 'Black',
        'id': 'h8',
        'location': './img/Hoodie/8.jpg',
        'oldPrice': 799,
        'newPrice': 599,
        'sizeAvail': ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Codeman',
        'type': 'Hoodie',
        'color': 'Black',
        'id': 'h9',
        'location': './img/Hoodie/9.jpg',
        'oldPrice': 799,
        'newPrice': 599,
        'sizeAvail': ['XS', 'S', '0M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'True Story',
        'type': 'Hoodie',
        'color': 'Black',
        'id': 'h10',
        'location': './img/Hoodie/10.jpg',
        'oldPrice': 799,
        'newPrice': 599,
        'sizeAvail': ['XS', 'S', '0M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Thalaivar',
        'type': 'Hoodie',
        'color': 'Black',
        'id': 'h11',
        'location': './img/Hoodie/11.jpg',
        'oldPrice': 799,
        'newPrice': 599,
        'sizeAvail': ['XS', 'S', 'M', 'L', '0XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Introvert Alert',
        'type': 'Hoodie',
        'color': 'Black',
        'id': 'h12',
        'location': './img/Hoodie/12.jpg',
        'oldPrice': 799,
        'newPrice': 599,
        'sizeAvail': ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Morattu Single',
        'type': 'Hoodie',
        'color': 'Black',
        'id': 'h13',
        'location': './img/Hoodie/13.jpg',
        'oldPrice': 799,
        'newPrice': 599,
        'sizeAvail': ['XS', 'S', 'M', 'L', '0XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Spoiler Alert',
        'type': 'Hoodie',
        'color': 'Red',
        'id': 'h14',
        'location': './img/Hoodie/14.jpg',
        'oldPrice': 799,
        'newPrice': 599,
        'sizeAvail': ['XS', 'S', 'M', 'L', 'XL', '0XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Wasted',
        'type': 'Hoodie',
        'color': 'Black',
        'id': 'h15',
        'location': './img/Hoodie/15.jpg',
        'oldPrice': 799,
        'newPrice': 599,
        'sizeAvail': ['XS', 'S', 'M', 'L', '0XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'One Who Codes',
        'type': 'Hoodie',
        'color': 'Black',
        'id': 'h16',
        'location': './img/Hoodie/16.jpg',
        'oldPrice': 799,
        'newPrice': 599,
        'sizeAvail': ['0XS', 'S', 'M', 'L', 'XL', '0XXL'],
        'newArrival': 'no',
        'BestSelling': 'yes'
    },
    {
        'Name': 'Black',
        'type': 'Solid T-Shirt',
        'color': 'Black',
        'id': 'st1',
        'location': './img/SolidTshirt/1.jpg',
        'oldPrice': 399,
        'newPrice': 259,
        'sizeAvail': ['0XS', 'S', 'M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Smoke Grey',
        'type': 'Solid T-Shirt',
        'color': 'Grey',
        'id': 'st2',
        'location': './img/SolidTshirt/2.jpg',
        'oldPrice': 399,
        'newPrice': 259,
        'sizeAvail': ['XS', 'S', '0M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'yes'
    },
    {
        'Name': 'Red',
        'type': 'Solid T-Shirt',
        'color': 'Red',
        'id': 'st3',
        'location': './img/SolidTshirt/3.jpg',
        'oldPrice': 399,
        'newPrice': 259,
        'sizeAvail': ['XS', '0S', '0M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Yellow',
        'type': 'Solid T-Shirt',
        'color': 'Yellow',
        'id': 'st4',
        'location': './img/SolidTshirt/4.jpg',
        'oldPrice': 399,
        'newPrice': 259,
        'sizeAvail': ['XS', 'S', 'M', 'L', 'XL', '0XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Dark Blue',
        'type': 'Solid T-Shirt',
        'color': 'Dark Blue',
        'id': 'st5',
        'location': './img/SolidTshirt/5.jpg',
        'oldPrice': 399,
        'newPrice': 259,
        'sizeAvail': ['XS', 'S', 'M', 'L', 'XL', '0XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Golden Brown',
        'type': 'Solid T-Shirt',
        'color': 'Golden Brown',
        'id': 'st6',
        'location': './img/SolidTshirt/6.jpg',
        'oldPrice': 399,
        'newPrice': 259,
        'sizeAvail': ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Grey-Black-White Combo',
        'type': 'Solid T-Shirt',
        'color': 'Grey, Black, White',
        'id': 'st7',
        'location': './img/SolidTshirt/7.jpg',
        'oldPrice': 1199,
        'newPrice': 859,
        'sizeAvail': ['0XS', '0S', 'M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Purple-Black-Red Combo',
        'type': 'Solid T-Shirt',
        'color': 'Purple, Black, Red',
        'id': 'st8',
        'location': './img/SolidTshirt/8.jpg',
        'oldPrice': 1199,
        'newPrice': 859,
        'sizeAvail': ['XS', 'S', '0M', '0L', '0XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'No Guts No Glory',
        'type': 'Sweat Shirt',
        'color': 'Black',
        'id': 'ss1',
        'location': './img/SweatShirt/1.jpg',
        'oldPrice': 699,
        'newPrice': 599,
        'sizeAvail': ['0XS', 'S', 'M', '0L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Keep Sleeping',
        'type': 'Sweat Shirt',
        'color': 'Yellow',
        'id': 'ss2',
        'location': './img/SweatShirt/2.jpg',
        'oldPrice': 699,
        'newPrice': 599,
        'sizeAvail': ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Quit Game',
        'type': 'Sweat Shirt',
        'color': 'Dark Blue',
        'id': 'ss3',
        'location': './img/SweatShirt/3.jpg',
        'oldPrice': 699,
        'newPrice': 599,
        'sizeAvail': ['XS', 'S', 'M', 'L', '0XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Cinema is Life',
        'type': 'Sweat Shirt',
        'color': 'Black',
        'id': 'ss4',
        'location': './img/SweatShirt/4.jpg',
        'oldPrice': 699,
        'newPrice': 599,
        'sizeAvail': ['XS', 'S', 'M', '0L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Empathy',
        'type': 'Sweat Shirt',
        'color': 'Dark Blue',
        'id': 'ss5',
        'location': './img/SweatShirt/5.jpg',
        'oldPrice': 699,
        'newPrice': 599,
        'sizeAvail': ['XS', 'S', 'M', 'L', '0XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Dont Quit',
        'type': 'Sweat Shirt',
        'color': 'Black',
        'id': 'ss6',
        'location': './img/SweatShirt/6.jpg',
        'oldPrice': 699,
        'newPrice': 599,
        'sizeAvail': ['XS', 'S', '0M', '0L', 'XL', 'XXL'],
        'newArrival': 'yes',
        'BestSelling': 'no'
    },
    {
        'Name': 'Plans Have Backups',
        'type': 'Sweat Shirt',
        'color': 'Dark Blue',
        'id': 'ss7',
        'location': './img/SweatShirt/7.jpg',
        'oldPrice': 699,
        'newPrice': 599,
        'sizeAvail': ['0XS', '0S', 'M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Find it',
        'type': 'Sweat Shirt',
        'color': 'Black',
        'id': 'ss8',
        'location': './img/SweatShirt/8.jpg',
        'oldPrice': 699,
        'newPrice': 599,
        'sizeAvail': ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'ThalaivARR',
        'type': 'Sweat Shirt',
        'color': 'Dark Blue',
        'id': 'ss9',
        'location': './img/SweatShirt/9.jpg',
        'oldPrice': 699,
        'newPrice': 599,
        'sizeAvail': ['XS', 'S', 'M', 'L', '0XL', '0XXL'],
        'newArrival': 'yes',
        'BestSelling': 'no'
    },
    {
        'Name': 'Cinema is Life',
        'type': 'T-Shirt',
        'color': 'Black',
        'id': 't1',
        'location': './img/Tshirt/1.jpg',
        'oldPrice': 499,
        'newPrice': 349,
        'sizeAvail': ['0XS', 'S', 'M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Don Setting-u',
        'type': 'T-Shirt',
        'color': 'Maroon',
        'id': 't2',
        'location': './img/Tshirt/2.jpg',
        'oldPrice': 499,
        'newPrice': 349,
        'sizeAvail': ['XS', 'S', 'M', 'L', '0XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Amukku Dumukku',
        'type': 'T-Shirt',
        'color': 'Red',
        'id': 't3',
        'location': './img/Tshirt/3.jpg',
        'oldPrice': 499,
        'newPrice': 349,
        'sizeAvail': ['XS', 'S', 'M', '0L', '0XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Eat Sleep Repeat',
        'type': 'T-Shirt',
        'color': 'Black',
        'id': 't4',
        'location': './img/Tshirt/4.jpg',
        'oldPrice': 499,
        'newPrice': 349,
        'sizeAvail': ['XS', 'S', 'M', '0L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Ghost',
        'type': 'T-Shirt',
        'color': 'Black',
        'id': 't5',
        'location': './img/Tshirt/5.jpg',
        'oldPrice': 499,
        'newPrice': 349,
        'sizeAvail': ['XS', 'S', '0M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'LCU',
        'type': 'T-Shirt',
        'color': 'Black',
        'id': 't6',
        'location': './img/Tshirt/6.jpg',
        'oldPrice': 499,
        'newPrice': 349,
        'sizeAvail': ['XS', 'S', '0M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Good Vibes Only',
        'type': 'T-Shirt',
        'color': 'White',
        'id': 't7',
        'location': './img/Tshirt/7.jpg',
        'oldPrice': 499,
        'newPrice': 349,
        'sizeAvail': ['XS', 'S', '0M', 'L', 'XL', 'XXL'],
        'newArrival': 'yes',
        'BestSelling': 'no'
    },
    {
        'Name': 'Donut',
        'type': 'T-Shirt',
        'color': 'Purple',
        'id': 't8',
        'location': './img/Tshirt/8.jpg',
        'oldPrice': 499,
        'newPrice': 349,
        'sizeAvail': ['XS', '0S', '0M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Let It Be',
        'type': 'T-Shirt',
        'color': 'Purple',
        'id': 't10',
        'location': './img/Tshirt/10.jpg',
        'oldPrice': 499,
        'newPrice': 349,
        'sizeAvail': ['XS', '0S', 'M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Code Word Accepted',
        'type': 'T-Shirt',
        'color': 'Black',
        'id': 't11',
        'location': './img/Tshirt/11.jpg',
        'oldPrice': 499,
        'newPrice': 349,
        'sizeAvail': ['0XS', 'S', 'M', '0L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Ghilli Da!',
        'type': 'T-Shirt',
        'color': 'Orange',
        'id': 't12',
        'location': './img/Tshirt/12.jpg',
        'oldPrice': 499,
        'newPrice': 349,
        'sizeAvail': ['XS', 'S', 'M', 'L', 'XL', '0XXL'],
        'newArrival': 'no',
        'BestSelling': 'yes'
    },
    {
        'Name': 'Hmm.',
        'type': 'T-Shirt',
        'color': 'Black',
        'id': 't13',
        'location': './img/Tshirt/13.jpg',
        'oldPrice': 499,
        'newPrice': 349,
        'sizeAvail': ['XS', 'S', 'M', 'L', 'XL', '0XXL'],
        'newArrival': 'yes',
        'BestSelling': 'no'
    },
    {
        'Name': 'Kulichitu Varen',
        'type': 'T-Shirt',
        'color': 'Yellow',
        'id': 't14',
        'location': './img/Tshirt/14.jpg',
        'oldPrice': 499,
        'newPrice': 349,
        'sizeAvail': ['0XS', 'S', 'M', 'L', 'XL', 'XXL'],
        'newArrival': 'yes',
        'BestSelling': 'no'
    },
    {
        'Name': 'Beast-Quote',
        'type': 'T-Shirt',
        'color': 'Dark Blue',
        'id': 't15',
        'location': './img/Tshirt/15.jpg',
        'oldPrice': 499,
        'newPrice': 349,
        'sizeAvail': ['XS', '0S', 'M', 'L', 'XL', '0XXL'],
        'newArrival': 'no',
        'BestSelling': 'yes'
    },
    {
        'Name': 'Adheeraa',
        'type': 'T-Shirt',
        'color': 'Black',
        'id': 't16',
        'location': './img/Tshirt/16.jpg',
        'oldPrice': 499,
        'newPrice': 349,
        'sizeAvail': ['0XS', 'S', 'M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Thunivu-Quote',
        'type': 'T-Shirt',
        'color': 'Black',
        'id': 't17',
        'location': './img/Tshirt/17.jpg',
        'oldPrice': 499,
        'newPrice': 349,
        'sizeAvail': ['XS', 'S', '0M', 'L', '0XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'yes'
    },
    {
        'Name': 'Last Bench',
        'type': 'T-Shirt',
        'color': 'Black',
        'id': 't18',
        'location': './img/Tshirt/18.jpg',
        'oldPrice': 499,
        'newPrice': 349,
        'sizeAvail': ['XS', '0S', 'M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'ThalaivARR',
        'type': 'T-Shirt',
        'color': 'Dark Blue',
        'id': 't19',
        'location': './img/Tshirt/19.jpg',
        'oldPrice': 499,
        'newPrice': 349,
        'sizeAvail': ['XS', 'S', '0M', '0L', '0XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'yes'
    },
    {
        'Name': 'Thug Life King-u',
        'type': 'T-Shirt',
        'color': 'Yellow',
        'id': 't20',
        'location': './img/Tshirt/20.jpg',
        'oldPrice': 499,
        'newPrice': 349,
        'sizeAvail': ['XS', 'S', 'M', '0L', '0XL', '0XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'You Got This',
        'type': 'T-Shirt',
        'color': 'Yellow',
        'id': 't21',
        'location': './img/Tshirt/21.jpg',
        'oldPrice': 499,
        'newPrice': 349,
        'sizeAvail': ['0XS', '0S', 'M', 'L', 'XL', 'XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    },
    {
        'Name': 'Naruto-Akatski',
        'type': 'T-Shirt',
        'color': 'Black',
        'id': 't22',
        'location': './img/Tshirt/22.jpg',
        'oldPrice': 499,
        'newPrice': 349,
        'sizeAvail': ['0XS', '0S', 'M', 'L', 'XL', '0XXL'],
        'newArrival': 'no',
        'BestSelling': 'no'
    }
]

let shopPgProductContainer = document.getElementById('shopPgProductContainer');
var ProductContainer = document.getElementById('ProductContainer')
let previousPageId ="1-li";
let previousPageNo =1;
let noOfData = allProducts.length;
let row =12;
let ul = document.getElementById('ulTag');

////////////////////////////////////////////////////////////////// Pagination  ///////////////////////////////////////////////////////////

// creating the page button

try{
    
    function createPg() {
      let pgReq = Math.ceil(noOfData / row);
    
      //previous
      var li = document.createElement("li");
      li.classList.add('page-item','disabled');
      li.setAttribute('id', 'previous-li');
    
      var aTag = document.createElement('a');
      aTag.innerHTML = '&laquo; Prev';
      aTag.classList.add('page-link');
      aTag.setAttribute('href', '#');
      aTag.setAttribute('id', 'previous');
      aTag.setAttribute('onclick', 'pageNoclicked(event)');
      li.append(aTag);
      ul.append(li);
    
      //page no
      for (let i = 1; i <= pgReq; i++) {
        var li = document.createElement("li");
        if(i==1)
        li.classList.add('active');
        li.classList.add('page-item');
        li.setAttribute('id', i + '-li');
    
        var aTag = document.createElement('a');
        aTag.innerText = i;
        aTag.classList.add('page-link');
        aTag.setAttribute('id', i);
        aTag.setAttribute('href','#');
        aTag.setAttribute('onclick', 'pageNoclicked(event)');
        li.append(aTag);
        ul.append(li);
      }
 
      //next
      var li = document.createElement("li");
      li.classList.add('page-item');
      li.setAttribute('id', 'next-li');
    
      var aTag = document.createElement('a');
      aTag.innerHTML = 'Next &raquo;';
      aTag.classList.add('page-link');
      aTag.setAttribute('href', '#');
      aTag.setAttribute('id', 'next');
      aTag.setAttribute('onclick', 'pageNoclicked(event)');
      li.append(aTag);
      ul.append(li);
    }
    
createPg();
}
catch(err){
    console.log(err)
}

//trimming the date per page

function trimData(pageNo){
  let start =  (pageNo -1)*row
  return allProducts.slice(start,start+row)
}


// actions when clicking page button


function pageNoclicked(event) 
{
  // console.log(event);

  // disabling-enabling prev,first,next,last btns
  if(event.target.id=='1' || event.target.id=='first' ){
    document.getElementById('previous-li').classList.add('disabled')
  }
  else{
    document.getElementById('previous-li').classList.remove('disabled')
  }
  if(event.target.id==Math.ceil(noOfData/row) || event.target.id=='last'){
    document.getElementById('next-li').classList.add('disabled')
  }
  else{
    document.getElementById('next-li').classList.remove('disabled')
  }

  // funtion of prev button
  if(event.target.id=='previous')
  {
    if(parseInt(previousPageNo)-1<1)
      createProductPg(parseInt(previousPageNo));
    else
    {
      createProductPg(parseInt(previousPageNo)-1);
      previousPageNo--;
    }
    changeActiveClr(event)
  }

  // function of next button
  else if(event.target.id=='next')
  {
    if((parseInt(previousPageNo)+1)>Math.ceil(noOfData/row))
      createProductPg(parseInt(previousPageNo));
    else
    {
      createProductPg(parseInt(previousPageNo)+1);
      previousPageNo++;
    }
    changeActiveClr(event)
  }

  // function of other page buttons
  else
  {
    previousPageNo = event.target.innerText;
    createProductPg(event.target.innerText);
    changeActiveClr(event)
  }

}

// Change the color of active page button

function changeActiveClr(event)
{
  if(event.target.parentElement.id=='previous-li' || event.target.parentElement.id=='next-li')
  {
      document.getElementById(event.target.parentElement.id).classList.add('active');
      setTimeout(()=>document.getElementById(event.target.parentElement.id).classList.remove('active'),100);

      var idTemp = event.target.parentElement.id
      let id = (previousPageNo) + idTemp.slice(idTemp.indexOf('-'));
      document.getElementById(id).classList.add('active');

      // disabling-enabling prev,next btns
      if(id=='1-li'){
        document.getElementById('previous-li').classList.add('disabled')
      }
      else{
        document.getElementById('previous-li').classList.remove('disabled')
      }
      if(id==Math.ceil(noOfData/row)+'-li'){
        document.getElementById('next-li').classList.add('disabled')
      }
      else{
        document.getElementById('next-li').classList.remove('disabled')}
      
      // removing active clr from previously active button
      let idToRemove1 = (previousPageNo-1) + idTemp.slice(idTemp.indexOf('-'));
      let idToRemove2 = (previousPageNo+1) + idTemp.slice(idTemp.indexOf('-'));
      if(event.target.parentElement.id=='previous-li')
        document.getElementById(idToRemove2).classList.remove("active");
      else
        document.getElementById(idToRemove1).classList.remove("active");

      previousPageId =id;
    }

  else
  {
    var idTemp = event.target.parentElement.id
    let id = event.target.id + idTemp.slice(idTemp.indexOf('-'));
    document.getElementById(id).classList.add('active');
    if(id!= previousPageId)
      document.getElementById(previousPageId).classList.remove("active");
    previousPageId =id;
  }
}


///////////////////////////////////////////////////////////////// Products ////////////////////////////////////////////////////////

// Creating Shop Page with ALL PRODUCTS 

function createProductPg(page) {
    let trimmedData = trimData(page)
    shopPgProductContainer.innerHTML = '';
    for(let product of trimmedData){
        createProduct(product,shopPgProductContainer);
    }
    document.getElementById('shopTitle').innerText = 'ALL PRODUCTS';
}

// Creating new arrival cards in homepage


function createNewArr() {
    for(let product of allProducts){
            if(product.newArrival=='yes')
                createProduct(product,ProductContainer);
    }
}

// Creating Featured products in single pro page

function createFeaturedPro() {
    for(let product of allProducts){
            if(product.BestSelling=='yes')
                createProduct(product,ProductContainer);
    }
}



// Opening Catagory
function openCatagoryType(type){
    if(ul)
        ul.innerHTML='';
    shopPgProductContainer.innerHTML='';
    document.getElementById('shopTitle').innerText = type.toUpperCase();
    for(let product of allProducts){
        if(product.type == type)
            createProduct(product,shopPgProductContainer);
    }
}
function openCatagoryColor(color){
    if(ul)
        ul.innerHTML='';
    shopPgProductContainer.innerHTML='';
    document.getElementById('shopTitle').innerText = "Color "+color.toUpperCase();
    for(let product of allProducts){
        if(product.color == color)
            createProduct(product,shopPgProductContainer);
    }
}
function openCatagoryTag(tag){
    if(ul)
        ul.innerHTML='';
    shopPgProductContainer.innerHTML='';
    document.getElementById('shopTitle').innerText = tag.toUpperCase();
    for(let product of allProducts){
        if(tag=='New Arrival'){
            if(product.newArrival=='yes')
                createProduct(product,shopPgProductContainer);
        }
        if(tag=='Best Selling'){
            if(product.BestSelling=='yes')
                createProduct(product,shopPgProductContainer);
        }
    }
}


// Creating Product Card
function createProduct(product,container){
    let newProduct = document.createElement('div');
    newProduct.classList.add('newProduct');
    newProduct.setAttribute('id',product.id);
    newProduct.setAttribute('onclick',"openSpPage(event)");
    newProduct.innerHTML = `
    <span id='n/b${product.id}'></span>
    <img src="${product.location}" alt="" id="1${product.id}-2">
    <div class="description col align-items-start pt-3" id="1${product.id}-3">
        <p id="1${product.id}-1">${product.type}</p>
        <h5 id="1${product.id}-2">${product.Name +'  ' +product.type}</h5>
        <b>Rs.<span class="oldPrice" id="1${product.id}-4">${product.oldPrice}</span> </b><span class="newPrice" id="1${product.id}-5">${product.newPrice}</span>
        <i class="fa-solid fa-cart-shopping cartBtn" id="cartBtn+${product.id}" onclick="openSizeCard(event)"></i>
    </div>
    <div id="SizeCard+${product.id}" class="sizeCard">
        <div class="btn-group mt-3" role="group" aria-label="Basic example" id="+${product.id}">
            <button type="button" class="btn btn-outline-Dark btn-sm sizeBtn" id="XS${product.id}">XS</button>
            <button type="button" class="btn btn-outline-Dark btn-sm sizeBtn" id="S${product.id}">S</button>
            <button type="button" class="btn btn-outline-Dark btn-sm sizeBtn" id="M${product.id}">M</button>
            <button type="button" class="btn btn-outline-Dark btn-sm sizeBtn" id="L${product.id}">L</button>
            <button type="button" class="btn btn-outline-Dark btn-sm sizeBtn" id="XL${product.id}">XL</button>
            <button type="button" class="btn btn-outline-Dark btn-sm sizeBtn" id="XXL${product.id}">XXL</button>
        </div>
        <button class="addToCart" id="z${product.id}" onclick="addToCart(event)">Add to cart</button>
    </div>
  </div> `

  container.append(newProduct)
    if(product.newArrival=='yes'){
        document.getElementById('n/b'+product.id).classList.add('newCard');
        document.getElementById('n/b'+product.id).innerText = 'New';

    }
    if(product.BestSelling=='yes'){
        document.getElementById('n/b'+product.id).classList.add('bestCard')
        document.getElementById('n/b'+product.id).innerText = 'Best Selling';
    }
    for(let available of product.sizeAvail){
        if(available[0]=="0")
            document.getElementById(available.slice(1)+product.id).disabled = 'true';
    }
}



// Showing and hidding Size Card

let previousId = '';
function openSizeCard(event) {
    let id = event.target.id;
    document.getElementById(id).style.display = 'none'
    document.getElementById('SizeCard' + id.slice(id.indexOf('+'))).style.display = 'inline-block'

    if (previousId != '') {
        document.getElementById(previousId).style.display = 'inline-block'
        document.getElementById('SizeCard' + previousId.slice(previousId.indexOf('+'))).style.display = 'none'
    }
    previousId = event.target.id
}

  
// Opening Single product page
 function openSpPage(event){
    console.log(event.target.id[0],event.target.parentElement.id[0])
    if(event.target.id[0]!='c'&& event.target.id[0]!='z' && event.target.parentElement.id[0]!='+'){
         let changingPart = document.getElementById('changingPart');
         for(let product of allProducts){
             if(event.target.parentElement.id==product.id ||event.target.id.slice(1,event.target.id.indexOf('-'))==product.id ){
                 window.scrollTo(0, 0)
                 changingPart.innerHTML=''
                 changingPart.innerHTML = `
                         <header>
                             <a href="./index.html"><img src="./img/Logo.png" alt=""></a>
                             <div class="navi">
                                 <li><a href="./index.html">Home</a></li>
                                 <li><a href="./shop.html" class="activePg" id="shopNavBtn">Shop</a></li>
                                 <li><a href="./account.html">Account</a></li>
                                 <li><a href="./contact.html">Contact</a></li>
                                 <li><a href="./cart.html"><i class="fa-solid fa-cart-shopping"></i></a></li>
                             </div>
                         </header>
                         <div class="singleProContainer">
                         <img src="${product.location}" alt="">
                         <div class="proDescription">
                             <h5>Shop / ${product.type}</h5>
                             <h2>${product.Name} ${product.type}</h2>
                             <div>
                                 <h4 style="display:inline-block;">Rs.<span class="oldPriceSP">${product.oldPrice}</span> </h4><span class="newPriceSP">${product.newPrice}</span>
                             </div>
                             <div id="" >
                         <div class="btn-group mt-3" role="group" aria-label="Basic example" class="sizeBtns" id="SizeCard+${product.id}">
                                 <label for="Size" class="sizeLabel">Size</label>
                                 <button type="button" class="btn btn-outline-Dark btn-sm sizeBtn" id="XS${product.id}">XS</button>
                                 <button type="button" class="btn btn-outline-Dark btn-sm sizeBtn" id="S${product.id}">S</button>
                                 <button type="button" class="btn btn-outline-Dark btn-sm sizeBtn" id="M${product.id}">M</button>
                                 <button type="button" class="btn btn-outline-Dark btn-sm sizeBtn" id="L${product.id}">L</button>
                                 <button type="button" class="btn btn-outline-Dark btn-sm sizeBtn" id="XL${product.id}">XL</button>
                                 <button type="button" class="btn btn-outline-Dark btn-sm sizeBtn" id="XXL${product.id}">XXL</button>
                             </div>
                      <br>
                         <label for="number">Quantity</label>
                         <input type="number" value="1" name="Quantity" id="quantityField"><br>
                         <button class="addToCart" onclick="addToCart2(event)">Add to cart</button>
                         <button class="wishlist" onclick="wishlisted()"  id="heartu"><i class="fa-solid fa-heart" ></i></button>
                                 <div class="proDetail">
                                     <h4>Product Information</h4>
                                     <p><span>Colour:</span> ${product.color} <br>
                                         <span>Material:</span> 100% Cotton, 180 GSM <br>
                                         <span>Wash Care:</span> Machine wash. Wash in cold water, use a mild detergent. Dry in shade, do not iron directly or scrub on print.
                                         Colour may vary slightly from the image displayed.</p>
                                 </div>
                             </div>
                         </div>
                     </div>
     
                     <section class="newArrival">
                         <div class="heading">
                         <h2>Featured Products</h2>
                         <p>Specially Recommended for you</p>
                         
     
                     </section>
                  
         <br>
     
         <section class="webSliderOtherPg">
             <a href="./shop.html"><img src="./img/Web-slider_2.jpg" alt=""></a>
             <a href="./shop.html"><img src="./img/Phonebhoot_web_slider.jpg" alt=""></a>
         </section>
     
         <section class="socialMedia">
             <h2>Follow us on</h2>
             <a href="https://www.facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i></a>
             <a href="https://www.twitter.com" target="_blank"><i class="fa-brands fa-twitter"></i></a>
             <a href="https://www.instagram.com" target="_blank"> <i class="fa-brands fa-instagram"></i></a>
             <a href="https://www.youtube.com" target="_blank"><i class="fa-brands fa-youtube"></i></a>
           </section>
     
         <footer>
             <div class="footer-container">
                 <div>
                     <h4>Need Help?</h4>
                     <ul>
                         <li><a href="#">Contact Us</a></li>
                         <li><a href="#">Track my Order</a></li>
                         <li><a href="#">FAQs</a></li>
                     </ul>
                 </div>
                 <div>
                     <h4>Company</h4>
                     <ul>
                         <li><a href="#">About Us</a></li>
                         <li><a href="#">Bulk Order</a></li>
                         <li><a href="#">Career</a></li>
                     </ul>
                 </div>
                 <div>
                     <h4>More Info</h4>
                     <ul>
                         <li><a href="#">My Account</a></li>
                         <li><a href="#">Return Policy</a></li>
                         <li><a href="#">Terms and Conditions</a></li>
                         <li><a href="#">Privacy Policy</a></li>
                     </ul>
                 </div>
             </div>
             <p>&#169; Copyright TeesForYou 2022</p>
         </footer>
         <script src="./script.js"></script>
         `
         for(let available of product.sizeAvail){
             if(available[0]=="0")
                 document.getElementById(available.slice(1)+product.id).disabled = 'true';
         }
             }
         }

     }
}
    
//signUp

function signUp(){
    document.getElementById('signInBox').innerHTML=''
    document.getElementById('signInBox').innerHTML=`
    <div>
    <label for="name">Name</label><br>
    <input type="text" name="" id="name" placeholder="Full name"><br><br>
    <label for="mailID">Email Address</label><br>
    <input type="email" name="" id="mailID" placeholder="Mail ID"><br><br>
    <label for="passwordIn">Password</label><br>
    <input type="password" id="passwordIn" placeholder="Password"><br><br>
    <label for="passwordIn2">Confirm Password</label><br>
    <input type="password" id="passwordIn2" placeholder="Confirm Password"><br><br>
    <input type="checkbox" name="terms" id="terms"><label for="terms" id="termLabel">Accepting all <a href="#">Terms and Conditions</a></label>
          <br><br>
          <button class="addToCart signPageBtn btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="welcome()">Sign up</button>
    
    `
    document.getElementById('account').style.height = '120vh';
}

function send(){
    document.getElementById('mailID').value = ''
    document.getElementById('name').value = ''
    document.getElementById('msg').value = ''
}


function addToCart(event){
    // console.log(event)
    event.target.innerText ='Added'
    setTimeout(()=>{
        event.target.innerText ='Add to cart'
        document.getElementById(previousId).style.display = 'inline-block';
        document.getElementById('SizeCard' + previousId.slice(previousId.indexOf('+'))).style.display = 'none';
        previousId ='';

    },1100)
}

function addToCart2(event){
    event.target.innerText ='Added'
}

function welcome(){
    setTimeout(()=>location.href="index.html",1500)
    
}

function wishlisted(){
    console.log('hi')
    document.getElementById('heartu').style.color ="red";
    document.getElementById('heartu').style.backgroundColor ="#f9f9f9";
}


// hamburger menu open/close

const bar = document.getElementById('bar');
const nav = document.getElementById('nav');
const close = document.getElementById('close')
if(bar)
    bar.addEventListener('click',()=>nav.classList.add('active'));
if(close)
    close.addEventListener('click',()=>nav.classList.remove('active'))

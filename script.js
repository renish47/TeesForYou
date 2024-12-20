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
let previousPageId = "1-li";
let previousPageNo = 1;
let noOfData = allProducts.length;
let row = 12;
let ul = document.getElementById('ulTag');
const ProductApiUrl = 'https://63676bfdf5f549f052d5229f.mockapi.io/products'
const userDbUrl = 'https://6383737b6e6c83b7a993f4e3.mockapi.io/userDbTFY'
let productsizeSelected = '';
let isSizeSelected = false;
let requiredQty = 1;
let subTotal = 0;
let apiProductList;
let clicked = 0;
let sessionDetails;

////////////////////////////////////////////////////////////////// Pagination  ///////////////////////////////////////////////////////////

// creating the page button

try {

    function createPg() {
        let pgReq = Math.ceil(noOfData / row);

        //previous
        var li = document.createElement("li");
        li.classList.add('page-item', 'disabled');
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
            if (i == 1)
                li.classList.add('active');
            li.classList.add('page-item');
            li.setAttribute('id', i + '-li');

            var aTag = document.createElement('a');
            aTag.innerText = i;
            aTag.classList.add('page-link');
            aTag.setAttribute('id', i);
            aTag.setAttribute('href', '#');
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
catch (err) {
}


//trimming the date per page

function trimData(pageNo) {
    let start = (pageNo - 1) * row
    return allProducts.slice(start, start + row)
}


// actions when clicking page button


function pageNoclicked(event) {
    // console.log(event);

    // disabling-enabling prev,first,next,last btns
    if (event.target.id == '1' || event.target.id == 'first') {
        document.getElementById('previous-li').classList.add('disabled')
    }
    else {
        document.getElementById('previous-li').classList.remove('disabled')
    }
    if (event.target.id == Math.ceil(noOfData / row) || event.target.id == 'last') {
        document.getElementById('next-li').classList.add('disabled')
    }
    else {
        document.getElementById('next-li').classList.remove('disabled')
    }

    // funtion of prev button
    if (event.target.id == 'previous') {
        if (parseInt(previousPageNo) - 1 < 1)
            createProductPg(parseInt(previousPageNo));
        else {
            createProductPg(parseInt(previousPageNo) - 1);
            previousPageNo--;
        }
        changeActiveClr(event)
    }

    // function of next button
    else if (event.target.id == 'next') {
        if ((parseInt(previousPageNo) + 1) > Math.ceil(noOfData / row))
            createProductPg(parseInt(previousPageNo));
        else {
            createProductPg(parseInt(previousPageNo) + 1);
            previousPageNo++;
        }
        changeActiveClr(event)
    }

    // function of other page buttons
    else {
        previousPageNo = event.target.innerText;
        createProductPg(event.target.innerText);
        changeActiveClr(event)
    }

}


// Change the color of active page button

function changeActiveClr(event) {
    if (event.target.parentElement.id == 'previous-li' || event.target.parentElement.id == 'next-li') {
        document.getElementById(event.target.parentElement.id).classList.add('active');
        setTimeout(() => document.getElementById(event.target.parentElement.id).classList.remove('active'), 100);

        var idTemp = event.target.parentElement.id
        let id = (previousPageNo) + idTemp.slice(idTemp.indexOf('-'));
        document.getElementById(id).classList.add('active');

        // disabling-enabling prev,next btns
        if (id == '1-li') {
            document.getElementById('previous-li').classList.add('disabled')
        }
        else {
            document.getElementById('previous-li').classList.remove('disabled')
        }
        if (id == Math.ceil(noOfData / row) + '-li') {
            document.getElementById('next-li').classList.add('disabled')
        }
        else {
            document.getElementById('next-li').classList.remove('disabled')
        }

        // removing active clr from previously active button
        let idToRemove1 = (previousPageNo - 1) + idTemp.slice(idTemp.indexOf('-'));
        let idToRemove2 = (previousPageNo + 1) + idTemp.slice(idTemp.indexOf('-'));
        if (event.target.parentElement.id == 'previous-li')
            document.getElementById(idToRemove2).classList.remove("active");
        else
            document.getElementById(idToRemove1).classList.remove("active");

        previousPageId = id;
    }

    else {
        var idTemp = event.target.parentElement.id
        let id = event.target.id + idTemp.slice(idTemp.indexOf('-'));
        document.getElementById(id).classList.add('active');
        if (id != previousPageId)
            document.getElementById(previousPageId).classList.remove("active");
        previousPageId = id;
    }
}


///////////////////////////////////////////////////////////////// Products ////////////////////////////////////////////////////////



// Creating Shop Page with ALL PRODUCTS 

async function createProductPg(page) {
    let trimmedData = trimData(page)
    shopPgProductContainer.innerHTML = '';
    for (let product of trimmedData) {
         createProduct(product, shopPgProductContainer);
    }
    document.getElementById('shopTitle').innerText = 'ALL PRODUCTS';
    await getSessionDetails()
    await updateRedirectionStatus(false)
}

// Creating new arrival cards in homepage


async function createNewArr() {
    for (let product of allProducts) {
        if (product.newArrival == 'yes')
        createProduct(product, ProductContainer);
    }
    await getSessionDetails()
    await updateRedirectionStatus(false)
}

// Creating Featured products in single pro page



// function createFeaturedPro() {
//     for (let product of allProducts) {
//         if (product.BestSelling == 'yes')
//             createProduct(product, ProductContainer);
//     }
// }





// Opening Catagory


async function openCatagoryType(type) {
    document.getElementById('empty').style.display = "none"
    window.scroll(0, 0)
    if (ul)
        ul.innerHTML = '';
    shopPgProductContainer.innerHTML = '';
    document.getElementById('shopTitle').innerText = type.toUpperCase();
    for (let product of allProducts) {
        if (product.type == type)
            createProduct(product, shopPgProductContainer);
    }
    await getSessionDetails()
    await updateRedirectionStatus(false)
}

function openCatagoryColor(color) {
    document.getElementById('empty').style.display = "none"
    window.scroll(0, 0)
    if (ul)
        ul.innerHTML = '';
    shopPgProductContainer.innerHTML = '';
    document.getElementById('shopTitle').innerText = "Color " + color.toUpperCase();
    for (let product of allProducts) {
        if (product.color == color)
            createProduct(product, shopPgProductContainer);
    }
}

async function openCatagoryTag(tag) {
    await getSessionDetails()
    document.getElementById('empty').style.display = "none"
    window.scroll(0, 0)
    if (ul)
        ul.innerHTML = '';
    shopPgProductContainer.innerHTML = '';
    document.getElementById('shopTitle').innerText = tag.toUpperCase();
    for (let product of allProducts) {
        if (tag == 'New Arrival') {
            if (product.newArrival == 'yes')
                createProduct(product, shopPgProductContainer);
        }
        if (tag == 'Best Selling') {
            if (product.BestSelling == 'yes')
                createProduct(product, shopPgProductContainer);
        }
    }
    if (tag == 'Wishlist') {
        if(sessionDetails.isUserSignedIn){
            if (sessionDetails.userDetail.wishlisted.length == 0) {
                document.getElementById('empty').style.display = "block"
            }
            else{
                for (let product of sessionDetails.userDetail.wishlisted) {
                        createProduct(product, shopPgProductContainer);
                }
            }
        }else{
            document.getElementById('empty').style.display = "block"
        }
    }
}


// Creating Product Card
function createProduct(product, container) {
    productsizeSelected = '';
    isSizeSelected = false;
    let newProduct = document.createElement('div');
    newProduct.classList.add('newProduct');
    newProduct.setAttribute('id', product.id);
    newProduct.setAttribute('onclick', "openSpPage(event)");
    newProduct.innerHTML = `
    <span id='n/b${product.id}'></span>
    <img src="${product.location}" alt="" id="1${product.id}-2">
    <div class="description col align-items-start pt-3" id="1${product.id}-3">
        <p id="1${product.id}-1">${product.type}</p>
        <h5 id="1${product.id}-2">${product.Name + '  ' + product.type}</h5>
        <b>Rs.<span class="oldPrice" id="1${product.id}-4">${product.oldPrice}</span> </b><span class="newPrice" id="1${product.id}-5">${product.newPrice}</span>
        <i class="fa-solid fa-cart-shopping cartBtn" id="cartBtn+${product.id}" onclick="openSizeCard(event)"></i>
    </div>
    <div id="SizeCard+${product.id}" class="sizeCard">
    <p class='sizeSelectWarning' id='sr${product.id}'>Select required size first</p>
        <div class="btn-group mt-3" role="group" aria-label="Basic example" id="+${product.id}" onclick="whatSize(event)">
            <button type="button" class="btn btn-outline-Dark btn-sm sizeBtn" value="XS" id="XS${product.id}">XS</button>
            <button type="button" class="btn btn-outline-Dark btn-sm sizeBtn" value="S" id="S${product.id}">S</button>
            <button type="button" class="btn btn-outline-Dark btn-sm sizeBtn" value="M" id="M${product.id}">M</button>
            <button type="button" class="btn btn-outline-Dark btn-sm sizeBtn" value="L" id="L${product.id}">L</button>
            <button type="button" class="btn btn-outline-Dark btn-sm sizeBtn" value="XL" id="XL${product.id}">XL</button>
            <button type="button" class="btn btn-outline-Dark btn-sm sizeBtn" value="XXL" id="XXL${product.id}">XXL</button>
        </div>
        <button class="addToCart" id="z${product.id}" onclick="addToCart(event)" >Add to cart</button>

    </div>
  </div> `

    container.append(newProduct)
    if (product.newArrival == 'yes') {
        document.getElementById('n/b' + product.id).classList.add('newCard');
        document.getElementById('n/b' + product.id).innerText = 'New';

    }
    if (product.BestSelling == 'yes') {
        document.getElementById('n/b' + product.id).classList.add('bestCard')
        document.getElementById('n/b' + product.id).innerText = 'Best Selling';
    }
    for (let available of product.sizeAvail) {
        if (available[0] == "0")
            document.getElementById(available.slice(1) + product.id).disabled = 'true';
    }
}



// Showing and hidding Size Card

let previousId = '';
function openSizeCard(event) {
    let id = event.target.id;
    productsizeSelected = '';
    isSizeSelected = false;
    requiredQty = 1;
    document.getElementById(id).style.display = 'none'
    document.getElementById('SizeCard' + id.slice(id.indexOf('+'))).style.display = 'inline-block'

    if (previousId != '') {
        document.getElementById(previousId).style.display = 'inline-block'
        document.getElementById('SizeCard' + previousId.slice(previousId.indexOf('+'))).style.display = 'none'
    }
    previousId = event.target.id
}


// Opening Single product page
async function openSpPage(event) {
    // console.log(event.target.id[0],event.target.parentElement.id[0])
    if (event.target.id[0] != 'c' && event.target.id[0] != 'z' && event.target.parentElement.id[0] != '+') {
        let changingPart = document.getElementById('changingPart');
        for (let product of allProducts) {
            if (event.target.parentElement.id == product.id || event.target.id.slice(1, event.target.id.indexOf('-')) == product.id) {
                productsizeSelected = '';
                isSizeSelected = false;
                window.scrollTo(0, 0)
                changingPart.innerHTML = ''
                changingPart.innerHTML = `
                        <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog  modal-dialog-centered w-25">
                                <div class="modal-content">
                                    <div class="modal-body text-center msgSent" id="signinModal"></div>
                                </div>
                            </div>
                        </div>
                         <header>
                             <a href="./index.html"><img src="./img/Logo.png" alt=""></a>
                             <div class="navi">
                                 <li><a href="./index.html">Home</a></li>
                                 <li><a href="./shop.html" class="activePg" id="shopNavBtn">Shop</a></li>
                                 <li><a href="#" onclick="accountPage(event)">Account</a></li>
                                 <li><a href="./contact.html">Contact</a></li>
                                 <li><a href="./cart.html" class="cartBtn"><i class="fa-solid fa-cart-shopping cart"><span id="cartNofitication"></span>
                                 </i></a></li>
                                <a href="#" id="close"><i class="fa-solid fa-xmark"></i></a>
                            </div>
                            <div class="forMobile">
                                <a href="./cart.html"><i class="fa-solid fa-cart-shopping"><span id="cartNofitication2"></span></i></a>
                                <i class="fa-solid fa-bars" id="bar"></i>
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
                             <p id='sizeSelectWarning'  class='sizeSelectWarning'>Select required size first</p>
                             <div class="btn-group mt-3" role="group" aria-label="Basic example" id="+${product.id}" onclick="whatSize(event)">
                             <button type="button" class="btn btn-outline-Dark btn-sm sizeBtn" value="XS" id="XS${product.id}">XS</button>
                             <button type="button" class="btn btn-outline-Dark btn-sm sizeBtn" value="S" id="S${product.id}">S</button>
                             <button type="button" class="btn btn-outline-Dark btn-sm sizeBtn" value="M" id="M${product.id}">M</button>
                             <button type="button" class="btn btn-outline-Dark btn-sm sizeBtn" value="L" id="L${product.id}">L</button>
                             <button type="button" class="btn btn-outline-Dark btn-sm sizeBtn" value="XL" id="XL${product.id}">XL</button>
                             <button type="button" class="btn btn-outline-Dark btn-sm sizeBtn" value="XXL" id="XXL${product.id}">XXL</button>
                         </div>
                      <br>
                         <label for="number">Quantity</label>
                         <input type="number" value="1" name="Quantity" id="quantityField" onchange="whatQuantity(event)"><br>
                         <button class="addToCart" onclick="addToCart2(event)" id=${product.id}>Add to cart</button>
                         <button class="wishlist" onclick="wishlisted(event)"  id="h2${product.id}"><i class="fa-solid fa-heart" id="i2${product.id}"></i></button>
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
         <script src="./script.js"></script>`
         for (let available of product.sizeAvail) {
             if (available[0] == "0")
                 document.getElementById(available.slice(1) + product.id).disabled = 'true';
         }
         cartNotification()
            if(sessionDetails.isUserSignedIn){
                if(sessionDetails.userDetail.wishlisted.length>0){
                    for (let data of sessionDetails.userDetail.wishlisted) {
                        if (data.id == product.id) {
                            document.getElementById('h2' + product.id).style.color = "red";
                            document.getElementById('h2' + product.id).style.backgroundColor = "#000000";
                            document.getElementById('h2' + data.id).classList.add('wishlisted');
                            document.getElementById('i2' + data.id).classList.add('wishlisted');
                        }
                    }
                }
            }
        }
    }

    }
    }



//creating account page content

let previousTarget='';
function createAccountPageContent(event){
    window.scroll(0,0)
    let container = document.getElementById('AccPgContent')
    container.innerHTML=''
    if(event.target.innerText=='Profile'){
        event.target.classList.add('active')
        if(previousTarget)
            previousTarget.classList.remove('active')
        container.innerHTML = `
        <h2>PROFILE</h2><br><br>
        <div class="container infoContainer ProfileContainer">
            <div class="mandateInfo profileInfo">
              <h4>Contacts</h4>
              <div class="mandateInfoLabel" style="padding-right:70px;">
                <label for="name">Name</label><br>
                <label for="pNo">Mobile</label><br>
              </div>
              <div class="mandateInfoinput">
                <input type="text" id="name" name="fname" value="${sessionDetails.userDetail.userName}"><br>
                <input type="email" id="pNo" name="mobile" value="${sessionDetails.userDetail.mobile}"  placeholder="Mobile no."><br>
              </div>
            </div>
            <div class="address profileInfo" style="border: 0;">
              <h4>Address</h4>
              <div class="addressLabel">
                <label for="dNo">Apartment/Door no.</label><br>
                <label for="add1">Address line 1</label><br>
                <label for="add2">Address line 2 <small style="color: rgb(196, 196, 196); font-size: 15px;">(optional)</small></label>
                <br>
                <label for="city">City</label><br>
                <label for="state">State</label><br>
                <label for="country">Country</label><br>
                <label for="pin">Pincode</label>
              </div>
              <div class="addressInput">
                <input type="text" value="${sessionDetails.userDetail.address.doorNo}" id="dNo" name="doorNo" placeholder="Apartment/Door no."><br>
                <input type="text" value="${sessionDetails.userDetail.address.addressLine1}" name="add1" id="add1" placeholder="Address line 1"><br>
                <input type="text" value="${sessionDetails.userDetail.address.addressLine2}" name="add2" id="add2" placeholder="Address line 2"><br>
                <input type="text" value="${sessionDetails.userDetail.address.city}" name="city" id="city" placeholder="City"><br>
                <input type="text" value="${sessionDetails.userDetail.address.state}" name="state" id="state" placeholder="State"><br>
                <input type="text" value="${sessionDetails.userDetail.address.country}" name="country" id="country" placeholder="Country"><br>
                <input type="text" value="${sessionDetails.userDetail.address.pin}" name="pin" id="pin" placeholder="Pincode"><br>
                <button onclick="saveButton()" class="addToCart" type="button" id="placeOrderBtn"  style="float: right;">Save</button>
              </div>
            </div>
        </div>
        `
    }
    else if(event.target.innerText=='Account Settings'){
        event.target.classList.add('active')
        if(previousTarget)
            previousTarget.classList.remove('active')
        container.innerHTML =`
        <h2>ACCOUNT SETTINGS</h2><br><br>
        <div class="container infoContainer ProfileContainer">
          <form id="myForm">
            <div class="address profileInfo">
              <h4  style="margin-right: 150px; text-align:start;">Change  Email</h4>
              <div class="PassInput">
                <input type="email" id="mailIdChanger" style="width:215px; margin-right:17px;" value="${sessionDetails.userDetail.mailId}" name="mail" placeholder="Email Address"><br>
                <button class="addToCart" type="button" style="float:right;" onclick='changeEmail()'>Save</button>
              </div>
            </div>
            <div class="address profileInfo" style="border:0 ;">
              <h4  style="margin-right: 100px;">Change  Password</h4>
              <div class="PassInput" style="margin-left:10px;">
              <input type="password" class='mt-3' id="oldPass" placeholder="Old Password"><i class="oldPass showHide fa-solid fa-eye-slash" id="showHideOld" onclick="showHidePassword(event)"></i><br><small id="pass2Warning" class="warning">Both passwords didn't match</small><br>
              <input type="password" style="margin-bottom:6px;" id="passwordSU1" placeholder="New Password" oninput="passwordStrength(event)"><i class="passwordSU1 showHide fa-solid fa-eye-slash " id="showHide1" onclick="showHidePassword(event)"></i><br><small  id="pass1Warning" class="warning"></small><br>
              <input type="password" class='mt-3' id="passwordSU2" placeholder="Confirm New Password"><i class="passwordSU2 showHide fa-solid fa-eye-slash" id="showHide" onclick="showHidePassword(event)"></i><br><small id="pass2Warning" class="warning">Both passwords didn't match</small><br>
                <button class="addToCart" type="button" style="float:right;" onclick='changePassword()'>Save</button>
              </div>
            </div>
          </form>
        </div>
        `
    }
    else if(event.target.innerText=='Your Orders'){
        event.target.classList.add('active')
        if(previousTarget)
            previousTarget.classList.remove('active')
        container.innerHTML =`
        <h2 >YOUR ORDERS </h2><br><br>
        <div id='youOrders'>
        </div>
        `
        if(sessionDetails.userDetail.orderHistory.length>0){
            let innerHtml = ''
            for(let orderData of sessionDetails.userDetail.orderHistory){
                // console.log(orderData)
                innerHtml += `
                <div class="yourOrder" id='TFY${orderData.orderNo}'>
                    <h4><b>Expected Delivery Date:</b> <span class="text-success">${orderData.date}</span></h4>
                    <div class="yourOrderContainer">
                        <div class="yourOrderDetail">
                        <span><b>Order ID:</b>&ensp;TFY${orderData.orderNo}</span><br>
                        <span><b>Order:</b>&ensp;${orderData.order}</span><br>
                        <Span><b>Total Amount:</b>&ensp;&#8377; ${orderData.subTotal+100}</Span><br>
                        </div>
                        <div class="btnGroup ps-4 ms-0">
                        <button class="btn btn-danger" id='${orderData.orderNo}'style="float:left;" onclick="cancelOrder(event)">Cancel</button>
                        </div>
                    </div><hr><br>
                </div>
                `
            }
            document.getElementById('youOrders').innerHTML = innerHtml
        }
        else{
            document.getElementById('youOrders').innerHTML =`<p class="selectSettingsMsg" style="padding-top:130px;">Your Haven't ordered anything yet</p>`
        }
    }
    else if(event.target.innerText=='Delete Account'){
        event.target.classList.add('active')
        if(previousTarget)
            previousTarget.classList.remove('active')
        container.innerHTML =`
        <h2>DELETE ACCOUNT</h2><br>
        <div class="deleteAccContainer">
          <span class="text-danger"><b style="padding-right:5px;">Note:</b> All your order history and saved data will be completely erased forever</span><br><br>
          <h5 style="display: inline-block;">
            Enter Your Password to Confirm
          </h5>
          <input type="password" name="PassToDelete" id="PassToDelete" placeholder="Password"><br>
          <button class="btn btn-danger" onclick="deleteUser()">Confirm</button>
        </div>
        `
    }
    previousTarget = event.target;
}


function saveButton(){
    saveProfileDetails()
     let signinModal = document.getElementById('signinModal')
    let myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
    signinModal.innerHTML = `<br><i class="fa-solid fa-circle-check"></i> <span> Changes Saved</span><br><br>`;
    myModal.show();
    setTimeout(() => {myModal.hide(); }, 2000);
}
async function saveProfileDetails(){
    sessionDetails.userDetail.userName = document.getElementById('name').value
    sessionDetails.userDetail.mobile = document.getElementById('pNo').value;
    sessionDetails.userDetail.address = {
        "doorNo":document.getElementById('dNo').value,
        "addressLine1":document.getElementById('add1').value,
        "addressLine2":document.getElementById('add2').value,
        "city":document.getElementById('city').value,
        "state":document.getElementById('state').value,
        "country":document.getElementById('country').value,
        "pin":document.getElementById('pin').value
    }
   
   await updateSignedUserDetail(sessionDetails.userDetail)
   await updateUserDb(sessionDetails.userDetail)
}

async function changeEmail(){
    let mail = document.getElementById('mailIdChanger')
    let signinModal = document.getElementById('signinModal')
    let myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
    let suffix = mail.value.slice(-4)

    if(mail.value==''){
        signinModal.innerHTML = `<br><i class="fa-solid fa-circle-xmark text-danger"></i> <span>Enter your Email ID</span><br><br>`;
        myModal.show();
        setTimeout(() => {myModal.hide(); }, 2000);
    }else if(suffix != '.com' || mail.value.indexOf('@') == -1 || mail.value.indexOf(' ') >= 0){
        signinModal.innerHTML = `<br><i class="fa-solid fa-circle-xmark text-danger"></i> <span>Enter Valid Email ID</span><br>
        <p class="shortMsg" style="padding-left:20px;">i.e, example@gmail.com</p><br>`;
        myModal.show();
        setTimeout(() => {myModal.hide(); }, 2000);
    }
    else{
        sessionDetails.userDetail.mailId = mail.value;
        signinModal.innerHTML = `<br><i class="fa-solid fa-circle-check"></i> <span>Changes Saved</span><br><br>`;
        myModal.show();
        setTimeout(() => {myModal.hide(); }, 2000);
        await updateSignedUserDetail(sessionDetails.userDetail)
        await updateUserDb(sessionDetails.userDetail)
    }
}


async function changePassword(){
    let password1 = document.getElementById('passwordSU1')
    let password2 = document.getElementById('passwordSU2')
    let oldPass = document.getElementById('oldPass')
    let signinModal = document.getElementById('signinModal')
    let myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
    let warningMsg = document.getElementById('pass1Warning')

    password1.addEventListener('focus', () => {
        warningMsg.style.opacity = '0%'
        password1.classList.remove('wrong');
        password1.classList.remove('weakPass')
        warningMsg.style.opacity = '0%'
    })
    if (password1.value != password2.value || password1.value.length < 6 || password1.value == '' || password2.value == '' || oldPass.value=='') {
        if(oldPass.value==''){
            signinModal.innerHTML = `<br><i class="fa-solid fa-circle-xmark text-danger"></i> <span style="font-size:20px">Can't leave Input fields Empty</span><br><br>`;
            myModal.show();
            setTimeout(() => {myModal.hide(); oldPass.focus();}, 3000);
            
        }
        else if (password1.value == '') {
            password1.focus();
            signinModal.innerHTML = `<br><i class="fa-solid fa-circle-xmark text-danger"></i> <span style="font-size:20px">Can't leave Input fields Empty</span><br><br>`;
            myModal.show();
            setTimeout(() => {myModal.hide(); password1.focus();}, 3000);
        }
        else if (password2.value == '') {
            signinModal.innerHTML = `<br><i class="fa-solid fa-circle-xmark text-danger"></i> <span style="font-size:20px">Can't leave Input fields Empty</span><br><br>`;
            myModal.show();
            setTimeout(() => {myModal.hide(); password2.focus();}, 3000);
            password2.focus();
        }
        else if (password1.value != password2.value) {
            signinModal.innerHTML = `<br><i class="fa-solid fa-circle-xmark text-danger"></i> <span style="font-size:20px">Both New Passwords aren't Matching</span><br><br>`;
            myModal.show();
            setTimeout(() => {myModal.hide(); password1.focus();}, 3000);
        }
        else if (password1.value.length>0&& password1.value.length < 6) {
            password1.classList.add('weakPass')
            warningMsg.style.opacity = '80%'
            warningMsg.innerHTML = "Password Strength: Weak"
            warningMsg.style.color = 'rgb(255, 60, 0)'
            signinModal.innerHTML = `<br><i class="fa-solid fa-circle-xmark text-danger"></i> <span style="font-size:20px">Strength of password is weak</span><br><br>`;
            myModal.show();
            setTimeout(() => {myModal.hide(); password1.focus();}, 3000);
        }
    }else{
        if(oldPass.value!=sessionDetails.userDetail.password){
            signinModal.innerHTML = `<br><i class="fa-solid fa-circle-xmark text-danger"></i> <span style="font-size:20px">Wrong Password</span><br><br>`;
            myModal.show();
            setTimeout(() => {myModal.hide(); oldPass.focus();}, 3000);
        }else if(oldPass.value == password1.value){
            signinModal.innerHTML = `<br><i class="fa-solid fa-circle-xmark text-danger"></i> <span style="font-size:20px">New Password can't be similar to old password </span><br><br>`;
            myModal.show();
            setTimeout(() => {myModal.hide(); password1.focus();}, 3000);
        }
        else{
            sessionDetails.userDetail.password=password1.value
            password1.value=''
            password2.value=''
            oldPass.value=''
            signinModal.innerHTML = `<br><i class="fa-solid fa-circle-check"></i> <span>Changes Saved</span><br><br>`;
             myModal.show();
            setTimeout(() => {myModal.hide(); }, 2000);
            await updateSignedUserDetail(sessionDetails.userDetail)
            await updateUserDb(sessionDetails.userDetail)
        }
    }
}



//signUp-page-loader

function signUp() {
    document.getElementById('signInBox').innerHTML = ''
    document.getElementById('signInBox').innerHTML = `
    <div>
    <form >
    <label for="nameSU">Name</label><br>
    <input type="text" name="" id="nameSU" placeholder="Full name"><br>
    <small id="nameWarning" class="warning">Please don't leave this field empty</small><br>
    <label for="mailSU">Email Address</label><br>
    <input type="email" name="" id="mailSU" placeholder="Mail ID"><br>
    <small id="mailWarning" class="warning">Please enter a valid Mail id</small><br>
    <label for="passwordSU1">Password</label><br>
    <input type="password" id="passwordSU1" placeholder="Password" oninput="passwordStrength(event)"><i class="passwordSU1 showHide fa-solid fa-eye-slash " id="showHide1" onclick="showHidePassword(event)"></i><br><small id="pass1Warning" class="warning"></small><br>
    <label for="passwordSU2">Confirm Password</label><br>
    <input type="password" id="passwordSU2" placeholder="Confirm Password"><i class="passwordSU2 showHide fa-solid fa-eye-slash" id="showHide2" onclick="showHidePassword(event)"></i><br><small id="pass2Warning" class="warning">Both passwords didn't match</small><br>
    <input type="checkbox" onclick='signBtnEnabled(event)' name="terms" id="terms" ><label for="terms" id="termLabel">Accepting all <a href="#">Terms and Conditions</a></label>
          <br><br>
          <button type="button" disabled class="addToCart signPageBtn" id="signupBtn" onclick="signUpAuthentication(event)">Sign Up</button>
    </form>
    `
    document.getElementById('account').style.height = '120%';
}


async function signInAuthentication(event) {
    event.preventDefault();
    let mail = document.getElementById('mailSI')
    let password = document.getElementById('passwordSI')
    let signinModal = document.getElementById('signinModal')
    let suffix = mail.value.slice(-4)

    mail.addEventListener('focus', () => {
        mail.classList.remove('wrong');
        document.getElementById('mailWarning').style.opacity = '0%'
    })
    password.addEventListener('focus', () => {
        password.classList.remove('wrong');
        document.getElementById('passwordWarning').style.opacity = '0%'
    })

    if (mail.value == '' || suffix != '.com' || mail.value.indexOf('@') == -1 || mail.value.indexOf(' ') >= 0 || password.value == '') {
        if (mail.value == '' || suffix != '.com' || mail.value.indexOf('@') == -1 || mail.value.indexOf(' ') >= 0) {
            mail.classList.add('wrong');
            document.getElementById('mailWarning').style.opacity = '80%'
        }
        if (password.value == '') {
            password.classList.add('wrong');
            document.getElementById('passwordWarning').style.opacity = '80%'
        }
        window.scroll(0, 0)
    }
    else {
        document.getElementById('mailWarning').style.opacity = '0%'
        mail.classList.remove('wrong');
        
        let data = await fetch(userDbUrl)
        let userDb = await data.json()
        let notAnUser = true
        if (mail.value == 'admin@login.com' && password.value == 'admin123') {
            signinModal.innerHTML = `<br><i class="fa-solid fa-circle-check"></i> <span>Welcome Boss!</span><br>
            <p class="shortMsg">How you doing?</p><br>`
            let myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
            myModal.show();
            setTimeout(() => { location.href = 'admin.html' }, 2000);
        }
        else{
            for(let user of userDb){
                if (mail.value == user.mailId && password.value == user.password) {
                    await updateSignedUserDetail(user)
                    await updateUserSignedInStatus(true)
                    notAnUser = false
                    signinModal.innerHTML = `<br><i class="fa-solid fa-circle-check"></i> <span>Account Verified</span><br>
                    <p class="shortMsg">Welcome ${user.userName} :)</p><br>`
                    let myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
                    myModal.show();
                    if(sessionDetails.isRedirected){
                        await getSessionDetails()
                        await updateRedirectionStatus(false)
                        setTimeout(() => { location.href = 'checkout.html' }, 2000);
                    }else{
                        setTimeout(() => { location.href = 'account.html' }, 2000);
                    }
                    break;
                }
            }
            if(notAnUser) {
                signinModal.innerHTML = `<br><i class="fa-solid fa-circle-xmark" style="color:red;"></i> <span>Account Not Found</span><br>
                <p class="shortMsg" style="padding-left:20px;">Check your Email id or Password :(</p><br>`
                let myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
                myModal.show();
                setTimeout(() => {myModal.hide();}, 3000);
            }
        }
    }
}


//SignUP Authentication

async function signUpAuthentication(event) {
    event.preventDefault();
    let mail = document.getElementById('mailSU')
    let password1 = document.getElementById('passwordSU1')
    let password2 = document.getElementById('passwordSU2')
    let warningMsg = document.getElementById('pass1Warning')
    let warningMsg2 = document.getElementById('pass2Warning')
    let signinModal = document.getElementById('signinModal')
    let nameField = document.getElementById('nameSU')
    let suffix = mail.value.slice(-4)
    let terms = document.getElementById('terms')

    mail.addEventListener('focus', () => {
        mail.classList.remove('wrong');
        document.getElementById('mailWarning').style.opacity = '0%'
    })
    nameField.addEventListener('focus', () => {
        nameField.classList.remove('wrong');
        document.getElementById('nameWarning').style.opacity = '0%'
    })
    password1.addEventListener('focus', () => {
        warningMsg.style.opacity = '0%'
        password1.classList.remove('wrong');
        password1.classList.remove('weakPass')
        warningMsg.style.opacity = '0%'
    })
    password2.addEventListener('focus', () => {
        password1.classList.remove('wrong');
        warningMsg2.style.opacity = '0%'
        password2.classList.remove('wrong');
    })

    if (mail.value == '' || suffix != '.com' || mail.value.indexOf('@') == -1 || nameField.value == '' || password1.value != password2.value || password1.value.length < 6 || terms.checked == false || password1.value == '' || password2.value == '') {

        if (nameField.value == '') {
            window.scroll(0, 0)
            nameField.classList.add('wrong');
            document.getElementById('nameWarning').style.opacity = '80%'
        }
        if (mail.value == '' || suffix != '.com' || mail.value.indexOf('@') == -1) {
            window.scroll(0, 0)
            mail.classList.add('wrong');
            document.getElementById('mailWarning').style.opacity = '80%'
        }
        if (password1.value != password2.value) {
            warningMsg2.style.opacity = '80%'
            password2.classList.add('wrong');
            warningMsg2.innerHTML = "Both passwords didn't match"
        }
        if (password1.value.length < 6) {
            password1.classList.add('weakPass')
            warningMsg.style.opacity = '80%'
            warningMsg.innerHTML = "Password Strength: Weak"
            warningMsg.style.color = 'rgb(255, 60, 0)'
        }
        if (password1.value == '') {
            password1.classList.add('wrong')
            warningMsg.style.opacity = '80%'
            warningMsg.innerHTML = "Please don't leave this field empty"
        }
        if (password2.value == '') {
            password2.classList.add('wrong')
            document.getElementById('pass2Warning').style.opacity = '80%'
            document.getElementById('pass2Warning').innerHTML = "Please don't leave this field empty"
        }
    }
    else {
        let data = await fetch(userDbUrl)
        let userDb = await data.json()
        let newUser = true
        for(let user of userDb){
            if (mail.value == user.mailId) {
                newUser = false
                signinModal.innerHTML = `<br><i class="fa-solid fa-circle-exclamation text-warning pe-0 me-1"></i> <span>Account Already Exists</span><br>
                <p class="shortMsg">Try to sign in buddy :)</p><br>`
                let myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
                myModal.show();
                setTimeout(() => { location.href = 'signIn.html' }, 2500);
                break;
            }
        }
        
        if (newUser) {
                let userDetail = {
                    userName: nameField.value,
                    mailId: mail.value,
                    password: password1.value,
                    mobile: '',
                    address: { doorNo: '', addressLine1: '', addressLine2: '', city: '', state: '', country: '', pin: '', payMethod: '' },
                    orderHistory:[],
                    wishlisted:[]
                }
                signinModal.innerHTML = `<br><i class="fa-solid fa-circle-check"></i><span>Account Created</span><br>
                <p class="shortMsg">Redirecting to Sign-in page</p><br>`
                let myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
                myModal.show();

                await fetch(userDbUrl, {
                    method: "POST",
                    headers: { "content-Type": "application/json" },
                    body: JSON.stringify(userDetail)
                })
                setTimeout(() => { location.href = 'signIn.html' }, 2500);
        }
    }
}



function signBtnEnabled(event) {
    if (event.target.checked)
        document.getElementById('signupBtn').disabled = false;
    else
        document.getElementById('signupBtn').disabled = true;
}




function passwordStrength(event) {
    // console.log(event.target.value)
    let passwordField = event.target

    passwordField.addEventListener('blur', () => {
        warningMsg.style.opacity = '0%'
        passwordField.classList.remove('weakPass', 'midPass', 'strongPass')
    })


    let warningMsg = document.getElementById('pass1Warning')

    if (passwordField.value.length >= 1 && passwordField.value.length < 6) {
        passwordField.classList.add('weakPass')
        passwordField.classList.remove('midPass')
        warningMsg.innerHTML = "Password Strength: Weak"
        warningMsg.style.opacity = '80%'
        warningMsg.style.color = 'rgb(255, 60, 0)'
    }
    else if (passwordField.value.length >= 6 && passwordField.value.length < 12) {
        passwordField.classList.remove('weakPass')
        passwordField.classList.remove('strongPass')
        passwordField.classList.add('midPass')
        warningMsg.innerHTML = "Password Strength: Medium"
        warningMsg.style.opacity = '80%'
        warningMsg.style.color = 'rgb(255, 187, 0)'
    }
    else if (passwordField.value.length >= 12) {
        passwordField.classList.remove('midPass')
        passwordField.classList.add('strongPass')
        passwordField.classList.add('midPass')
        warningMsg.innerHTML = "Password Strength: Strong"
        warningMsg.style.opacity = '80%'
        warningMsg.style.color = 'rgb(0, 177, 21)'
    }
}


function showHidePassword(event) {
    let showHideBtn = document.getElementById(event.target.id);
    if (showHideBtn.classList[3] == 'fa-eye-slash') {
        showHideBtn.classList.remove('fa-eye-slash');
        showHideBtn.classList.add('fa-eye');
        document.getElementById(showHideBtn.classList[0]).setAttribute('type', 'text');
    } else {
        showHideBtn.classList.add('fa-eye-slash');
        showHideBtn.classList.remove('fa-eye');
        document.getElementById(showHideBtn.classList[0]).setAttribute('type', 'password');
    }
}

function send() {

    let mail = document.getElementById('mailID')
    let name = document.getElementById('name')
    let msg = document.getElementById('msg')

    let myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
    myModal.show();
    document.getElementById('sendBtn').disabled = true;
    mail.value = ''
    name.value = ''
    msg.value = ''
}

function sendBtnActive() {
    let mail = document.getElementById('mailID')
    let name = document.getElementById('name')
    let msg = document.getElementById('msg')
    if (mail.value != '' && name.value != '' && msg.value != '')
        document.getElementById('sendBtn').disabled = false;
    else
        document.getElementById('sendBtn').disabled = true;
}

function checkFields(event) {

    let name = document.getElementById('name')
    let mailID = document.getElementById('mailID')
    let pNo = document.getElementById('pNo')
    let dNo = document.getElementById('dNo')
    let add1 = document.getElementById('add1')
    let city = document.getElementById('city')
    let state = document.getElementById('state')
    let country = document.getElementById('country')
    let pin = document.getElementById('pin')
    let paymethod1 = document.getElementById('p1')
    let paymethod2 = document.getElementById('p2')
    let paymethod3 = document.getElementById('p3')
    let paymethod4 = document.getElementById('p4')

    if (name.value != '' && mailID.value != '' && pNo.value != '' && dNo.value != '' && add1.value != '' && city.value != '' && state.value != '' && country.value != '' && pin.value != '') {
        if (p1.checked || p2.checked || p3.checked || p4.checked)
            document.getElementById('placeOrderBtn').disabled = false;
    }
    else
        document.getElementById('placeOrderBtn').disabled = true;

}


// function checkFieldsSettings(event) {

//     let name = document.getElementById('name')
//     let pNo = document.getElementById('pNo')
//     let dNo = document.getElementById('dNo')
//     let add1 = document.getElementById('add1')
//     let city = document.getElementById('city')
//     let state = document.getElementById('state')
//     let country = document.getElementById('country')
//     let pin = document.getElementById('pin')


//     if (name.value != '' && pNo.value != '' && dNo.value != '' && add1.value != '' && city.value != '' && state.value != '' && country.value != '' && pin.value != '') {
//             document.getElementById('placeOrderBtn').disabled = false;
//     }
//     else
//         document.getElementById('placeOrderBtn').disabled = true;

// }



async function loadSignInPage(){
    await getSessionDetails()
    await getUserDb()
}

async function loadContactPage(){
    await getSessionDetails()
    await updateRedirectionStatus(false)
}


async function addToCart(event) {
    if (isSizeSelected) {
        let thisProductId = event.target.id.slice(1);
        document.getElementById('sr' + thisProductId).style.display = 'none';
        event.target.innerText = 'Added'
        setTimeout(() => {
            event.target.innerText = 'Add to cart'
            document.getElementById(previousId).style.display = 'inline-block';
            document.getElementById('SizeCard' + previousId.slice(previousId.indexOf('+'))).style.display = 'none';
            previousId = '';

        }, 500)
        let thisProduct = allProducts.find((pro) => thisProductId === pro.id)
        let flag = false;
        if(apiProductList.length>0){
            for(let product of apiProductList){
                if(product.id ==thisProduct.id && product.productsizeSelected ==productsizeSelected){
                    requiredQty= product.requiredQty +1
                    await updateProductApiData(product,product.apiId)
                    flag=true
                    break;
                }
            }
        }
        if(flag==false){
            await createProductApiData(thisProduct)
        }
        await cartNotification()
        productsizeSelected = '';
        isSizeSelected = false;
        requiredQty = 1;
    }
    else {
        let thisProductId = event.target.id.slice(1);
        document.getElementById('sr' + thisProductId).style.display = 'block';
    }

}


async function addToCart2(event) {
    if (isSizeSelected) {
        document.getElementById('sizeSelectWarning').style.display = 'none';
        event.target.innerText = 'Added'
        setTimeout(() => { event.target.innerText = 'Add to cart';document.getElementById('quantityField').value=1 }, 2000)
        let thisProductId = event.target.id;
        let thisProduct = allProducts.find((pro) => thisProductId === pro.id)
        let flag = false;
        if(apiProductList.length>0){
            for(let product of apiProductList){
                if(product.id ==thisProduct.id && product.productsizeSelected ==productsizeSelected){
                    requiredQty= parseInt(requiredQty)+ parseInt(product.requiredQty) 
                    // console.log(requiredQty)
                    await updateProductApiData(product,product.apiId)
                    flag=true
                    break;
                }
            }
        }
        if(flag==false){
            await createProductApiData(thisProduct)
        }
        await cartNotification()
        // console.log(thisProduct)
        productsizeSelected = '';
        isSizeSelected = false;
        requiredQty = 1;
    } else {
        document.getElementById('sizeSelectWarning').style.display = 'block';
    }
}


async function createCart(event) {
    window.scroll(0, 0)
    let signinModal = document.getElementById('signinModal')

    signinModal.innerHTML = `<div class="spinner-border text-warning spinner-border-m" role="status">
    <span class="visually-hidden"></span>
  </div>&ensp;&ensp;<span style="position:relative;top:-6px">Please Wait&emsp;</span><br>`
                let myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
                myModal.show();
                setTimeout(() => {myModal.hide();}, 1000);
    let productSpace = document.getElementById('productsInCart');
    let productList = await getData()
    console.log(productList)
    let tempStorage = [];
    for (product of productList) {
        if (product.forCart)
            tempStorage.push(product)
    }
    if (tempStorage.length) {
        document.getElementById('cartPgItems1').style.display = 'block';
        document.getElementById('cartPgItems2').style.display = 'none';
        for (let product of tempStorage) {
            if (product.forCart) {
                let tr = document.createElement('tr');
                tr.setAttribute('id', 'tr' + product.id + product.productsizeSelected)
                tr.innerHTML = `
                        <th scope="row" class="item"><img src="${product.location}" alt="" >${product.Name} ${product.type}</th>
                        <td class="notItem">${product.productsizeSelected}</td>
                        <td class="notItem" valign="">${product.requiredQty} nos.</td>
                        <td class="notItem">&#8377; ${product.newPrice}</td>
                        <td class="notItem">&#8377; ${product.newPrice * product.requiredQty}</td>
                        <td class="notItem"><button onclick="deleteProFromCart(event)"><i class="fa-solid fa-xmark p${product.newPrice * product.requiredQty}"  id='x${product.id}+${product.productsizeSelected}'></i></button></td>
                    `
                productSpace.append(tr);
                subTotal += product.newPrice * product.requiredQty;
            }
        }
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <th scope="row" class="item"></th>
            <td class="notItem"></td>
            <td class="notItem"></td>
            <td class="notItem total endDetail"><br>
                Sub Total:<br>
                Delivery: <br><br>
              <h4>Grand Total:</h4></td>
            <td class="notItem endDetail" id='endCartDetail'>
              &#8377; ${subTotal} <br>
              &#8377; 100 <br><br>
              <h4>&#8377; ${subTotal + 100}</h4></td>
            `
        productSpace.append(tr);
    }
    else {
        document.getElementById('cartPgItems1').style.display = 'none';
        document.getElementById('cartPgItems2').style.display = 'block';
    }
    await getSessionDetails()
    await updateRedirectionStatus(false)
}

async function deleteProFromCart(event) {

    let id = event.target.id.slice(1,event.target.id.indexOf('+'))
    let size = event.target.id.slice(event.target.id.indexOf('+')+1)
    console.log(id,size)
    document.getElementById('tr' + id + size).innerHTML = ''
    subTotal = subTotal - event.target.classList[2].slice(1)
    if (subTotal == 0) {
        document.getElementById('cartPgItems1').style.display = 'none';
        document.getElementById('cartPgItems2').style.display = 'block';
    }
    // console.log(subTotal)
    document.getElementById('endCartDetail').innerHTML = ` &#8377; ${subTotal} <br>&#8377; 100 <br><br><h4>&#8377; ${subTotal + 100}</h4>`
    let apiData = await getData();
    for (let product of apiData) {
        if (product.id == id && product.productsizeSelected==size)
            await deleteProFromApi(product)
            await cartNotification()
    }
}

function whatSize(event) {
    productsizeSelected = event.target.value;
    isSizeSelected = true;
}


function whatQuantity(event) {
    requiredQty = event.target.value
}



function welcome() {
    setTimeout(() => location.href = "index.html", 1500)
}

async function wishlisted(event) {

    if(!sessionDetails.isUserSignedIn){
        let signinModal = document.getElementById('signinModal')
        await updateRedirectionStatus(true)
        signinModal.innerHTML = `<br><i class="fa-solid fa-circle-exclamation text-warning pe-0 me-1"></i> <span>Sign-in Required</span><br>
                    <p class="shortMsg" style="display:inline-block; padding-left:27px;">Can't create wishlist before signing-in</p><br>`
                    let myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
                    myModal.show();
            setTimeout(() => {myModal.hide();}, 3200);
    }
    else{
        let thisProductId = event.target.id.slice(2);
        let thisProduct = allProducts.find((pro) => thisProductId === pro.id)
        let i2 = document.getElementById('i2' + thisProductId)
        let h2 = document.getElementById('h2' + thisProductId)
    
        if (i2.classList[2] == 'wishlisted' || h2.classList[1] == "wishlisted") {
            i2.classList.remove('wishlisted');
            h2.classList.remove('wishlisted');
            h2.style.color = "#f9f9f9";
            h2.style.backgroundColor = "#000000";

            let wishlist = sessionDetails.userDetail.wishlisted
            sessionDetails.userDetail.wishlisted = wishlist.filter((e)=> e.id != thisProductId)
        }
        else {
            h2.classList.add('wishlisted');
            i2.classList.add('wishlisted');
            h2.style.color = "red";
            h2.style.backgroundColor = "#000000";
            sessionDetails.userDetail.wishlisted.push(thisProduct)
        }

        await updateSignedUserDetail(sessionDetails.userDetail)
        await updateUserDb(sessionDetails.userDetail)
    }
}

async function checkForUserLoggedIn(){
    
    let signinModal = document.getElementById('signinModal')
    await getSessionDetails()
    if(!sessionDetails.isUserSignedIn){
        await updateRedirectionStatus(true)
        signinModal.innerHTML = `<br><i class="fa-solid fa-circle-exclamation text-warning pe-0 me-1"></i> <span>Sign-in Required</span><br>
                    <p class="shortMsg" style="display:inline-block; padding-left:27px;">Redirecting to Sign in page</p><br>`
                    let myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
                    myModal.show();
            setTimeout(() => {location.href = 'signIn.html'}, 3000);
    }
    else{
        location.href = 'checkout.html'
    }
}


async function placeOrder() {
    saveProfileDetails()
    let order = ''
    let subTotal = 0
    let apiList = await getData()
    for (let product of apiList) {
        order += product.requiredQty + ' x ' + product.Name + " " + product.type + "(" + product.productsizeSelected + "), ";
        subTotal += (product.newPrice * product.requiredQty);
    }
    let orderNo = (100000 + Math.random() * 900000).toFixed(0);
    order = order.slice(0, -2)
    clearCartList()

    let dNo = document.getElementById('dNo')
    let add1 = document.getElementById('add1')
    let add2 = document.getElementById('add2')
    let city = document.getElementById('city')
    let state = document.getElementById('state')
    let pin = document.getElementById('pin')
    let paymethod1 = document.getElementById('p1')
    let paymethod2 = document.getElementById('p2')
    let paymethod3 = document.getElementById('p3')
    let paymethod4 = document.getElementById('p4')
    let address = '';
    let modeOfpay = ''

    if (paymethod1.checked)
        modeOfpay = paymethod1.value
    else if (paymethod2.checked)
        modeOfpay = paymethod2.value
    else if (paymethod3.checked)
        modeOfpay = paymethod3.value
    else if (paymethod4.checked)
        modeOfpay = paymethod4.value

    if (add2.value != '')
        address = `${dNo.value}, ${add1.value}, ${add2.value}, ${city.value}, ${state.value}-${pin.value}`
    else
        address = `${dNo.value}, ${add1.value}, ${city.value}, ${state.value}-${pin.value}`


    document.getElementById('orderSummary').innerHTML = `<h6><b> Order ID : <span style="color: rgb(255, 166, 0);">TFY${orderNo}</span> </b></h6><br>
                                                        <h6><b> Order:</b> ${order}</h6><br>
                                                        <h6><b> Address:</b> ${address}</h6><br>
                                                        <h6><b> Totol Amount:</b> &#8377; ${subTotal} + &#8377; 100(Delivery)</h6><br>
                                                        <h6><b> Mode of Payment:</b> ${modeOfpay}</h6>`

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Juy", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const d = new Date();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    let x = Math.floor((Math.random() * 10) + 1);
    let day = d.getDay()+x;
    if(d.getDay()+x>28)
        day = d.getDay();
    let date = `${day} ${month} ${year}`
    if(sessionDetails.isUserSignedIn){
        await saveOrderHistory(order,address,orderNo,subTotal,date) 
    }
}

function accountPage(){
    if(sessionDetails.isUserSignedIn)
        location.href = 'account.html'
    else
        location.href = 'signIn.html'    
}

async function InitiateLogout(){
    let signinModal = document.getElementById('signinModal')
        signinModal.innerHTML = `<br><i class="fa-solid fa-circle-exclamation text-info pe-0 me-1"></i> <span>Account Logged-out</span><br>
                    <p class="shortMsg" style="display:inline-block; padding-left:27px;">See you soon buddy :)</p><br>`
                    let myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
                    myModal.show();
    await updateUserSignedInStatus(false)
    await updateSignedUserDetail({})
    setTimeout(() => {location.href = 'signIn.html'}, 2000);
}

async function loadAccountPage(event){
    window.scroll(0,0)
    let signinModal = document.getElementById('signinModal')

    signinModal.innerHTML = `<div class="spinner-border text-warning spinner-border-m" role="status">
    <span class="visually-hidden"></span>
  </div>&ensp;&ensp;<span style="position:relative;top:-6px">Please Wait&emsp;</span><br>`
                let myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
                myModal.show();
                setTimeout(() => {myModal.hide();}, 700);
    let user = await getSessionDetails()
    // console.log(user)
    document.getElementById('accountPgContainer').innerHTML=`
    <div class="catagory">
        <div class="settingsList">
          <div class="pb-5 mb-3">
            <h4>Hi&nbsp; ${user.userDetail.userName}!</h4>
            <span class=" pb-3">${user.userDetail.mailId}</span>
          </div>
          <h3 class="pb-3 text-black">Settings</h3>
          <h5 onclick="createAccountPageContent(event)">Profile</h5>
          <h5 onclick="createAccountPageContent(event)">Account Settings</h5>
          <h5 onclick="createAccountPageContent(event)">Your Orders</h5>
          <h5 onclick="createAccountPageContent(event)">Delete Account</h5>
          <h5 class="logOut" onclick="InitiateLogout()">Log out</h5>
        </div>

      </div>
      <div class="overview settingsContainer" id="AccPgContent" style="border-left:1px solid rgb(181, 181, 181) ;">
         <p class="selectSettingsMsg">Select the specific settings</p>
      </div>
    `
    await getSessionDetails()
    await getUserDb()
    await updateRedirectionStatus(false)
}

async function PopulateCheckoutPage(){
    window.scroll(0,0)
    await getSessionDetails()
    await getUserDb()
    document.getElementById('name').value = sessionDetails.userDetail.userName
    document.getElementById('mailID').value = sessionDetails.userDetail.mailId
    document.getElementById('pNo').value = sessionDetails.userDetail.mobile
    document.getElementById('dNo').value = sessionDetails.userDetail.address.doorNo
    document.getElementById('add1').value = sessionDetails.userDetail.address.addressLine1
    document.getElementById('add2').value = sessionDetails.userDetail.address.addressLine2
    document.getElementById('city').value = sessionDetails.userDetail.address.city
    document.getElementById('state').value = sessionDetails.userDetail.address.state
    document.getElementById('country').value = sessionDetails.userDetail.address.country
    document.getElementById('pin').value = sessionDetails.userDetail.address.pin
}
async function deleteUser(){
    let typedPassword = document.getElementById('PassToDelete').value
    if(typedPassword == sessionDetails.userDetail.password){
        await deleteUserFromDB()
        await updateSignedUserDetail({})
        await updateUserSignedInStatus(false)
        let signinModal = document.getElementById('signinModal')
        signinModal.innerHTML = `<br><i class="fa-solid fa-circle-check"></i> <span>Successfully Deleted</span><br>
                    <p class="shortMsg" style="display:inline-block; padding-left:27px;">Redirecting to Home page</p><br><br>`
                    let myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
                    myModal.show();
                    setTimeout(() => {location.href = 'index.html'}, 2800);
                }
                else{
                    let signinModal = document.getElementById('signinModal')
                    signinModal.innerHTML = `<br><i class="fa-solid fa-circle-xmark" style="color:red;"></i> <span>Wrong Password</span><br>
                    <p class="shortMsg" style="display:inline-block; padding-left:27px;">Please enter your correct password</p><br><br>`
                    let myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
                    myModal.show();
                    setTimeout(() => {myModal.hide();}, 4000);
                    
    }
}

async function saveOrderHistory(order,address,orderNo,subTotal,date){
    // let data = await getSessionDetails()
    let orderHistory = {order,address,orderNo,subTotal,date}
    sessionDetails.userDetail.orderHistory.push(orderHistory)
    await updateSignedUserDetail(sessionDetails.userDetail)
    await updateUserDb(sessionDetails.userDetail)
 }

 let cancelBtnId;
 function cancelOrder(event){
    cancelBtnId = "TFY"+event.target.id
    let signinModal = document.getElementById('signinModal')
    signinModal.innerHTML = `<br><i class="fa-solid fa-circle-exclamation text-warning pe-0 me-1"></i> <span>Confirm Cancellation</span><br><br>
                <button class='btn btn-dark w-25' data-bs-dismiss="modal" aria-label="Close" onclick="yesCancel(event)">Yes</button>&emsp;<button class='btn btn-dark w-25' data-bs-dismiss="modal" aria-label="Close"">No</button><br><br>`
                let myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
                myModal.show();
 }

 function yesCancel(){
     document.getElementById(cancelBtnId).innerHTML=''
     let signinModal = document.getElementById('signinModal')
     let myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
     setTimeout(() => {signinModal.innerHTML = `<br><i class="fa-solid fa-circle-check"></i> <span>Order Cancelled</span><br><br>`;myModal.show(); }, 500);
     setTimeout(() => {myModal.hide(); }, 2000);
     sessionDetails.userDetail.orderHistory = sessionDetails.userDetail.orderHistory.filter((e)=>e.orderNo!=cancelBtnId.slice(3))
     updateUserDb(sessionDetails.userDetail)
     if(sessionDetails.userDetail.orderHistory.length==0)
        document.getElementById('youOrders').innerHTML =`<p class="selectSettingsMsg" style="padding-top:130px;">Your Haven't ordered anything yet</p>`
 }











// hamburger menu open/close

const bar = document.getElementById('bar');
const nav = document.getElementById('nav');
const close = document.getElementById('close')
if (bar)
    bar.addEventListener('click', () => nav.classList.add('active'));
if (close)
    close.addEventListener('click', () => nav.classList.remove('active'))


/////////////////////////////////////////////////// functionalities using apis ////////////////////////////////////////////////


async function createProductApiData(thisProduct) {
    try{
        thisProduct.forCart = true;
    thisProduct.forWishlist = false;
    thisProduct.productsizeSelected = productsizeSelected;
    thisProduct.isSizeSelected = isSizeSelected;
    thisProduct.requiredQty = requiredQty;
    await fetch(ProductApiUrl, {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(thisProduct)
    })
    }catch(err){console.log(err)}
}
async function updateProductApiData(thisProduct,id) {
   try{
    thisProduct.requiredQty = requiredQty;
    await fetch(`${ProductApiUrl}/${id}`, {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(thisProduct)
    })
   }catch(err){console.log(err)}
}
async function createWishlistApiData(thisProduct) {
    try{
        thisProduct.forCart = false;
    thisProduct.forWishlist = true;
    await fetch(ProductApiUrl, {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(thisProduct)
    })
    }catch(err){console.log(err)}
}

async function getData() {
    try{
        let data = await fetch(ProductApiUrl)
    let res = await data.json()
    apiProductList = res;
    return res
    }catch(err){console.log(err)}
}
getData()


async function clearCartList() {
    try{
        for (let pro of apiProductList) {
            if (pro.forCart)
                deleteData(pro)
        }
    
        async function deleteData(pro) {
            await fetch(ProductApiUrl + "/" + pro.apiId, {
                method: "DELETE",
                headers: { "content-Type": "application/json" },
            })
        }
    }catch(err){console.log(err)}
}

async function deleteProFromApi(pro) {
    try{
        await fetch(ProductApiUrl + "/" + pro.apiId, {
            method: "DELETE",
            headers: { "content-Type": "application/json" },
        })
    }catch(err){console.log(err)}
}


async function cartNotification() {
    try {
        let apiList = await getData();
        let tempStorage = [];
        for (product of apiList) {
            if (product.forCart)
                tempStorage.push(product)
        }
        if (tempStorage.length == 0) {
            document.getElementById('cartNofitication').innerHTML = ''
            document.getElementById('cartNofitication2').innerHTML = ''
        } else {
            document.getElementById('cartNofitication').innerHTML = tempStorage.length
            document.getElementById('cartNofitication2').innerHTML = tempStorage.length
        }

    } catch (err) {console.log(err) }
}

cartNotification();


async function updateRedirectionStatus(status) {
    try {
        sessionDetails.isRedirected = status;
        // await fetch("https://63676bfdf5f549f052d5229f.mockapi.io/SessionDetails/1", {
        //     method: "PUT", 
        //     headers: { "content-Type": "application/json" },
        //     body: JSON.stringify(sessionDetails)
        // })
        localStorage.setItem('sessionDetails', JSON.stringify(sessionDetails));
    } catch (err) { console.log(err) }
}

async function updateUserSignedInStatus(status) {
    try {
        sessionDetails.isUserSignedIn = status;
        // await fetch("https://63676bfdf5f549f052d5229f.mockapi.io/SessionDetails/1", {
        //     method: "PUT",
        //     headers: { "content-Type": "application/json" },
        //     body: JSON.stringify(sessionDetails)
        // })
        localStorage.setItem('sessionDetails', JSON.stringify(sessionDetails));
    } catch (err) { console.log(err) }
}

async function updateSignedUserDetail(details) {
    try {
        sessionDetails.userDetail = details;
        // await fetch("https://63676bfdf5f549f052d5229f.mockapi.io/SessionDetails/1", {
        //     method: "PUT",
        //     headers: { "content-Type": "application/json" },
        //     body: JSON.stringify(sessionDetails)
        // })
        localStorage.setItem('sessionDetails', JSON.stringify(sessionDetails));
    } catch (err) { console.log(err) }
}

async function getSessionDetails() {
    try {
        // let data = await fetch("https://63676bfdf5f549f052d5229f.mockapi.io/SessionDetails")
        // let res = await data.json()
        // sessionDetails = res[0]
        sessionDetails = JSON.parse(localStorage.getItem('sessionDetails')) || {};
        return sessionDetails;
    }
    catch (err) { console.log(err) }
}

async function deleteUserFromDB(){
    try{
        await fetch(userDbUrl+"/" + sessionDetails.userDetail.id, {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
    })
    }catch(err){console.log(err)}
}

async function updateUserDb(details) {
    try{
        await fetch(`${userDbUrl}/${details.id}`, {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(details)
    })
    }catch(err){console.log(err)}
}

async function getUserDb() {
   try{
    let data = await fetch(userDbUrl)
    let res = await data.json()
    for(let user of res){
        if(user.mailId == sessionDetails.userDetail.mailId){
            await updateSignedUserDetail(user)
            break;
        }
    }
   }catch(err){console.log(err)}
    // console.log('in user db fetch')
}






// updateUserDbb()


// async function updateUserDbb() {


//     sessionDetails.userDetail.wishlisted=[]
//     sessionDetails.userDetail.orderHistory=[]
//     await fetch(`https://63676bfdf5f549f052d5229f.mockapi.io/UserDb/4`, {
//         method: "PUT",
//         headers: { "content-Type": "application/json" },
//         body: JSON.stringify(sessionDetails.userDetail)
//     })
// }









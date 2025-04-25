
import React from "react"


import Goa1 from "./goa_3.jpg"
import Goa2 from "./goa_4.jpg"
import Goa3 from "./goa_6.jpg"
import Goa4 from "./goah.avif"
import Goa5 from "./Goa_.jpg"
import Goa6 from "./Goa_2.jpg"
import Hyd1 from "./novotel_hyd.png"
import Hyd2 from "./lust_greenery_hyd.jpg"
import Banglr1 from "./lalit-ashok-bangalore.png"
import Banglr2 from "./The-Tamarind_banglr.jpg"
import Banglr3 from "./Fiesta_resort_banglr.jpeg"
import Mumbai1 from "./tajs_mumbai.avif"
import Mumbai2 from "./bomxr_mumbai.jpg"
import Mumbai3 from "./Bayview_lawns_mumbai.avif"
import Delhi1 from  "./delhi_hall.avif"
import Delhi2 from  "./delhi_halls.avif"
import Delhi3 from  "./delhi_halls_2.jpeg"
import Delhi4 from  "./bptp_amstoria_delhi.avif"
import Kerala1 from "./kerala.png"
import Kerala2 from "./kerala3.jpg"
import Kerala3 from "./kerala_2.jpeg"
import Kerala4 from "./kochi_kerala.jpg"
import Jaipur1 from "./jaipur.jpg"
import Jaipur2 from "./jaipur2.jpg"









export const assets = {
    Goa1,
    Goa2,
    Goa3,
    Goa4,
    Goa5,
    Goa6,
    Hyd1,
    Hyd2,
    Banglr1,
    Banglr2,
    Banglr3,
    Mumbai1,
    Mumbai2,
    Mumbai3,
    Delhi1,
    Delhi2,
    Delhi3,
    Delhi4,
    Kerala1,
    Kerala2,
    Kerala3,
    Kerala4,
    Jaipur1,
    Jaipur2
}

// export const specialityData = [
//     {
//         speciality: 'General physician',
//         image: Goa1
//     },
//     {
//         speciality: 'Gynecologist',
//         image: Goa2
//     },
//     {
//         speciality: 'Dermatologist',
//         image: Goa3
//     },
//     {
//         speciality: 'Pediatricians',
//         image: Goa4
//     },
//     {
//         speciality: 'Neurologist',
//         image: Goa5
//     },
//     {
//         speciality: 'Gastroenterologist',
//         image: Gastroenterologist
//     },
// ]



export const venues = [



            {
                _id: 'venue3',
                name: 'Royal Garden',
                image: Hyd1,
                city: 'Hyderabad',
                capacity: '300 Guests',
                facilities: ['Outdoor Setting', 'Decor Services', 'Live Music Arrangement'],
                about: 'Experience the charm of an outdoor wedding at the Royal Garden, surrounded by lush greenery and elegant decor.',
                bookingPrice: 4000,
                address: {
                    line1: '37th Cross, Richmond',
                    line2: 'Circle, Ring Road, London'
                }
            },
            {
                _id: 'venue4',
                name: 'Ocean View Banquet',
                image: Hyd2,
                city: 'Hyderabad',
                capacity: '400 Guests',
                facilities: ['Sea View', 'Indoor and Outdoor Options', 'Custom Lighting'],
                about: 'Celebrate your wedding with a breathtaking view of the ocean at the Ocean View Banquet, offering versatile spaces for your ceremony and reception.',
                bookingPrice: 4500,
                address : {
                    line1: '47th Cross, Richmond',
                    line2: 'Circle, Ring Road, London'
                }
            },
            {
                _id: 'venue5',
                name: 'Luxury Pavilion',
                image: Banglr1,
                city: 'Bengaluru',
                capacity: '600 Guests',
                facilities: ['VIP Lounge', 'Helipad', 'Grand Ballroom'],
                about: 'The Luxury Pavilion is the epitome of elegance and sophistication, perfect for a grand wedding celebration.',
                bookingPrice: 6000,
                address: {
                    line1: '57th Cross, Richmond',
                    line2: 'Circle, Ring Road, London'
                }
            },
            {
                _id: 'venue6',
                name: 'Sunset Banquet Hall',
                image: Banglr2,
                city: 'Bengaluru',
                capacity: '350 Guests',
                facilities: ['Sunset View', 'Customizable Layout', 'Professional Staff'],
                about: 'The Sunset Banquet Hall offers a romantic backdrop for your wedding with stunning views and exceptional service.',
                bookingPrice: 4700,
                address: {
                    line1: '57th Cross, Richmond',
                    line2: 'Circle, Ring Road, London'
                }
            },
            {
                _id: 'venue7',
                name: 'Grand Palace Hall',
                image: Banglr3,
                city: 'Bengaluru',
                capacity: '500 Guests',
                facilities: ['Air Conditioning', 'Parking', 'Catering Services'],
                about: 'The Grand Palace Hall offers a luxurious setting for your wedding with state-of-the-art facilities and a dedicated team to ensure your special day is perfect.',
                bookingPrice: 5000,
                address: {
                    line1: '17th Cross, Richmond',
                    line2: 'Circle, Ring Road, London'
                }
            },
            {
                _id: 'venue8',
                name: 'Royal Garden',
                image: Mumbai1,
                city: 'Mumbai',
                capacity: '300 Guests',
                facilities: ['Outdoor Setting', 'Decor Services', 'Live Music Arrangement'],
                about: 'Experience the charm of an outdoor wedding at the Royal Garden, surrounded by lush greenery and elegant decor.',
                bookingPrice: 4000,
                address: {
                    line1: '27th Cross, Richmond',
                    line2: 'Circle, Ring Road, London'
                }
            },
            {
                _id: 'venue9',
                name: 'Ocean View Banquet',
                image: Mumbai2,
                city: 'Mumbai',
                capacity: '400 Guests',
                facilities: ['Sea View', 'Indoor and Outdoor Options', 'Custom Lighting'],
                about: 'Celebrate your wedding with a breathtaking view of the ocean at the Ocean View Banquet, offering versatile spaces for your ceremony and reception.',
                bookingPrice: 4500,
                address: {
                    line1: '37th Cross, Richmond',
                    line2: 'Circle, Ring Road, London'
                }
            },
            {
                _id: 'venue10',
                name: 'Luxury Pavilion',
                image: Mumbai3,
                city: 'Mumbai',
                capacity: '600 Guests',
                facilities: ['VIP Lounge', 'Helipad', 'Grand Ballroom'],
                about: 'The Luxury Pavilion is the epitome of elegance and sophistication, perfect for a grand wedding celebration.',
                bookingPrice: 6000,
                address: {
                    line1: '47th Cross, Richmond',
                    line2: 'Circle, Ring Road, London'
                }
            },
            {
                _id: 'venue11',
                name: 'Sunset Banquet Hall',
                image: Delhi1,
                city: 'Delhi',
                capacity: '350 Guests',
                facilities: ['Sunset View', 'Customizable Layout', 'Professional Staff'],
                about: 'The Sunset Banquet Hall offers a romantic backdrop for your wedding with stunning views and exceptional service.',
                bookingPrice: 4700,
                address: {
                    line1: '57th Cross, Richmond',
                    line2: 'Circle, Ring Road, London'
                }
            },
            {
                _id: 'venue12',
                name: 'Grand Palace Hall',
                image: Delhi2,
                city: 'Delhi',
                capacity: '500 Guests',
                facilities: ['Air Conditioning', 'Parking', 'Catering Services'],
                about: 'The Grand Palace Hall offers a luxurious setting for your wedding with state-of-the-art facilities and a dedicated team to ensure your special day is perfect.',
                bookingPrice: 5000,
                address: {
                    line1: '57th Cross, Richmond',
                    line2: 'Circle, Ring Road, London'
                }
            },
            {
                _id: 'venue13',
                name: 'Royal Garden',
                image: Delhi3,
                city: 'Delhi',
                capacity: '300 Guests',
                facilities: ['Outdoor Setting', 'Decor Services', 'Live Music Arrangement'],
                about: 'Experience the charm of an outdoor wedding at the Royal Garden, surrounded by lush greenery and elegant decor.',
                bookingPrice: 4000,
                address: {
                    line1: '17th Cross, Richmond',
                    line2: 'Circle, Ring Road, London'
                }
            },
            {
                _id: 'venue14',
                name: 'Ocean View Banquet',
                image: Delhi4,
                city: 'Delhi',
                capacity: '400 Guests',
                facilities: ['Sea View', 'Indoor and Outdoor Options', 'Custom Lighting'],
                about: 'Celebrate your wedding with a breathtaking view of the ocean at the Ocean View Banquet, offering versatile spaces for your ceremony and reception.',
                bookingPrice: 4500,
                address: {
                    line1: '27th Cross, Richmond',
                    line2: 'Circle, Ring Road, London'
                }
            },
            {
                _id: 'venue15',
                name: 'Luxury Pavilion',
                image: Jaipur1,
                city: 'Jaipur',
                capacity: '600 Guests',
                facilities: ['VIP Lounge', 'Helipad', 'Grand Ballroom'],
                about: 'The Luxury Pavilion is the epitome of elegance and sophistication, perfect for a grand wedding celebration.',
                bookingPrice: 6000,
                address: {
                    line1: '37th Cross, Richmond',
                    line2: 'Circle, Ring Road, London'
                }
            },
            {
                _id: 'venue16',
                name: 'Sunset Banquet Hall',
                image: Jaipur2,
                city: 'Jaipur',
                capacity: '350 Guests',
                facilities: ['Sunset View', 'Customizable Layout', 'Professional Staff'],
                about: 'The Sunset Banquet Hall offers a romantic backdrop for your wedding with stunning views and exceptional service.',
                bookingPrice: 4700,
                address: {
                    line1: '37th Cross, Richmond',
                    line2: 'Circle, Ring Road, London'
                }
            },
            {
                _id: 'venue17',
                name: 'Grand Palace Hall',
                image: Kerala1,
                city: 'Kerala',
                capacity: '500 Guests',
                facilities: ['Air Conditioning', 'Parking', 'Catering Services'],
                about: 'The Grand Palace Hall offers a luxurious setting for your wedding with state-of-the-art facilities and a dedicated team to ensure your special day is perfect.',
                bookingPrice: 5000,
                address: {
                    line1: '37th Cross, Richmond',
                    line2: 'Circle, Ring Road, London'
                }
            }
        ,
    
    
            {
                _id: 'venue18',
                name: 'Sunset Banquet Hall',
                image: Kerala2,
                city: 'Kerala',
                capacity: '350 Guests',
                facilities: ['Sunset View', 'Customizable Layout', 'Professional Staff'],
                about: 'The Sunset Banquet Hall offers a romantic backdrop for your wedding with stunning views and exceptional service.',
                bookingPrice: 4700,
                address: {
                    line1: '37th Cross, Richmond',
                    line2: 'Circle, Ring Road, London'
                }
            },
            {
                _id: 'venue19',
                name: 'Grand Palace Hall',
                image: Kerala3,
                city: 'Kerala',
                capacity: '500 Guests',
                facilities: ['Air Conditioning', 'Parking', 'Catering Services'],
                about: 'The Grand Palace Hall offers a luxurious setting for your wedding with state-of-the-art facilities and a dedicated team to ensure your special day is perfect.',
                bookingPrice: 5000,
                address: {
                    line1: '37th Cross, Richmond',
                    line2: 'Circle, Ring Road, London'
                }
            },
            {
                _id: 'venue20',
                name: 'Royal Garden',
                image: Kerala4,
                city: 'Kerala',
                capacity: '300 Guests',
                facilities: ['Outdoor Setting', 'Decor Services', 'Live Music Arrangement'],
                about: 'Experience the charm of an outdoor wedding at the Royal Garden, surrounded by lush greenery and elegant decor.',
                bookingPrice: 4000,
                address: {
                    line1: '37th Cross, Richmond',
                    line2: 'Circle, Ring Road, London'
                }
            }
    ,
    {
        _id: 'venue21',
        name: 'Grand Palace Hall',
        image: Goa1,
        city: 'Goa',
        capacity: '500 Guests',
        facilities: ['Air Conditioning', 'Parking', 'Catering Services'],
        about: 'The Grand Palace Hall offers a luxurious setting for your wedding with state-of-the-art facilities and a dedicated team to ensure your special day is perfect.',
        bookingPrice: 5000,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'venue22',
        name: 'Royal Garden',
        image: Goa2,
        city: 'Goa',
        capacity: '300 Guests',
        facilities: ['Outdoor Setting', 'Decor Services', 'Live Music Arrangement'],
        about: 'Experience the charm of an outdoor wedding at the Royal Garden, surrounded by lush greenery and elegant decor.',
        bookingPrice: 4000,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'venue23',
        name: 'Ocean View Banquet',
        image: Goa3,
        city: 'Goa',
        capacity: '400 Guests',
        facilities: ['Sea View', 'Indoor and Outdoor Options', 'Custom Lighting'],
        about: 'Celebrate your wedding with a breathtaking view of the ocean at the Ocean View Banquet, offering versatile spaces for your ceremony and reception.',
        bookingPrice: 4500,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'venue24',
        name: 'Luxury Pavilion',
        image: Goa4,
        city: 'Goa',
        capacity: '600 Guests',
        facilities: ['VIP Lounge', 'Helipad', 'Grand Ballroom'],
        about: 'The Luxury Pavilion is the epitome of elegance and sophistication, perfect for a grand wedding celebration.',
        bookingPrice: 6000,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'venue25',
        name: 'Sunset Banquet Hall',
        image: Goa5,
        city: 'Goa',
        capacity: '350 Guests',
        facilities: ['Sunset View', 'Customizable Layout', 'Professional Staff'],
        about: 'The Sunset Banquet Hall offers a romantic backdrop for your wedding with stunning views and exceptional service.',
        bookingPrice: 4700,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    // Additional venues can be added following the same structure

    {
        _id: 'venue26',
        name: 'Sunset Banquet Hall',
        image: Goa6,
        city: 'Goa',
        capacity: '350 Guests',
        facilities: ['Sunset View', 'Customizable Layout', 'Professional Staff'],
        about: 'The Sunset Banquet Hall offers a romantic backdrop for your wedding with stunning views and exceptional service.',
        bookingPrice: 4700,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
]
const db = {
    employees: [
      {
        id: 1,
        first_name: 'Sebastian',
        last_name: 'Eschweiler',
        email: 'sebastian@codingthesmartway.com'
      },
      {
        id: 2,
        first_name: 'Steve',
        last_name: 'Palmer',
        email: 'steve@codingthesmartway.com'
      },
      {
        id: 3,
        first_name: 'Ann',
        last_name: 'Smith',
        email: 'ann@codingthesmartway.com'
      }
    ],
    shirts: [
      {
        id: 1,
        shirtName: 'Long Polo',
        shirtColor: [
          'Black',
          'White',
          'Hawaiian',
          'Blue',
          'Yellow',
          'Red',
          'Green'
        ],
        shirtSize: [
          'XXS',
          'XS',
          'S',
          'M',
          'L',
          'XL',
          'XXL'
        ],
        price: 10.99
      },
      {
        id: 2,
        shirtName: 'V-Neck Cuff',
        shirtColor: [
          'Black',
          'White',
          'Hawaiian',
          'Blue',
          'Yellow',
          'Red',
          'Green'
        ],
        shirtSize: [
          'XXS',
          'XS',
          'S',
          'M',
          'L',
          'XL',
          'XXL'
        ],
        price: 9.99
      },
      {
        id: 3,
        shirtName: 'Patch Tee',
        shirtColor: [
          'Black',
          'White',
          'Hawaiian',
          'Blue',
          'Yellow',
          'Red',
          'Green'
        ],
        shirtSize: [
          'XXS',
          'XS',
          'S',
          'M',
          'L',
          'XL',
          'XXL'
        ],
        price: 13.99
      },
      {
        id: 4,
        shirtName: 'High Tee',
        shirtColor: [
          'Black',
          'White',
          'Hawaiian',
          'Blue',
          'Yellow',
          'Red',
          'Green'
        ],
        shirtSize: [
          'XXS',
          'XS',
          'S',
          'M',
          'L',
          'XL',
          'XXL'
        ],
        price: 19.99
      },
      {
        id: 5,
        shirtName: 'Low Tee',
        shirtColor: [
          'Black',
          'White',
          'Hawaiian',
          'Blue',
          'Yellow',
          'Red',
          'Green'
        ],
        shirtSize: [
          'XXS',
          'XS',
          'S',
          'M',
          'L',
          'XL',
          'XXL'
        ],
        price: 20.99
      },
      {
        id: 6,
        shirtName: 'Round Cut',
        shirtColor: [
          'Black',
          'White',
          'Hawaiian',
          'Blue',
          'Yellow',
          'Red',
          'Green'
        ],
        shirtSize: [
          'XXS',
          'XS',
          'S',
          'M',
          'L',
          'XL',
          'XXL'
        ],
        price: 16.99
      },
      {
        id: 7,
        shirtName: 'Short Cut',
        shirtColor: [
          'Black',
          'White',
          'Hawaiian',
          'Blue',
          'Yellow',
          'Red',
          'Green'
        ],
        shirtSize: [
          'XXS',
          'XS',
          'S',
          'M',
          'L',
          'XL',
          'XXL'
        ],
        price: 12.99
      },
      {
        id: 8,
        shirtName: 'Button Trim',
        shirtColor: [
          'Black',
          'White',
          'Hawaiian',
          'Blue',
          'Yellow',
          'Red',
          'Green'
        ],
        shirtSize: [
          'XXS',
          'XS',
          'S',
          'M',
          'L',
          'XL',
          'XXL'
        ],
        price: 7.99
      },
      {
        id: 9,
        shirtName: 'High Top Cut',
        shirtColor: [
          'Black',
          'White',
          'Hawaiian',
          'Blue',
          'Yellow',
          'Red',
          'Green'
        ],
        shirtSize: [
          'XXS',
          'XS',
          'S',
          'M',
          'L',
          'XL',
          'XXL'
        ],
        price: 5.99
      }
    ],
    shoes: [
      {
        id: 1,
        shoeName: 'Nike Run',
        shoeColor: [
          'Street',
          'Green',
          'Rainbow',
          'Panther',
          'Cammo',
          'Sports',
          'Electric'
        ],
        shoeSize: [
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13
        ],
        price: 59.99
      },
      {
        id: 2,
        shoeName: 'Asics Treader',
        shoeColor: [
          'Street',
          'Green',
          'Rainbow',
          'Panther',
          'Cammo',
          'Sports',
          'Electric'
        ],
        shoeSize: [
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13
        ],
        price: 49.99
      },
      {
        id: 3,
        shoeName: 'Reebok Feet',
        shoeColor: [
          'Street',
          'Green',
          'Rainbow',
          'Panther',
          'Cammo',
          'Sports',
          'Electric'
        ],
        shoeSize: [
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13
        ],
        price: 99.99
      },
      {
        id: 4,
        shoeName: 'Addidias Hiker',
        shoeColor: [
          'Street',
          'Green',
          'Rainbow',
          'Panther',
          'Cammo',
          'Sports',
          'Electric'
        ],
        shoeSize: [
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13
        ],
        price: 39.99
      },
      {
        id: 5,
        shoeName: 'Maran AmBUlates',
        shoeColor: [
          'Street',
          'Green',
          'Rainbow',
          'Panther',
          'Cammo',
          'Sports',
          'Electric'
        ],
        shoeSize: [
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13
        ],
        price: 149.99
      },
      {
        id: 6,
        shoeName: 'House Sprinters',
        shoeColor: [
          'Street',
          'Green',
          'Rainbow',
          'Panther',
          'Cammo',
          'Sports',
          'Electric'
        ],
        shoeSize: [
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13
        ],
        price: 89.99
      },
      {
        id: 7,
        shoeName: 'Dukang Ionics',
        shoeColor: [
          'Street',
          'Green',
          'Rainbow',
          'Panther',
          'Cammo',
          'Sports',
          'Electric'
        ],
        shoeSize: [
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13
        ],
        price: 239.99
      },
      {
        id: 8,
        shoeName: 'Yeezy\'s',
        shoeColor: [
          'Street',
          'Green',
          'Rainbow',
          'Panther',
          'Cammo',
          'Sports',
          'Electric'
        ],
        shoeSize: [
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13
        ],
        price: 239.99
      },
      {
        id: 9,
        shoeName: 'Fetchwear Black Opal',
        shoeColor: [
          'Black',
          'White',
          'Hawaiian',
          'Blue',
          'Yellow',
          'Red',
          'Green'
        ],
        shoeSize: [
          'XXS',
          'XS',
          'S',
          'M',
          'L',
          'XL',
          'XXL'
        ],
        price: 74.99
      }
    ]
  }

  export default db;
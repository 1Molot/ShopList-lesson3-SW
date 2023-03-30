


const newStudents: WholeSvetaType = {
    Sveta: [
        {
            heir: 'long',
            arms: 2,
            legs: 2,
            kids: [
                {
                    Piter: {
                        age: 22,
                        likes: 'dogs',
                        hobbies: [
                            'futball',
                            'tenis',
                            'PC games',
                        ],
                        address: {
                            city: 'Minsk',
                            street: 'Nemiga',
                            house: 65,
                            appartment: 11,
                        },
                        need: [
                            'studie',
                            'money',
                            'car',
                            {
                                friends: [
                                    {name: 'Vasia', age: 17, statusBestFriend: true, crazyStatus: false},
                                    {name: 'Katya', age: 19, statusBestFriend: false, crazyStatus: true},
                                    {name: 'Ivan', age: 22, statusBestFriend: false, crazyStatus: true},
                                    {name: 'Max', age: 21, statusBestFriend: true, crazyStatus: false},
                                ],
                                cars: {
                                    honda: ['old', 1991, {dviglo: 'v6', haveTurbo: true}]
                                },
                            },

                        ]
                    },

                }
            ]

        }
    ]
}
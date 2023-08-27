const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const words = [
  {
    civile: 'Bouteille',
    impostor: 'Gourde'
  },
  {
    civile: 'Thon',
    impostor: 'Saumon'
  },
  {
    civile: 'Bloc-notes',
    impostor: 'Papier'
  },
  {
    civile: 'Escalier',
    impostor: 'Ascenseur'
  },
  {
    civile: 'Clown',
    impostor: 'Comédien'
  },
  {
    civile: 'Escargot',
    impostor: 'Limace'
  },
  {
    civile: 'Adidas',
    impostor: 'Nike'
  },
  {
    civile: 'Cafétéria',
    impostor: 'Restaurant'
  },
  {
    civile: 'Pneu',
    impostor: 'Roue'
  },
  {
    civile: 'Chauffage',
    impostor: 'Four'
  },
  {
    civile: 'Confucius',
    impostor: 'Boudha'
  },
  {
    civile: 'Ail',
    impostor: 'Echalotte'
  },
  {
    civile: 'Stevie Wonder',
    impostor: 'Ray Charles'
  },
  {
    civile: 'Wasabi',
    impostor: 'Piment'
  }
]

const main = async () => {
  console.log('🌱 Start seeding...')
  for (const word of words) {
    await prisma.words.create({
      data: word
    })
  }
  console.log('🌳 Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect
    process.exit(1)
  })

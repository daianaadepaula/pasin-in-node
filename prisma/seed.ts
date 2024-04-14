import { prisma } from './../src/lib/prisma';

async function seed() {
	await prisma.event.create({
		data: {
			id: 'cf61bdca-abe4-4418-96b5-c63875915e0b',
			title: 'Unite Summit',
			slug: 'unite-summit',
			details: 'Um evento para devs apaixonados(as) por código!',
			maximumAttendees: 120,
		}
	})
}

seed().then(() => {
	console.log('Database seeded!')
	prisma.$disconnect()
})
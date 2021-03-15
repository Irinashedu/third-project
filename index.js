// DOM elements
// const tv = document.querySelector('.tv')
// const turnOn = document.getElementById('turnOn')
// const turnOff = document.getElementById('turnOff')
// const switchChannel = document.getElementById('switchChannel')
// const switchChannelMinus = document.getElementById('switchChannelMinus')
// const btnOn = document.getElementById('btnOn')

// // DATABASE
// const tvChannel = [
// 	{
// 		id: 1,
// 		value: 'Channel 1'
// 	},
// 	{
// 		id: 2,
// 		value: 'Channel 2'
// 	},
// 	{
// 		id: 3,
// 		value: 'Channel 3'
// 	},
// 	{
// 		id: 4,
// 		value: 'Channel 4'
// 	}
// ]
// // APP VARIABLES
// let numberActiveChanel = 0

// // LOGIC Stage 1
// btnOn.onclick = function() {
// 	turnOn.classList.remove('buttonSwitch')
// }

// turnOn.onclick = function() {	
// 	turnOff.classList.remove('buttonSwitch')
// 	tv.classList.remove('tvSwitch')
// 	switchChannel.classList.remove('buttonSwitch')
// 	switchChannelMinus.classList.remove('buttonSwitch')
// 	turnOn.classList.add('buttonSwitch')

// 	// Stage 2
// 	tv.innerHTML = tvChannel[numberActiveChanel].value	
// 	numberActiveChanel++
// }

// turnOff.onclick =function() {
// 	turnOff.classList.add('buttonSwitch')
// 	tv.classList.add('tvSwitch')
// 	switchChannel.classList.add('buttonSwitch')
// 	switchChannelMinus.classList.add('buttonSwitch')
// 	turnOn.classList.remove('buttonSwitch')
// }

// switchChannel.onclick = function() {
// 	numberActiveChanel++
// 	tv.innerHTML = tvChannel[numberActiveChanel].value	
// }
// switchChannelMinus.onclick = function() {	
// 	numberActiveChanel--
// 	tv.innerHTML = tvChannel[numberActiveChanel].value	
// }
// function swithChan(operator) {
// 	numberActiveChanel = numberActiveChanel + operator
// 	tv.innerHTML = tvChannel[numberActiveChanel].value
// }


// ЗАДАЧА 1

// const startHello = document.querySelector('.alert')

// const peoples = ['Vasya', 'Lena', 'Petya']


// const peopleHello = document.createElement('div')
// peopleHello.innerHTML = `Hello, dear ${peoples[2]}`
// startHello.insertAdjacentElement('beforeEnd', peopleHello)
// insertAdjancetHTML

// const peopleHelloVas = document.createElement('div')
// peopleHelloVas.innerHTML = `Hello, dear ${peoples[0]}`
// startHello.insertAdjacentElement('beforeBegin', peopleHelloVas)

// const peopleHelloLen = document.createElement('div')
// peopleHelloLen.innerHTML = `Hello, dear ${peoples[1]}`
// startHello.insertAdjacentElement('afterend', peopleHelloLen)

// ЗАДАЧА 2

const startHello = document.querySelector('.alert')

const peoples = ['Vasya', 'Lena', 'Petya']

for (let i = 0; i < 3; i = i + 1) {

	const peopleHello = document.createElement('div')
	peopleHello.innerHTML = `Hello, dear ${peoples[i]}`
	startHello.insertAdjacentElement('afterend', peopleHello)
}





let btn = document.querySelector('#new-quote')

let quote = document.querySelector('.quote')

let person = document.querySelector('.person')

const quotes = [
    {
      quote: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
      person: 'Williams Churchill'  
    },
    {
      quote: 'Our greatest glory is not in never falling, but in rising every time we fall.',
      person: 'Confucuis'  
    },
    {
      quote: `It’s not whether you get knocked down, it’s whether you get up.`,
      person: 'Vince Lombardi'  
    },
    {
      quote: 'The only real mistake is the one from which we learn nothing.',
      person: 'Henry Ford'  
    },
    {
      quote: `I have not failed, I've just found 10,000 ways that won't work`,
      person: 'Thomas Edison'  
    },
    {
      quote: `The greatest glory in living lies not in never falling, but in rising every time we fall.`,
      person: 'Nelson Mandela'  
    },
    {
      quote: `Difficulties in life are intended to make us better, not bitter.`,
      person: 'Dan Reeves'  
    },
    {
      quote: `Simplicity is the ultimate sophistication.`,
      person: 'Leonardo da Vinci'  
    },
    {
      quote: `Out of clutter, find simplicity.`,
      person: 'Albert Einstein'  
    }
  ];

btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote

    person.innerText = quotes[random].person

})

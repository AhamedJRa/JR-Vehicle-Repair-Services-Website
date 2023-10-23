import Vue from 'vue';


const app = new Vue({
  el: '#app',
  data: {
    searchService: '',
    services: [
      { id: 'tyre-rescue', name: 'Tyre Patch Rescue', description: 'If you have a flat tire, contact us for quick tire patch rescue services.' },
      { id: 'battery-failure', name: 'Battery Failure', description: "Don't let a dead battery leave you stranded. We offer battery jumpstart and replacement services." },
      { id: 'vehicle-breakdown', name: 'vehicle-breakdown', description: "Stuck on the road? We provide prompt vehicle breakdown assistance to get you back on your way." },
      { id: 'towing-services', name: 'towing-services', description: "When your vehicle is beyond on-the-spot repair, we provide professional towing services to transport your vehicle to a trusted repair shop. Our experienced team will ensure your vehicle is handled with care and transported safely." },
      { id: 'fuel-delivery', name: 'fuel-delivery', description: "Running out of gas is never convenient. We offer quick and efficient fuel delivery services to your location. Whether you need gasoline or diesel, we've got you covered." },
      { id: 'lockout-assistance', name: 'lockout-assistance', description: "If you've locked your keys in your vehicle, don't worry. Our professional locksmiths can provide lockout assistance to get you back in your vehicle without causing damage. We understand that emergencies happen, and we're here to help." },
      { id: 'jumpstart-services', name: 'jumpstart-services', description: "A dead battery can be a frustrating situation. Our jumpstart services will quickly get your vehicle back on the road. We'll arrive with the necessary equipment to safely jumpstart your battery and ensure you're on your way in no time." },
      { id: 'safety-tips', name: 'safety-tips', description: "At Emergency Vehicle Repair Services, we care about your safety. Explore our collection of safety tips and guides to help you stay prepared and informed during emergency situations. Learn how to handle common vehicle issues, what to do in case of an accident," },
      { id: 'roadside-safety-kits', name: 'roadside-safety-kits', description: "Being prepared for emergencies is essential. We offer a range of roadside safety kits to keep in your vehicle. These kits include items like flares, reflective vests, first-aid supplies, and more. Stay safe on the road with our safety kits." },
    ],
  },
  computed: {
    filteredServices() {
      return this.services.filter(service => {
        return service.name.toLowerCase().includes(this.searchService.toLowerCase());
      });
    },
  },
  methods: {
    requestAssistance(id) {
      
    },
  },
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
  
      if (target) {
        const offsetTop = target.getBoundingClientRect().top + window.scrollY;
        
        window.scroll({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  

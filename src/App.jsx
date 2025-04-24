import { useState } from 'react';

// Placeholder images using the placeholder API
const roatanImg = "/src/assets/Roatan.jpg";
const copanImg = "/src/assets/Copan.jpg";
const picoBonitoImg="/src/assets/PicoBonito.jpg";
const snorkelImg = "/src/assets/Buseo.jpg";
const canopyImg = "/src/assets/Canopy.jpg";
const culturalImg = "/src/assets/Museo.jpg";

// Icons components remain the same
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

// Main component
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navegacion */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-blue-600">Explora Honduras</span>
              </div>
              <nav className="hidden md:ml-10 md:flex space-x-8">
                <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">Home</a>
                <a href="#destinations" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">Destinations</a>
                <a href="#activities" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">Activities</a>
                <a href="#contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">Contact</a>
              </nav>
            </div>
            <button 
              className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-100">Home</a>
              <a href="#destinations" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-100">Destinations</a>
              <a href="#activities" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-100">Activities</a>
              <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-100">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section with background image */}
      <section className="relative">
        <div className="bg-blue-600 h-96 w-full flex items-center justify-center bg-cover bg-center" style={{backgroundImage: `url(/api/placeholder/1600/900)`, backgroundBlendMode: 'overlay', backgroundColor: 'rgba(37, 99, 235, 0.7)'}}>
          <div className="text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Descubre Honduras</h1>
            <p className="text-xl text-white mb-8">Experimente la magia de America Central, Tesoro Oculto</p>
            <a href="#destinations" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
              Explore Ahora<ChevronRightIcon className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Destinations Section with images */}
      <section id="destinations" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Lugares mas visitados</h2>
            <p className="mt-4 text-lg text-gray-600">Explore los lugares mas hermosos en Honduras</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 with image */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-300 relative overflow-hidden">
                <img 
                  src={roatanImg} 
                  alt="Isla de Roatán" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Isla de Roatán</h3>
                <p className="mt-2 text-gray-600">
                  Descubra las paradisiacas playas del caribe.
                </p>
                <a href="#" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800">
                  Leer mas<span className="ml-1"><ChevronRightIcon /></span>
                </a>
              </div>
            </div>

            {/* Card 2 with image */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-300 relative overflow-hidden">
                <img 
                  src={copanImg} 
                  alt="Copán Ruinas" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Copán Ruinas</h3>
                <p className="mt-2 text-gray-600">
                  Explore la ruinas de la antigua civilizacion maya.
                </p>
                <a href="#" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800">
                  Leer mas <span className="ml-1"><ChevronRightIcon /></span>
                </a>
              </div>
            </div>

            {/* Card 3 with image */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-300 relative overflow-hidden">
                <img 
                  src={picoBonitoImg} 
                  alt="Parque Nacional Pico Bonito" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Parque Nacional Pico Bonito</h3>
                <p className="mt-2 text-gray-600">
                  Experimente los bosques, caudales, y su increible biodiversidad.
                </p>
                <a href="#" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800">
                  Leer mas <span className="ml-1"><ChevronRightIcon /></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section with images */}
      <section id="activities" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Activitidades Populares</h2>
            <p className="mt-4 text-lg text-gray-600">Experiencias inolvidables para tu aventura en Honduras</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Activity Card 1 with image */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-300 relative overflow-hidden">
                <img 
                  src={snorkelImg} 
                  alt="Buseo y snorkel" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Buseo y snorkel</h3>
                <p className="mt-2 text-gray-600">
                Descubre coloridos arrecifes de coral y fascinante vida marina en las transparentes aguas del Caribe.
                </p>
              </div>
            </div>

            {/* Activity Card 2 with image */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-300 relative overflow-hidden">
                <img 
                  src={canopyImg} 
                  alt="Canopy" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Canopy</h3>
                <p className="mt-2 text-gray-600">
                Vuela sobre frondosos doseles vegetales y disfruta de vistas impresionantes de las selvas de Honduras.
                </p>
              </div>
            </div>

            {/* Activity Card 3 with image */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-300 relative overflow-hidden">
                <img 
                  src={culturalImg} 
                  alt="Tours Culturales" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Tours Culturales</h3>
                <p className="mt-2 text-gray-600">
                Sumérgete en las tradiciones locales, la gastronomía y la vibrante cultura de Honduras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Contactenos</h2>
            <p className="mt-4 text-lg text-gray-600">¿Tienes preguntas? Estamos aquí para ayudarte a planificar tu viaje perfecto.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo Electronico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Informacion</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-4 mt-1"><PhoneIcon /></span>
                  <div>
                    <p className="text-gray-800 font-medium">Telefono</p>
                    <p className="text-gray-600">+504 1234-5678</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-4 mt-1"><MailIcon /></span>
                  <div>
                    <p className="text-gray-800 font-medium">Correo</p>
                    <p className="text-gray-600">info@hondurastourism.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-4 mt-1"><MapPinIcon /></span>
                  <div>
                    <p className="text-gray-800 font-medium">Direccion</p>
                    <p className="text-gray-600">123 Tourism Avenue, Tegucigalpa, Honduras</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Honduras Tourism</h3>
              <p className="text-gray-300">
              Tu puerta de entrada para explorar la belleza natural, la cultura y las aventuras de Honduras.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Encuentra lo que buscas.</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Inicio</a></li>
                <li><a href="#destinations" className="text-gray-300 hover:text-white">Destinos</a></li>
                <li><a href="#activities" className="text-gray-300 hover:text-white">Actividades</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Siguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <FacebookIcon />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <TwitterIcon />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-300">&copy; {new Date().getFullYear()} Honduras Tourism. Todos los derechos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
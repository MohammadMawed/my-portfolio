"use client";
import React from 'react';
import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';
import ExperienceSection from '../components/ExperienceSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import SectionTitle from '../components/SectionTitle';
import { Terminal } from 'lucide-react';
import { Coffee, Code, FileJson, Hash, Globe, Server, Database, Cpu, BrainCog, Cloud, Layers } from 'lucide-react';


export default function Portfolio() {

  const AIAssistantPreview = () => (
    <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-4 max-w-sm w-full">
        <div className="text-center mb-4 font-bold text-gray-800">AI Software Engineering Assistant</div>
        <div className="space-y-2 mb-4">
          <div className="bg-gray-100 p-2 rounded-lg flex items-center">
            <BrainCog className="text-blue-500 mr-2" />
            <div className="text-sm text-gray-800">Task Automation: +40% Efficiency</div>
          </div>
          <div className="bg-gray-100 p-2 rounded-lg flex items-center">
            <Terminal className="text-green-500 mr-2" />
            <div className="text-sm text-gray-800">Code Errors: -25%</div>
          </div>
          <div className="bg-gray-100 p-2 rounded-lg flex items-center">
            <Code className="text-purple-500 mr-2" />
            <div className="text-sm text-gray-800">Performance Improvement: +35%</div>
          </div>
        </div>
        <div className="flex justify-between">
          <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">Run Task</button>
          <button className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm">Analyze Code</button>
        </div>
      </div>
    </div>
  );

  // Sample project preview components
  const TwitterPreview = () => (
    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-4 max-w-sm w-full">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
          <div>
            <div className="font-bold text-gray-900">John Doe</div>
            <div className="text-sm text-gray-600">@johndoe</div>
          </div>
        </div>
        <p className="text-gray-800 mb-2">Just experienced the power of AI in social networking! 🤖 #AIRevolution #SocialTech</p>
        <div className="flex justify-between text-gray-500 text-sm">
          <span>❤️ 42</span>
          <span>🔁 12</span>
          <span>💬 5</span>
        </div>
      </div>
    </div>
  );

  const PureInvoicePreview = () => (
    <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-4 max-w-sm w-full">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
          <div>
            <div className="font-bold text-gray-900">Invoice #1001</div>
            <div className="text-sm text-gray-600">PureInvoice</div>
          </div>
        </div>
        <p className="text-gray-800 mb-2">
          Invoice Amount: <span className="font-bold text-emerald-500">€150.00</span>
        </p>
        <p className="text-gray-800 mb-2">
          Due Date: <span className="text-gray-500">30th Sept, 2024</span>
        </p>
        <p className="text-gray-800">
          Status: <span className="text-green-500 font-bold">Paid</span>
        </p>
        <div className="flex justify-between text-gray-500 text-sm mt-4">
          <span className="flex items-center"><Cloud className="mr-2" />Stripe</span>
          <span className="flex items-center"><Database className="mr-2" />Supabase</span>
        </div>
      </div>
    </div>
  );


  const MapPreview = () => (
    <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center p-4">
      <div className="relative w-full h-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white p-2 text-center font-bold">
          RoutePlanner
        </div>
        <div className="absolute inset-0 flex items-center justify-center mt-8">
          <div className="w-5/6 h-5/6 bg-gray-100 rounded-lg relative">
            {/* Map grid lines */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
              {[...Array(36)].map((_, i) => (
                <div key={i} className="border border-gray-300"></div>
              ))}
            </div>

            {/* Roads */}
            <div className="absolute w-full h-1 bg-yellow-400 top-1/3"></div>
            <div className="absolute w-1 h-full bg-yellow-400 left-2/3"></div>
            <div className="absolute w-full h-1 bg-yellow-400 bottom-1/4"></div>
            <div className="absolute w-1 h-full bg-yellow-400 left-1/4"></div>

            {/* Start point */}
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-md"></div>

            {/* End point */}
            <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-md"></div>

            {/* Route */}
            <svg className="absolute inset-0" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M25 25 L25 33 L42 33 L42 58 L67 58 L67 75"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeDasharray="4 2"
              />
            </svg>

            {/* Location pins */}
            <div className="absolute top-1/6 left-1/2 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-sm"></div>
            <div className="absolute top-2/3 right-1/6 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-sm"></div>
            <div className="absolute bottom-1/2 left-1/6 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-sm"></div>

            {/* Distance indicators */}
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 bg-white px-1 text-xs">2.5 km</div>
            <div className="absolute top-1/2 right-1/3 transform translate-y-1/2 bg-white px-1 text-xs">3.1 km</div>
            <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 bg-white px-1 text-xs">1.8 km</div>

            {/* Algorithm visualization */}
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white bg-opacity-80 rounded shadow-md p-2">
              <div className="text-xs font-bold mb-1">A* Algorithm</div>
              <div className="text-xxs">
                <div>f(n) = g(n) + h(n)</div>
                <div>g(n): 5.6 km</div>
                <div>h(n): 2.2 km</div>
                <div>f(n): 7.8 km</div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-2 left-2 right-2 flex justify-between">
          <button className="bg-blue-500 text-white px-2 py-1 rounded text-sm">Recalculate</button>
          <button className="bg-green-500 text-white px-2 py-1 rounded text-sm">Start Navigation</button>
        </div>
      </div>
    </div>
  );
  const ChatbotPreview = () => (
    <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-4 max-w-sm w-full">
        <div className="text-center mb-4 font-bold text-gray-800">AI Support Chatbot</div>
        <div className="space-y-2 mb-4">
          <div className="bg-gray-200 p-2 rounded-lg text-gray-800">How can I help you today?</div>
          <div className="bg-blue-100 p-2 rounded-lg text-right text-gray-800">I need help with my order.</div>
          <div className="bg-gray-200 p-2 rounded-lg text-gray-800">Certainly! Can you provide your order number?</div>
        </div>
        <div className="flex">
          <input type="text" placeholder="Type your message..." className="flex-grow p-2 border rounded-l-lg" />
          <button className="bg-blue-500 text-white p-2 rounded-r-lg">Send</button>
        </div>
      </div>
    </div>
  );

  const OrderAppPreview = () => (
    <div className="w-full h-full bg-gradient-to-br from-red-500 to-yellow-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-4 max-w-sm w-full">
        <div className="text-center mb-4 font-bold text-gray-800">OrderOps Dashboard</div>
        <div className="space-y-2 mb-4">
          <div className="bg-gray-100 p-2 rounded-lg">
            <div className="font-semibold text-gray-800">Order #1234</div>
            <div className="text-sm text-gray-600">2x Burger, 1x Fries</div>
          </div>
          <div className="bg-gray-100 p-2 rounded-lg">
            <div className="font-semibold text-gray-800">Order #1235</div>
            <div className="text-sm text-gray-600">1x Pizza, 1x Salad</div>
          </div>
          <div className="bg-gray-100 p-2 rounded-lg">
            <div className="font-semibold text-gray-800">Order #1236</div>
            <div className="text-sm text-gray-600">3x Tacos, 2x Soda</div>
          </div>
        </div>
        <button className="w-full bg-green-500 text-white p-2 rounded-lg">Process Orders</button>
      </div>
    </div>
  );


  const AzkarAppPreview = () => (
    <div className="w-full h-full bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-4 max-w-sm w-full">
        <div className="text-center mb-4 font-bold text-gray-800">Azkar App</div>
        <div className="space-y-2 mb-4">
          <div className="bg-green-100 p-2 rounded-lg">
            <div className="font-semibold text-gray-800">Azkar Alsabah</div>
            <div className="text-sm text-gray-600 arabic-text">سُبْحـانَ اللهِ وَبِحَمْـدِهِ</div>
          </div>
          <div className="bg-green-100 p-2 rounded-lg">
            <div className="font-semibold text-gray-800">Azkar Almasaa</div>
            <div className="text-sm text-gray-600 arabic-text">الحَمْـدُ لِلّهِ وَحْـدَهُ</div>
          </div>
        </div>
        <div className="flex justify-between">
          <button className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm">Previous</button>
          <button className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm">Next</button>
        </div>
      </div>
    </div>
  );
  const projects = [
    {
      title: 'OrderOps: SaaS Ordering App',
      description: (
        <div>
          <p><strong>- Developed a SaaS ordering app for restaurants using ReactJS, NodeJS, Express, and Firebase.</strong></p>
          <p><strong>- Improved sales forecasting accuracy by 25% using machine learning models.</strong></p>
          <p><strong>- Reduced order processing time by 30% through optimized backend processes.</strong></p>
          <p><strong>- Implemented QR-based menus, reducing order errors by 15%.</strong></p>
          <p><strong>- Facilitated effortless reservations, increasing reservation efficiency by 20%.</strong></p>
          <p><strong>- Admin dashboard used by 10+ managers for decision-making, resulting in better insights.</strong></p>
        </div>
      ),
      link: 'https://orderops.de',
      previewComponent: OrderAppPreview,
      techStack: [
        { icon: Globe, name: 'React' },
        { icon: Server, name: 'Node.js' },
        { icon: Database, name: 'Firebase' },
      ],
      codePreview: `// Code snippet here,
      `,
    },
    {
      title: 'AI Software Engineering Assistant',
      description: (
        <div>
          <p><strong>- Developed an AI assistant using Python and OpenAI's GPT-4, automating software development tasks and increasing coding efficiency by 40%.</strong></p>
          <p><strong>- Implemented a reinforcement learning algorithm with SQLite database integration, enabling the AI to learn from past interactions and improve performance over time by 35%.</strong></p>
          <p><strong>- Engineered a robust database schema to store code versions, requests, and RL data, preventing data overwriting and facilitating detailed performance analysis.</strong></p>
          <p><strong>- Integrated code validation and testing features, including automated linting and unit tests, reducing code errors by 25% and enhancing code quality.</strong></p>
          <p><strong>- Established a continuous feedback loop by collecting user inputs and AI outputs, enabling ongoing improvement and retraining of the RL agent, leading to more accurate task completion.</strong></p>
        </div>
      ),
      link: 'https://github.com/MohammadMawed/AI-Software-Engineering-Assistant', // Replace with actual link when available
      previewComponent: AIAssistantPreview,
      techStack: [
        { icon: BrainCog, name: 'GPT-4' },
        { icon: Terminal, name: 'Python' },
        { icon: FileJson, name: 'OpenAI API' },
        { icon: Database, name: 'SQLite' },
      ],
      codePreview:"",
    },
    {
      title: 'PureInvoice: Node.js Billing & Payments App',
      description: (
        <div>
          <p><strong>- Built a comprehensive invoicing platform using Node.js, Supabase, PostgreSQL, Next.js, Express, and integrated Stripe for secure payments.</strong></p>
          <p><strong>- Currently being used by 50+ users in its first 3 months.</strong></p>
          <p><strong>- Streamlined real-time payment tracking and automated reminders, improving payment collection by 15%.</strong></p>
          <p><strong>- Implemented a secure payment flow with Stripe to handle financial transactions.</strong></p>
        </div>
      ),
      link: 'https://pureinvoice.app',
      previewComponent: PureInvoicePreview,
      techStack: [
        { icon: Server, name: 'Node.js' },
        { icon: Database, name: 'Supabase' },
        { icon: Database, name: 'PostgreSQL' },
        { icon: Globe, name: 'Next.js' },
        { icon: Server, name: 'Express' },
        { icon: Cloud, name: 'Stripe' },
      ],
      codePreview: 
        "",
    },
    {
      title: 'Twitter-like: AI-Enhanced Social Engagement Platform',
      description: (
        <div>
          <p><strong>- Developed a social networking platform using Django to facilitate user interactions and content sharing.</strong></p>
          <p><strong>- Implemented user authentication and authorization, ensuring secure access and data protection.</strong></p>
          <p><strong>- Created RESTful APIs with Django REST Framework for efficient data exchange.</strong></p>
          <p><strong>- Utilized HTML, CSS, and Bootstrap for responsive frontend development, enhancing user experience across devices.</strong></p>
          <p><strong>- Managed SQLite database operations, including schema design, data migrations, and optimization to support fast query responses.</strong></p>
        </div>
      ),
      link: '#',
      previewComponent: TwitterPreview,
      techStack: [
        { icon: Globe, name: 'Django' },
        { icon: Database, name: 'PostgreSQL' },
        { icon: Cpu, name: 'Machine Learning' },
      ],
      codePreview: `
    
      `,
    },
    {
      title: 'Google Maps-like: Java RoutePlanner',
      description: (
        <div>
          <p><strong>- Architected a sophisticated graph-based navigation system in Java, modeling maps as dynamic networks of nodes and edges.</strong></p>
          <p><strong>- Implemented advanced routing algorithms such as Dijkstra's and A*, achieving route computation times under 500 milliseconds.</strong></p>
          <p><strong>- Integrated versatile travel type support (e.g., bike, car, foot), enhancing route accuracy by 20%.</strong></p>
          <p><strong>- Designed a comprehensive testing framework, covering 95% of edge cases for routing accuracy.</strong></p>
        </div>
      ),
      link: 'https://dgit.cs.uni-saarland.de/prog2/2024/students/project-5-7052664',
      previewComponent: MapPreview,
      techStack: [
        { icon: Coffee, name: 'Java' },
        { icon: Layers, name: 'Graph Algorithms' },
        { icon: Globe, name: 'GIS' },
      ],
      codePreview: `
        public class RoutePlanner {
          private Graph graph;
      
          public List<Node> findShortestPath(Node start, Node end) {
              PriorityQueue<Node> openSet = new PriorityQueue<>();
              Map<Node, Node> cameFrom = new HashMap<>();
              Map<Node, Double> gScore = new HashMap<>();
              // Dijkstra's algorithm implementation
          }
        }
      `,
    },
    {
      title: 'RAG-Enhanced Customer Support AI Chatbot',
      description: (
        <div>
          <p><strong>- Developed a RAG-enhanced interactive chatbot for customer support using Python, Flask, and TensorFlow.</strong></p>
          <p><strong>- Utilized Retrieval-Augmented Generation (RAG) for advanced NLP capabilities, improving response accuracy by 30%.</strong></p>
          <p><strong>- Integrated the chatbot into a React framework for seamless and interactive communication.</strong></p>
          <p><strong>- Implemented TensorFlow models to enable real-time, context-aware interactions, reducing average response time by 40%.</strong></p>
        </div>
      ),
      link: 'https://github.com/MohammadMawed/chatbot-deepLearning',
      previewComponent: ChatbotPreview,
      techStack: [
        { icon: Cpu, name: 'TensorFlow' },
        { icon: Server, name: 'Flask' },
        { icon: Database, name: 'NLP' },
      ],
      codePreview: `
        from flask import Flask, request, jsonify
        from tensorflow.keras.models import load_model
        import numpy as np
  
        app = Flask(__name__)
        model = load_model('chatbot_model.h5')
  
        @app.route('/chat', methods=['POST'])
        def chat():
            user_input = request.json['message']
            response = generate_response(user_input)
            return jsonify({'response': response})
      `,
    },
    {
      title: 'Azkar App: Islamic Daily Remembrance',
      description: (
        <div>
          <p><strong>- Developed an Android app for Muslims to access daily remembrance (Azkar) texts.</strong></p>
          <p><strong>- Implemented MVVM architecture with Coroutines for efficient asynchronous operations.</strong></p>
          <p><strong>- Utilized Dagger-Hilt for dependency injection, enhancing modularity and testability.</strong></p>
          <p><strong>- Integrated Room database for offline storage and access of Azkar content.</strong></p>
          <p><strong>- Implemented broadcast receiver for timely notifications of Azkar recitation times.</strong></p>
          <p><strong>- Ensured app reliability through comprehensive Android Unit and Component testing.</strong></p>
        </div>
      ),
      link: 'https://github.com/MohammadMawed/AzkarApp', // Replace with actual link when available
      previewComponent: AzkarAppPreview,
      techStack: [
        { icon: Coffee, name: 'Kotlin' },
        { icon: Database, name: 'Room' },
        { icon: Cpu, name: 'Coroutines' },
        { icon: Layers, name: 'Dagger-Hilt' },
      ],
      codePreview: `
        // AzkarViewModel.kt
        @HiltViewModel
        class AzkarViewModel @Inject constructor(
          private val azkarRepository: AzkarRepository
        ) : ViewModel() {
          
          private val _azkarList = MutableStateFlow<List<Azkar>>(emptyList())
          val azkarList: StateFlow<List<Azkar>> = _azkarList.asStateFlow()
  
          init {
            viewModelScope.launch {
              azkarRepository.getAllAzkar().collect { azkarList ->
                _azkarList.value = azkarList
              }
            }
          }
  
          fun scheduleAzkarNotification() {
            // Implementation for scheduling notifications
          }
        }
      `,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <main className="container mx-auto px-4 py-12">
        <HeroSection />

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <SectionTitle icon={Terminal} title="Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}


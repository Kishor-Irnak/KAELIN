<html lang="pt-br" class="scroll-smooth"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Atelier Digital - Especialistas em Shopify</title>
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
<!-- GSAP & ScrollTrigger -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&amp;family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&amp;display=swap" rel="stylesheet">
<style>
/* Custom Font Settings */
body {
font-family: 'Inter', sans-serif;
background-color: #F3F1EB; /* Warm Bone Color */
color: #1A2E22; /* Dark Forest Green */
overflow-x: hidden;
}
h1, h2, h3, h4, h5, h6, .serif-font {
font-family: 'Newsreader', serif;
}
.hide-scrollbar::-webkit-scrollbar {
display: none;
}
.hide-scrollbar {
-ms-overflow-style: none;
scrollbar-width: none;
}
/* Animation Utilities */
.word-wrapper {
display: inline-block;
overflow: hidden;
vertical-align: top;
margin-right: 0.25em;
padding-bottom: 0.1em; /* Prevent descender clipping */
}
.word {
display: inline-block;
transform: translateY(110%); /* Start hidden below */
}
</style></head>
<body class="antialiased selection:bg-[#1A2E22] selection:text-[#F3F1EB]">
    
    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 bg-[#F3F1EB]/80 backdrop-blur-md border-b border-[#1A2E22]/5 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <!-- Left: Links -->
                <div class="hidden md:flex space-x-8 text-sm font-medium text-[#1A2E22]/70">
                    <a href="#" class="hover:text-[#1A2E22] transition-colors">Método</a>
                    <a href="#" class="hover:text-[#1A2E22] transition-colors">Serviços</a>
                    <a href="#" class="hover:text-[#1A2E22] transition-colors">A Agência</a>
                </div>
                <!-- Center: Logo -->
                <div class="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
                    <iconify-icon icon="solar:shop-2-linear" width="24" class="text-[#1A2E22]"></iconify-icon>
                    <span class="text-xl font-medium tracking-tighter uppercase">Atelier</span>
                </div>
                <!-- Right: Actions -->
                <div class="flex items-center space-x-6">
                    <a href="#" class="text-sm font-medium hidden md:block">Login Cliente</a>
                    <button class="bg-[#1A2E22] text-[#F3F1EB] px-5 py-2 rounded-full text-xs font-medium tracking-wide hover:bg-opacity-90 transition-all flex items-center gap-2 group">
                        Ver Portfólio
                        <iconify-icon icon="solar:arrow-right-linear" class="group-hover:translate-x-0.5 transition-transform"></iconify-icon>
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <main class="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <!-- Social Proof/Trust -->
        <div class="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 opacity-0 animate-fade-in" style="animation-fill-mode: forwards;">
            <div class="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;auto=format&amp;fit=crop&amp;q=60" class="w-6 h-6 rounded-full border border-[#F3F1EB] object-cover" alt="Client">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;auto=format&amp;fit=crop&amp;q=60" class="w-6 h-6 rounded-full border border-[#F3F1EB] object-cover" alt="Client">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;auto=format&amp;fit=crop&amp;q=60" class="w-6 h-6 rounded-full border border-[#F3F1EB] object-cover" alt="Client">
            </div>
            <span class="text-xs font-medium tracking-wide uppercase text-[#1A2E22]/60">Criando as melhores marcas do D2C</span>
        </div>

        <!-- Headline -->
        <div class="text-center max-w-4xl mx-auto mb-16">
            <h1 class="reveal-text text-5xl md:text-7xl serif-font leading-[1.1] font-light tracking-tight mb-6">
                Lojas Shopify com <br> Alma e Conversão.
            </h1>
            <p class="text-lg text-[#1A2E22]/70 max-w-xl mx-auto leading-relaxed reveal-para delay-300">
                Temas exclusivos construídos do zero para marcas premium.
                <span class="md:block">Alta performance. UI/UX estratégico. Experiência impecável.</span>
            </p>
            <div class="mt-8 opacity-0" id="hero-cta">
                <button class="bg-[#1A2E22] text-[#F3F1EB] px-8 py-3 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-xl shadow-[#1A2E22]/10">
                    Agendar Consultoria
                </button>
            </div>
        </div>

        <!-- Bento Grid Images -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[500px]">
            <!-- Left Image (Parallax) -->
            <div class="md:col-span-4 rounded-2xl overflow-hidden relative group h-[300px] md:h-full parallax-wrapper">
                <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&amp;w=800&amp;auto=format&amp;fit=crop" class="w-full h-[120%] object-cover parallax-img" alt="UI Design">
                <div class="absolute bottom-4 left-4 text-white z-10">
                    <p class="text-xs font-medium bg-black/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 inline-flex items-center gap-1">
                        <iconify-icon icon="solar:code-square-linear"></iconify-icon>
                        Código Limpo
                    </p>
                </div>
            </div>

            <!-- Middle Card -->
            <div class="md:col-span-4 bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-[#1A2E22]/5">
                <div class="">
                    <div class="flex justify-between items-start mb-4">
                        <div class="w-12 h-12 rounded-full bg-[#F3F1EB] flex items-center justify-center">
                            <iconify-icon icon="solar:programming-linear" class="text-[#1A2E22] text-2xl"></iconify-icon>
                        </div>
                        <iconify-icon icon="solar:monitor-smartphone-linear" class="text-[#1A2E22]/20 text-2xl"></iconify-icon>
                    </div>
                    <h3 class="serif-font text-2xl mb-1">Arquitetura Premium</h3>
                    <p class="text-xs text-[#1A2E22]/60">Foco extremo em taxa de conversão (CRO).</p>
                </div>
                <div class="space-y-3 mt-8">
                    <div class="flex justify-between text-xs border-b border-gray-100 pb-2">
                        <span class="text-gray-500">Ecossistema</span>
                        <span class="font-medium">Shopify Plus</span>
                    </div>
                    <div class="flex justify-between text-xs border-b border-gray-100 pb-2">
                        <span class="text-gray-500">Design</span>
                        <span class="font-medium">UI/UX Exclusivo</span>
                    </div>
                    <div class="flex justify-between text-xs">
                        <span class="text-gray-500">Entrega Média</span>
                        <span class="font-medium">4 Semanas</span>
                    </div>
                </div>
            </div>

            <!-- Right Image (Parallax) -->
            <div class="md:col-span-4 rounded-2xl overflow-hidden relative group h-[300px] md:h-full parallax-wrapper">
                <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&amp;w=800&amp;auto=format&amp;fit=crop" class="w-full h-[120%] object-cover parallax-img" alt="Mobile E-commerce">
                <div class="absolute bottom-4 left-4 text-white max-w-[80%] z-10">
                    <p class="serif-font text-xl leading-tight">Design que transcende o óbvio e gera resultados reais.</p>
                </div>
            </div>
        </div>
    </main>

    <!-- Quote Section -->
    <section class="py-24 px-4 bg-white border-y border-[#1A2E22]/5">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="reveal-text serif-font text-3xl md:text-5xl leading-tight font-light text-[#1A2E22] tracking-tight">
                “Não é apenas um tema. É a extensão digital da sua marca, projetada para transformar visitantes em clientes fiéis.”
            </h2>
        </div>
    </section>

    <!-- Tech/Pillars Slider -->
    <section class="py-20 max-w-7xl mx-auto px-4">
        <div class="flex items-end justify-between mb-10">
            <div>
                <h3 class="serif-font text-3xl mb-2 reveal-text">Nossos Pilares</h3>
                <p class="text-sm text-[#1A2E22]/60">A tecnologia por trás das marcas que mais vendem.</p>
            </div>
            <div class="flex gap-2">
                <button class="w-10 h-10 rounded-full border border-[#1A2E22]/10 flex items-center justify-center hover:bg-[#1A2E22] hover:text-white transition-colors">
                    <iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
                </button>
                <button class="w-10 h-10 rounded-full border border-[#1A2E22]/10 flex items-center justify-center hover:bg-[#1A2E22] hover:text-white transition-colors">
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                </button>
            </div>
        </div>

        <div class="flex gap-6 overflow-x-auto hide-scrollbar pb-10">
            <!-- Item 1 -->
            <div class="min-w-[200px] group cursor-pointer">
                <div class="w-full aspect-square bg-white rounded-2xl mb-4 flex items-center justify-center p-0 group-hover:shadow-xl transition-all border border-[#1A2E22]/5 relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&amp;w=600&amp;auto=format&amp;fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="UI Design">
                    <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span class="text-white text-xs font-medium bg-white/20 backdrop-blur px-3 py-1 rounded-full">Prototipagem</span>
                    </div>
                </div>
                <h4 class="font-medium">UI/UX Estratégico</h4>
                <p class="text-xs text-[#1A2E22]/50">Jornada do usuário fluída</p>
            </div>

            <!-- Item 2 (Active Style) -->
            <div class="min-w-[280px] cursor-pointer">
                <div class="w-full aspect-square bg-[#1A2E22] rounded-2xl mb-4 flex items-center justify-center p-0 shadow-2xl relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=600&amp;auto=format&amp;fit=crop" class="w-full h-full object-cover opacity-50" alt="Shopify Development">
                    <div class="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                        <p class="text-white text-xs leading-relaxed">
                            <span class="font-semibold block mb-1">Desenvolvimento Shopify</span>
                            Código Liquid otimizado, seções modulares e integração nativa perfeita com o ecossistema.
                        </p>
                    </div>
                </div>
                <h4 class="font-medium">Shopify Themes</h4>
                <p class="text-xs text-[#1A2E22]/50">Customização sem limites</p>
            </div>

            <!-- Item 3 -->
            <div class="min-w-[200px] group cursor-pointer">
                <div class="w-full aspect-square bg-white rounded-2xl mb-4 flex items-center justify-center p-0 group-hover:shadow-xl transition-all border border-[#1A2E22]/5 relative overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=600&amp;auto=format&amp;fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Data Analytics">
                </div>
                <h4 class="font-medium">Otimização (CRO)</h4>
                <p class="text-xs text-[#1A2E22]/50">Análise de dados avançada</p>
            </div>

            <!-- Item 4 -->
            <div class="min-w-[200px] group cursor-pointer">
                <div class="w-full aspect-square bg-white rounded-2xl mb-4 flex items-center justify-center p-0 group-hover:shadow-xl transition-all border border-[#1A2E22]/5 relative overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&amp;w=600&amp;auto=format&amp;fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Code">
                </div>
                <h4 class="font-medium">Headless Commerce</h4>
                <p class="text-xs text-[#1A2E22]/50">Arquitetura do futuro</p>
            </div>
        </div>
    </section>

    <!-- Parallax Feature Section -->
    <section class="relative h-[600px] md:h-[800px] w-full overflow-hidden parallax-wrapper">
        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" class="absolute inset-0 w-full h-[120%] object-cover parallax-img" alt="Agency Workspace">
        <div class="absolute inset-0 bg-gradient-to-t from-[#1A2E22] via-[#1A2E22]/60 to-transparent opacity-90 z-0"></div>

        <div class="relative z-10 h-full flex flex-col items-center justify-center px-4">
            <h2 class="reveal-text text-white serif-font text-4xl md:text-6xl mb-12 text-center">
                A conversão está nos <br> detalhes da experiência.
            </h2>

            <!-- Glass Card UI -->
            <div class="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl transform translate-y-12 opacity-0 fade-up-element">
                <div class="flex justify-between items-center mb-6">
                    <div class="text-white/80 text-xs uppercase tracking-wider">Métricas de Sucesso</div>
                    <iconify-icon icon="solar:verified-check-bold" class="text-white"></iconify-icon>
                </div>
                <div class="space-y-6">
                    <div>
                        <div class="flex justify-between text-white text-sm mb-2">
                            <span>Score de Performance</span>
                            <span class="text-green-300">99/100</span>
                        </div>
                        <div class="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <div class="h-full bg-gradient-to-r from-green-200 to-green-400 w-[99%]"></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between text-white text-sm mb-2">
                            <span>Tempo de Carregamento</span>
                            <span>&lt; 1.5s</span>
                        </div>
                        <div class="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <div class="h-full bg-gradient-to-r from-green-200 to-green-400 w-[95%]"></div>
                        </div>
                    </div>
                </div>
                <div class="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <div class="flex -space-x-3">
                        <div class="w-8 h-8 rounded-full bg-white border border-white flex items-center justify-center">
                             <iconify-icon icon="solar:bolt-bold" class="text-[#1A2E22] text-xs"></iconify-icon>
                        </div>
                         <div class="w-8 h-8 rounded-full bg-stone-200 border border-white flex items-center justify-center">
                             <iconify-icon icon="solar:code-circle-bold" class="text-[#1A2E22] text-xs"></iconify-icon>
                        </div>
                    </div>
                    <div class="text-right">
                        <div class="text-white text-2xl font-serif">Aceleração</div>
                        <div class="text-white/60 text-[10px]">Otimização contínua SEO</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section (Collection) -->
    <section class="py-24 max-w-7xl mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-[#1A2E22]/10 pb-6">
            <h2 class="reveal-text serif-font text-4xl md:text-5xl">Nossos Serviços</h2>
            <div class="flex space-x-6 text-sm font-medium mt-6 md:mt-0 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
                <button class="text-[#1A2E22] border-b-2 border-[#1A2E22] pb-1 whitespace-nowrap">Setup E-commerce</button>
                <button class="text-[#1A2E22]/40 hover:text-[#1A2E22] transition-colors pb-1 whitespace-nowrap">Redesign</button>
                <button class="text-[#1A2E22]/40 hover:text-[#1A2E22] transition-colors pb-1 whitespace-nowrap">Migração</button>
                <button class="text-[#1A2E22]/40 hover:text-[#1A2E22] transition-colors pb-1 whitespace-nowrap">Apps Customizados</button>
            </div>
        </div>

        <div class="grid md:grid-cols-2 gap-16">
            <!-- List -->
            <div class="space-y-0">
                <!-- Item 1 -->
                <div class="group py-8 border-b border-[#1A2E22]/10 cursor-pointer">
                    <div class="flex justify-between items-start mb-2">
                        <span class="inline-block px-2 py-0.5 rounded border border-[#1A2E22]/20 text-[10px] uppercase tracking-wider mb-2">Mais Procurado</span>
                    </div>
                    <h3 class="serif-font text-3xl group-hover:text-[#1A2E22]/70 transition-colors">Tema Shopify Sob Medida</h3>
                    <p class="text-sm text-[#1A2E22]/60 mt-2">Design exclusivo para sua marca, desenvolvido com Liquid, Tailwind e focado em performance mobile.</p>
                    <div class="mt-4 flex gap-4 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        <span>A partir de R$ 15.000</span>
                        <span>•</span>
                        <span>30 dias</span>
                    </div>
                </div>
                <!-- Item 2 -->
                <div class="group py-8 border-b border-[#1A2E22]/10 cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                    <h3 class="serif-font text-3xl">Migração de Plataforma</h3>
                    <p class="text-sm text-[#1A2E22]/60 mt-2">Transferência segura de dados, SEO e clientes do WooCommerce, VTEX ou Nuvemshop para Shopify.</p>
                </div>
                <!-- Item 3 -->
                <div class="group py-8 border-b border-[#1A2E22]/10 cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                    <h3 class="serif-font text-3xl">Consultoria de Performance</h3>
                    <p class="text-sm text-[#1A2E22]/60 mt-2">Auditoria completa de CRO, velocidade e testes A/B para escalar o faturamento da sua loja atual.</p>
                </div>
            </div>

            <!-- Images (Parallax Wrapper) -->
            <div class="hidden md:grid grid-cols-2 gap-4">
                <div class="parallax-wrapper rounded-2xl overflow-hidden h-64">
                    <img src="https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&amp;w=800&amp;auto=format&amp;fit=crop" class="w-full h-[120%] object-cover parallax-img" alt="Agency Desk">
                </div>
                <div class="parallax-wrapper rounded-2xl overflow-hidden h-64 mt-12">
                    <img src="https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&amp;w=800&amp;auto=format&amp;fit=crop" class="w-full h-[120%] object-cover parallax-img" alt="Team Session">
                </div>
            </div>
        </div>

        <!-- Filter Pills -->
        <div class="mt-12 flex flex-wrap gap-3">
            <span class="px-4 py-2 rounded-full border border-[#1A2E22]/20 text-xs font-medium hover:bg-[#1A2E22] hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                <iconify-icon icon="solar:check-circle-bold" class="text-green-600"></iconify-icon>
                Shopify Partners
            </span>
            <span class="px-4 py-2 rounded-full border border-[#1A2E22]/20 text-xs font-medium hover:bg-[#1A2E22] hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                <iconify-icon icon="solar:check-circle-bold" class="text-green-600"></iconify-icon>
                Suporte Contínuo
            </span>
             <span class="px-4 py-2 rounded-full border border-[#1A2E22]/20 text-xs font-medium hover:bg-[#1A2E22] hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                <iconify-icon icon="solar:check-circle-bold" class="text-green-600"></iconify-icon>
                Treinamento de Equipe
            </span>
        </div>
    </section>

    <!-- Pricing/Agency Section -->
    <section class="text-[#F3F1EB] bg-[#1A2E22] pt-24 pb-24">
        <div class="max-w-7xl mx-auto px-4 md:grid md:grid-cols-2 gap-16 items-center">
            <div class="mb-12 md:mb-0">
                <h2 class="reveal-text serif-font text-4xl md:text-5xl mb-6 text-white">Projetos Enterprise &amp; <br>Shopify Plus.</h2>
                <p class="text-white/60 text-lg mb-8 max-w-md">Desenvolvemos soluções B2B, wholesale e integrações complexas de ERP para operações que precisam escalar sem atritos.</p>
                <div class="grid grid-cols-3 gap-4 mt-12">
                     <img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&amp;w=300&amp;auto=format&amp;fit=crop" class="h-24 w-full object-cover rounded-lg opacity-60 hover:opacity-100 transition-opacity" alt="Wireframe">
                     <img src="https://images.unsplash.com/photo-1586717799082-a78c187e0fa8?q=80&amp;w=300&amp;auto=format&amp;fit=crop" class="h-24 w-full object-cover rounded-lg opacity-60 hover:opacity-100 transition-opacity" alt="UI Design">
                     <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=300&amp;auto=format&amp;fit=crop" class="h-24 w-full object-cover rounded-lg opacity-60 hover:opacity-100 transition-opacity" alt="Launch">
                </div>
            </div>

            <div class="relative">
                <div class="absolute -top-10 -right-10 text-[10rem] font-serif text-white/5 select-none pointer-events-none">01</div>
                <!-- Pricing Card -->
                <div class="bg-[#F3F1EB] text-[#1A2E22] rounded-3xl p-8 max-w-sm mx-auto shadow-2xl relative z-10 transform hover:-translate-y-2 transition-transform duration-300">
                    <div class="flex justify-between items-start mb-6">
                        <div class="w-10 h-10 rounded-full bg-[#1A2E22] text-white flex items-center justify-center">
                            <iconify-icon icon="solar:rocket-linear"></iconify-icon>
                        </div>
                        <div class="px-3 py-1 bg-stone-200 rounded-full text-[10px] font-bold uppercase tracking-wide">Grandes Operações</div>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Shopify Plus</h3>
                    <p class="text-xs text-[#1A2E22]/60 mb-6">Arquitetura de ponta para lojas que faturam múltiplos dígitos.</p>

                    <ul class="space-y-3 mb-8">
                        <li class="flex items-start gap-3 text-sm">
                            <iconify-icon icon="solar:check-read-linear" class="mt-0.5 text-green-700"></iconify-icon>
                            <span class="">Checkout Customizado (Extensibility)</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm">
                            <iconify-icon icon="solar:check-read-linear" class="mt-0.5 text-green-700"></iconify-icon>
                            <span class="">Automação Avançada (Flow/Scripts)</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm">
                            <iconify-icon icon="solar:check-read-linear" class="mt-0.5 text-green-700"></iconify-icon>
                            <span>Integração ERP/WMS via API</span>
                        </li>
                    </ul>

                    <button class="w-full bg-[#1A2E22] text-white py-3 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all">Falar com Especialista</button>

                    <!-- Custom Toggle -->
                    <div class="mt-6 flex justify-center">
                         <p class="text-[10px] text-[#1A2E22]/50">Vagas limitadas para novos projetos</p>
                    </div>
                </div>

                <!-- Review Snippets under pricing -->
                <div class="mt-8 flex justify-between gap-4 text-xs text-white/40 max-w-sm mx-auto">
                    <div class="flex gap-2 gap-x-2 gap-y-2 items-center">Apresentação Institucional</div>
                    <div class="flex gap-x-2 gap-y-2 items-center">Cases de Sucesso</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section class="bg-[#F3F1EB] pt-24 pb-24">
        <div class="text-center mb-16 px-4">
            <span class="border border-[#1A2E22]/20 px-3 py-1 rounded-full text-[10px] uppercase tracking-wide">Resultados Reais</span>
            <h2 class="reveal-text serif-font text-3xl md:text-4xl mt-6 mb-4">Design que multiplica vendas.</h2>
            <p class="text-[#1A2E22]/60 text-sm">Veja como o Atelier ajudou marcas a escalarem suas operações na Shopify.</p>
        </div>

        <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
            <!-- Card 1 -->
            <div class="bg-white p-6 rounded-2xl border border-[#1A2E22]/5">
                <div class="flex gap-1 text-[#1A2E22] mb-4 text-xs">
                    <iconify-icon icon="solar:star-bold"></iconify-icon>
                    <iconify-icon icon="solar:star-bold"></iconify-icon>
                    <iconify-icon icon="solar:star-bold"></iconify-icon>
                    <iconify-icon icon="solar:star-bold"></iconify-icon>
                    <iconify-icon icon="solar:star-bold"></iconify-icon>
                </div>
                <h4 class="font-serif text-lg mb-2">Conversão Impecável</h4>
                <p class="text-sm text-[#1A2E22]/70 leading-relaxed mb-6">
                    "Desde o lançamento do novo tema, nossa taxa de conversão aumentou 45%. A jornada de compra ficou muito mais fluida no mobile, exatamente onde tínhamos mais gargalos."
                </p>
                <div class="flex items-center justify-between mt-auto pt-6 border-t border-[#1A2E22]/5">
                    <div class="flex items-center gap-2">
                        <span class="font-bold text-xl">45%</span>
                        <span class="text-[10px] text-[#1A2E22]/50">Aumento em Vendas</span>
                    </div>
                    <iconify-icon icon="simple-icons:shopify" width="20" class="text-[#1A2E22]"></iconify-icon>
                </div>
            </div>

            <!-- Card 2 (Video style) -->
            <div class="bg-[#1A2E22] rounded-2xl overflow-hidden relative group h-[400px] md:h-auto text-white">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=800&amp;auto=format&amp;fit=crop" class="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" alt="E-commerce Analytics">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div class="absolute bottom-6 left-6 right-6">
                    <div class="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mb-4 cursor-pointer hover:bg-white hover:text-[#1A2E22] transition-colors">
                        <iconify-icon icon="solar:play-bold" class="ml-1"></iconify-icon>
                    </div>
                    <p class="font-serif text-xl leading-snug mb-2">"O redesign não só melhorou a estética, mas posicionou a marca como premium no digital."</p>
                    <p class="text-xs text-white/70">Camila R., Head de E-commerce</p>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="bg-white p-6 rounded-2xl border border-[#1A2E22]/5 flex flex-col">
                <div class="mb-4">
                    <h4 class="font-serif text-lg mb-2">Código e Velocidade</h4>
                    <p class="text-sm text-[#1A2E22]/70">
                        "O time de desenvolvimento da Atelier entregou um código muito limpo. Nossa loja carrega quase instantaneamente agora. O suporte pós-lançamento também tem sido vital."
                    </p>
                </div>
                <div class="mt-auto">
                    <div class="flex gap-2 mb-4 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=200&amp;auto=format&amp;fit=crop" class="w-16 h-16 rounded-lg object-cover" alt="Detail">
                        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&amp;w=200&amp;auto=format&amp;fit=crop" class="w-16 h-16 rounded-lg object-cover" alt="Detail">
                    </div>
                    <div class="flex items-center gap-3">
                        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=100&amp;auto=format&amp;fit=crop" class="w-8 h-8 rounded-full" alt="User">
                        <div class="text-xs">
                            <div class="font-bold">Julia M.</div>
                            <div class="text-[#1A2E22]/50">Founder &amp; CEO</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="overflow-hidden bg-[#1A2E22] text-[#F3F1EB] pt-32 pb-0 relative">
        <div class="max-w-7xl mx-auto px-4 relative z-10">
            <div class="grid md:grid-cols-4 gap-12 mb-24">
                <div class="md:col-span-1">
                    <p class="text-xs font-bold uppercase tracking-widest mb-6 text-[#F3F1EB]/40">A Agência</p>
                    <p class="text-3xl font-serif mb-6 leading-tight tracking-tight">E-commerces que unem estética e alta conversão.</p>
                    <div class="flex gap-4">
                        <button class="text-xs font-medium bg-[#F3F1EB] text-[#1A2E22] px-5 py-2.5 rounded-full hover:bg-white transition-colors">Solicitar Proposta</button>
                    </div>
                </div>
                <div class="md:col-span-1">
                    <p class="text-xs font-bold uppercase tracking-widest mb-6 text-[#F3F1EB]/40">Contato</p>
                    <a href="mailto:ola@atelierdigital.com.br" class="block text-lg font-serif mb-2 hover:opacity-70 transition-opacity tracking-tight">ola@atelierdigital.com.br</a>
                    <p class="text-sm text-[#F3F1EB]/60 mb-6">+55 11 99999-9999</p>
                    <p class="text-[10px] text-[#F3F1EB]/40 leading-relaxed">
                        Faria Lima, São Paulo - SP<br>
                        Brasil<br>
                        Shopify Experts
                    </p>
                </div>
                <div class="md:col-span-2 flex flex-col md:flex-row justify-end gap-12 md:gap-24 text-sm font-medium">
                    <div class="flex flex-col gap-4">
                        <span class="text-xs font-bold uppercase tracking-widest text-[#F3F1EB]/40 mb-2">Explorar</span>
                        <a href="#" class="hover:text-[#F3F1EB]/70 transition-colors">Serviços Shopify</a>
                        <a href="#" class="hover:text-[#F3F1EB]/70 transition-colors">Cases de Sucesso</a>
                        <a href="#" class="hover:text-[#F3F1EB]/70 transition-colors">Nosso Método</a>
                        <a href="#" class="hover:text-[#F3F1EB]/70 transition-colors">Shopify Plus</a>
                    </div>
                    <div class="flex flex-col gap-4">
                        <span class="text-xs font-bold uppercase tracking-widest text-[#F3F1EB]/40 mb-2">Social</span>
                        <a href="#" class="hover:text-[#F3F1EB]/70 transition-colors">Instagram</a>
                        <a href="#" class="hover:text-[#F3F1EB]/70 transition-colors">Dribbble</a>
                        <a href="#" class="hover:text-[#F3F1EB]/70 transition-colors">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Big Text -->
        <div class="w-full text-center leading-none overflow-hidden border-t border-[#F3F1EB]/5">
            <h1 class="text-[26vw] leading-[0.75] font-serif text-[#F3F1EB]/5 tracking-tighter select-none pointer-events-none -mb-[0.05em] pt-4 parallax-footer-text">
                ATELIER
            </h1>
        </div>
    </footer>

    <!-- GSAP Animations -->
    <script>
        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            // 1. Text Splitter Utility
            const splitTextElements = document.querySelectorAll(".reveal-text");
            splitTextElements.forEach(element => {
                const text = element.innerText;
                const words = text.split(" ");
                let newHtml = "";
                words.forEach(word => {
                    newHtml += `<span class="word-wrapper"><span class="word">${word}</span></span> `;
                });
                element.innerHTML = newHtml;
            });

            // 2. Reveal Animation
            const revealElements = document.querySelectorAll(".reveal-text");
            revealElements.forEach(element => {
                const words = element.querySelectorAll(".word");
                gsap.to(words, {
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    y: 0,
                    duration: 1.2,
                    ease: "power4.out",
                    stagger: 0.04
                });
            });

            // 3. Parallax Image Effect
            const parallaxWrappers = document.querySelectorAll(".parallax-wrapper");
            parallaxWrappers.forEach(wrapper => {
                const img = wrapper.querySelector(".parallax-img");
                if (img) {
                    gsap.fromTo(img,
                        { y: "-10%" },
                        {
                            y: "10%",
                            ease: "none",
                            scrollTrigger: {
                                trigger: wrapper,
                                start: "top bottom",
                                end: "bottom top",
                                scrub: true
                            }
                        }
                    );
                }
            });

            // 4. Fade Up Miscellaneous Elements
            gsap.utils.toArray(".fade-up-element").forEach(element => {
                gsap.to(element, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%"
                    }
                });
            });

            // 5. Button Reveal
            gsap.to("#hero-cta", {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 1,
                ease: "power3.out"
            });

             // 6. Footer Parallax
            gsap.fromTo(".parallax-footer-text",
                { y: "-20%" },
                {
                    y: "10%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: "footer",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );
        });
    </script>

</body></html>

//  lista de productos 
const productos = [
  { 
    nombre: "NexGard Antipulgas para Perros de 2 a 4 Kg", 
    categoria: "Perros",
    precio: 40000, 
    descripcion: "NexGard® es una novedosa dimensión en protección para tus mascotas y la prescripción más completa diseñada para el control y prevención efectiva contra las pulgas y garrapatas, preferida por las mascotas sobre otros productos, gracias a su irresistible sabor a carne de res.", 
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/Nex2-4.jpg",
    marca: "lab. Boheringer" 
  },
  { 
    nombre: "NexGard Antipulgas para Perros de 4.1 a 10 Kg", 
    categoria: "Perros",
    precio: 42500, 
    descripcion: "La tableta masticable para Perros de NexGard®, es una novedosa prescripción diseñada para  proporcionar una protección segura, eficaz y de acción rápida contra el ataque de las Pulgas y Garrapatas durante un mes completo, su exclusivo y delicioso sabor a Carne hace de este comprimido la marca preferida por las Mascotas sobre otros productos.", 
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/Nex4-10.jpg" ,
    marca: "lab. Boheringer"
  },
  { 
    nombre: "NexGard Antipulgas para Perros de 10 a 25 Kg", 
    categoria: "Perros",
    precio: 49250, 
    descripcion: "NexGard® es el único comprimido masticable y con un agradable sabor a carne que contribuye al control de los parásitos externos más frecuentes en los perros, su potente base activa Afoxolaner ha sido diseñada para matar rápidamente pulgas y garrapatas durante un mes completo antes de que tengan la oportunidad de poner sus huevos.", 
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/Nex10-25.jpg" ,
    marca: "lab. Boheringer"
  },
  { 
    nombre: "NexGard Antipulgas para Perros de 25.1 a 50 Kg", 
    categoria: "Perros",
    precio: 79800, 
    descripcion: "Protege a tus perros de contraer parásitos como las pulgas y garrapatas con la poderosa fórmula de NexGard®, cuyo efecto empezará actuar a los 30 minutos de ser ingerida esta deliciosa tableta masticable con sabor a carne, facilitando así su suministro y contribuye al tratamiento de patologías como la Demodicosis y la Sarna sarcóptica.", 
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/Nex25-50.jpg" ,
    marca: "lab. Boheringer"
  },
  { 
    nombre: "Royal Canin Maxi Adulto - Alimento para Perros Grandes", 
    categoria: "Perros",
    precio: 80000, 
    descripcion: "Alimento para perros adultos de razas grandes (de 26 a 44 kg) de 15 meses a 5 años de edad. Contribuye a la salud de la piel y el pelaje. Ayuda a mantener un peso óptimo.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/RoyalCanin.jpg",
    marca: "Royal Canin" 
  },
  {
  nombre: "Comoderos para Perros en Acero Inoxidable", 
  precio: 7500, 
  descripcion: "Descripción del Producto 3", 
  imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/comedero.jpg" ,
  categoria: "Comedero resistente fabricado en acero inoxidable, genial para servir comida o agua a tu mascota. La base está recubierta con goma antideslizante para impedir que el comedero se deslice y así el perro puede comer/beber cómodamente",
  marca: "Axis-Biozoo"
  },
  { 
    nombre: "Comedero Automático para Gatos y Perros", 
    categoria: "Perros",
    precio: 220000, 
    descripcion: "Comedero automático para gatos y perros. Dispensador programable de comida con temporizador. Ideal para programar las comidas cuando no estás en casa.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/ComederoAuto.jpg",
    marca: "Dural Power Suply" 
  },
  { 
    nombre: "Arena Aglomerante para Gatos", 
    categoria: "Gatos",
    precio: 30000, 
    descripcion: "Arena aglomerante para gatos. Absorbe y neutraliza los olores. Fácil de limpiar y de desechar.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/ArenaAglo.jpg",
    marca: "Nature" 
  },
  { 
    nombre: "Arena para gatos de 12 Kg", 
    categoria: "Gatos",
    precio: 105000, 
    descripcion: "Arena mineral Ultra Premium OdourLock sin aroma, diseñada para ofrecer una experiencia única a tu gato mejorando sus vías respiratorias hasta en un 99.9%. Además, este producto está compuesto de arcilla 100% natural y pura que neutraliza los olores hasta por 40 días..",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/Arena1.jpg",
    marca: "OdourLock " 
  },
  { 
    nombre: "Arena Petys Aglomerante por 10 Kg", 
    categoria: "Gatos",
    precio: 42800, 
    descripcion: "Mantén el área de tu gato limpia y fresca con nuestra arena para gatos! Formulada para una máxima absorción y control de olores, nuestra arena aglomerante hace que la limpieza sea rápida y fácil. Con una textura suave y libre de polvo, tu gato disfrutará de una experiencia cómoda y sin molestias. ", 
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/Arena2.jpg" ,
    marca: "petys"
  },
  { 
    nombre: "Shed X 16 Oz Suplemento nutricional líquido", 
    categoria: "Perros",
    precio: 74500, 
    descripcion: "Shed-X emulsión es un suplemento nutricional para perros rico en antioxidantes, ácidos grasos y vitaminas, hecho 100% a base de elementos naturales que evitarán la caída excesiva del pelo de tu perro.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/Omega-DOG.jpg",
    marca: "ShedX"
  },
  { 
    nombre: "Shed X 8 Oz Suplemento nutricional líquido", 
    categoria: "Perros",
    precio: 54000, 
    descripcion: "Mantén a tu perro con un pelaje saludable y brillante con Shed-X Emulsión, un suplemento nutricional 100% natural y rico en antioxidantes, ácidos grasos y vitaminas que previene la caída excesiva del pelo. Con su fórmula rica en ácidos grasos omega 3 y 6, vitaminas y minerales, este suplemento es esencial para la salud de tu mascota.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/Omega-DOG2.jpg",
    marca: "ShedX"
  },
  { 
    nombre: "SHED - X DERMAPLEX CAT 8 Oz", 
    categoria: "Perros",
    precio: 54000, 
    descripcion: "Shed-X ™ es un suplemento nutricional diario integral 100% natural garantizado, con el uso adecuado, para eliminar el desprendimiento excesivo en 3-5 semanas. Científicamente formulado por un doctorado en Nutrición Animal con las proporciones exactas de ácidos grasos Omega 3 y 6, vitaminas y minerales necesarios para tratar, mejorar y mantener la condición óptima del pelaje y la piel del gato. ",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/Omega-CAT.jpg",
    marca: "ShedX"
  },
 
  { 
    nombre: "Desparasitante para Cerdos", 
    categoria: "Desparasitantes para Cerdos",
    precio: 55000, 
    descripcion: "Desparasitante oral de amplio espectro para cerdos. Controla eficazmente una variedad de parásitos internos y externos que pueden afectar la salud y el rendimiento de los cerdos.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/desp.cerdos.jpg",
    marca: "Provet" 
  },

  { 
    nombre: "Suplemento Vitamínico para Vacas en Gestación", 
    categoria: "Suplementos para Vacas",
    precio: 75000, 
    descripcion: "Suplemento vitamínico y mineral especialmente formulado para vacas gestantes. Ayuda a garantizar un desarrollo saludable del feto y previene deficiencias nutricionales en las vacas durante la gestación.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/Vacas.gesta.jpg",
    marca: "Vecol" 
  },
  { 
    nombre: "Antibiótico para Tratamiento de Infecciones Respiratorias en Cerdos", 
    categoria: "Antibióticos para Cerdos",
    precio: 95000, 
    descripcion: "Antibiótico de amplio espectro para el tratamiento de infecciones respiratorias en cerdos. Ayuda a combatir eficazmente las infecciones bacterianas comunes en los sistemas respiratorios de los cerdos.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/Cerdos-Resp.jpg",
    marca: "Laboratorio Veterinario GHI" 
  },
  { 
    nombre: "Suplemento Vitamínico para Vacas en Gestación", 
    categoria: "Suplementos para Vacas",
    precio: 75000, 
    descripcion: "Suplemento vitamínico y mineral especialmente formulado para vacas gestantes. Ayuda a garantizar un desarrollo saludable del feto y previene deficiencias nutricionales en las vacas durante la gestación.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/vitamina-vacas.jpg",
    marca: "Virbac" 
  },

  { 
    nombre: "Antibiótico Oral para Perros y Gatos", 
    categoria: "Antibióticos",
    precio: 30000, 
    descripcion: "Antibiótico de amplio espectro en forma de suspensión oral para perros y gatos. Indicado para el tratamiento de infecciones bacterianas comunes, como infecciones del tracto urinario, heridas infectadas y problemas de piel.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/Antibiotico-p.g.jpg",
    marca: "Virbac" 
  },
  { 
    nombre: "Crema Antibiótica para Perros y Gatos", 
    categoria: "Antibióticos",
    precio: 25000, 
    descripcion: "Crema antibiótica tópica para perros y gatos. Ayuda en el tratamiento de infecciones cutáneas, picaduras de insectos infectadas y heridas superficiales. Promueve una curación rápida y previene la propagación de infecciones.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/crema-p.g.jpg",
    marca: "Erma" 
  },
  { 
    nombre: "Crema Dermatológica Mascotas 30g", 
    categoria: "Antibióticos",
    precio: 25000, 
    descripcion: "Crema antibiótica tópica para perros y gatos. Ayuda en el tratamiento de infecciones cutáneas, picaduras de insectos infectadas y heridas superficiales. Promueve una curación rápida y previene la propagación de infecciones.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/crema2.jpg",
    marca: "Pharma" 
  },
  { 
    nombre: "Clorhexin Spray. Antiséptico para Heridas en Spray", 
    categoria: "Antisépticos",
    precio: 20000, 
    descripcion: "Solución antiséptica en aerosol para limpieza y desinfección de heridas en perros y gatos. Elimina bacterias y previene infecciones. Fácil de aplicar y no irrita la piel.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/spray.jpg",
    marca: "Virbac" 
  },
  { 
    nombre: "Antiinflamatorio para Perros y Gatos", 
    categoria: "Antiinflamatorios",
    precio: 35000, 
    descripcion: "Medicamento antiinflamatorio en forma de tabletas para perros y gatos. Ayuda a reducir la inflamación y aliviar el dolor asociado con condiciones como artritis, lesiones musculares y enfermedades óseas.",
    imagen:"C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/Antiflamatorio-p.g.jpg",
    marca: "Kyrovet" 
  },
  { 
    nombre: "Analgésico, antipirético y antiinflamatorio oral", 
    categoria: "Analgésicos",
    precio: 28000, 
    descripcion: "Indicado para tratar trastornos musculoesqueléticos agudos y crónicos, reducción del dolor pre y postoperatorio de cirugías ortopédicas y de tejidos blandos.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/jarabe.jpg",
    marca: "Figa" 
  },
  { 
    nombre: "Suplemento con Glucosamina y Condroitina", 
    categoria: "Suplementos",
    precio: 40000, 
    descripcion: "Suplemento nutricional en forma de tabletas masticables que contiene glucosamina y condroitina. Ayuda a mantener la salud articular y a reducir el dolor asociado con la osteoartritis en perros de todas las edades.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/gluco.jpg",
    marca: "Century" 
  },
  { 
    nombre: "Antidiarreico Oral para Perros y Gatos", 
    categoria: "Antidiarreicos",
    precio: 25000, 
    descripcion: "Solución oral antidiarreica para perros y gatos. Formulada para controlar y aliviar la diarrea aguda y crónica. Ayuda a restaurar el equilibrio intestinal y a mejorar la salud gastrointestinal.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/Antidiarreico.jpg",
    marca: "Vicar" 
  },
  { 
    nombre: "Pasta Digestiva para Gatos con Sabor a Pollo", 
    categoria: "Antidiarreicos",
    precio: 30000, 
    descripcion: "Pasta digestiva con probióticos y prebióticos para gatos. Ayuda a regular la flora intestinal y a prevenir la diarrea. El sabor a pollo hace que sea fácil de administrar y agradable para los gatos.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/Digestiva-g.jpg",
    marca: "Cat" 
  },
  { 
    nombre: "Antidiarreico con Carbón Activado", 
    categoria: "Antidiarreicos",
    precio: 35000, 
    descripcion: "Indicado como un adsorbente de toxinas y venenos presentes en el tracto gastrointestinal de los equinos, bovinos, potrillos, becerros, caprinos, ovinos, porcinos, caninos y felinos, en los casos de envenenamiento, intoxicación y ayudar en diarreas y gastroenteritis.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/carbon.jpg",
    marca: "Vecnil" 
  },
  { 
    nombre: "Suplemento Mineral para Vacas Gestantes", 
    categoria: "Suplementos para Vacas",
    precio: 60000, 
    descripcion: "Suplemento mineral en forma de bloque para vacas gestantes. Contiene nutrientes esenciales como calcio, fósforo y vitaminas A, D y E, que son importantes para el desarrollo fetal y la salud materna durante la gestación.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/suplemento.vacas.jpg",
    marca: "Nutrifarma" 
  },
  { 
    nombre: "Alimento Concentrado para Vacas Preñadas", 
    categoria: "Alimentos para Vacas",
    precio: 80000, 
    descripcion: "Alimento concentrado especialmente formulado para vacas preñadas. Proporciona los nutrientes necesarios para el crecimiento y desarrollo del feto, así como para mantener la salud y condición corporal de la vaca durante la gestación.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/Alimento-vacas.jpg",
    marca: "Solla" 
  },
  { 
    nombre: "Suplemento inyectable de Vitamina E y Selenio", 
    categoria: "Suplementos para Vacas",
    precio: 45000, 
    descripcion: "Suplemento vitamínico y mineral en forma de inyección para vacas gestantes. Contiene vitamina E y selenio, que son antioxidantes importantes para la salud reproductiva y el desarrollo fetal.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/suplemento.jpg",
    marca: "Virbac" 
  },
  { 
    nombre: "Suplemento Vitamínico para Cerdos", 
    categoria: "Suplementos para Cerdos",
    precio: 35000, 
    descripcion: "Suplemento vitamínico en forma de polvo para cerdos. Contiene una combinación equilibrada de vitaminas A, D, E y complejo B, esenciales para la salud general y el crecimiento adecuado de los cerdos.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/Vitamina-cerdos.jpg",
    marca: "Brouwer" 
  },
  { 
    nombre: "Multivitamínico para Vacas Lecheras", 
    categoria: "Suplementos para Vacas",
    precio: 50000, 
    descripcion: "Suplemento multivitamínico en forma de líquido para vacas lecheras. Contiene vitaminas A, D, E y complejo B, así como minerales traza esenciales, para mejorar la producción de leche y la salud general del ganado.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/lecheras.jpg",
    marca: "Elanco" 
  },
  { 
    nombre: "Vitamina C para Cerdos en Crecimiento", 
    categoria: "Suplementos para Cerdos",
    precio: 28000, 
    descripcion: "Suplemento de vitamina C en forma de tabletas masticables para cerdos en crecimiento. Ayuda a fortalecer el sistema inmunológico, promueve el crecimiento saludable y reduce el estrés en los cerdos.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/cerdo-crecimiento.jpg",
    marca: "Provimi" 
  },
  { 
    nombre: "Antibiótico Intramamario para Mastitis", 
    categoria: "Antibióticos para Vacas",
    precio: 40000, 
    descripcion: "Antibiótico en forma de suspensión intramamaria para el tratamiento de la mastitis en vacas. Ayuda a eliminar las bacterias causantes de la infección y a reducir la inflamación en las glándulas mamarias.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/mastitis.jpg",
    marca: "Callbest" 
  },
  { 
    nombre: "Antimastítico de secado para Vacas", 
    categoria: "Antiinflamatorios para Vacas",
    precio: 35000, 
    descripcion: "suspensión intramamaria compuesta por cloxacilina benzatínica 700 mg y ampicilina trihidratada 350 mg, con una alta liposolubilidad; indicada para la prevención y el tratamiento de mastitis subclínica, con efecto prolongado durante el período seco en bovinos.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/secamil.jpg",
    marca: "Virbac" 
  },
  { 
    nombre: "Desinfectante de Pezones para Vacas", 
    categoria: "Desinfectantes para Vacas",
    precio: 25000, 
    descripcion: "Solución desinfectante para limpieza de pezones antes y después del ordeño en vacas con mastitis. Elimina las bacterias y previene la propagación de la infección entre los animales del rebaño.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/desinfectaPezon.jpg",
    marca: "Weizur" 
  },
  { 
    nombre: "Gel Cicatrizante para Quemaduras y Cortes en Mascotas", 
    categoria: "Cicatrizantes",
    precio: 32000, 
    descripcion: "Gel cicatrizante de rápida absorción para el tratamiento de quemaduras y cortes en mascotas. Ayuda a reducir la inflamación, aliviar el dolor y promover la regeneración de la piel.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/cicatrizante.jpg",
    marca: "California" 
  },
  { 
    nombre: "Pomada Regeneradora para Heridas en Perros y Gatos", 
    categoria: "Cicatrizantes",
    precio: 25000, 
    descripcion: "Pomada cicatrizante con propiedades regeneradoras para heridas en perros y gatos. Crea una barrera protectora sobre la piel afectada y facilita el proceso de cicatrización.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/regeneradora.jpg",
    marca: "Agriquimvet" 
  },
  { 
    nombre: "Antiemético Oral para Perros y Gatos", 
    categoria: "Antieméticos",
    precio: 30000, 
    descripcion: "Medicamento antiemético en forma de gotero para perros y gatos. Ayuda a controlar y prevenir el vómito causado por diversas condiciones, como enfermedades gastrointestinales, viajes en automóvil o ansiedad.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/antiemetico.jpg",
    marca: "Kyrovet" 
  },
  { 
    nombre: "CINAMET-LES Gel Gatos X 60 ML", 
    categoria: "Antieméticos",
    precio: 25000, 
    descripcion: "la solución efectiva para combatir el mal aliento en gatos y promover una óptima salud oral. Fácil de aplicar y sin necesidad de cepillar, este gel controla la carga bacteriana y previene enfermedades graves. ¡Aprovecha el envío incluido y dale a tu gato una sonrisa fresca y saludable hoy mismo!.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/gel.gatos.jpg",
    marca: "Naturales" 
  },
  { 
    nombre: "Metoclopramida 4% Solución Oral de 30 ml", 
    categoria: "Antieméticos",
    precio: 35000, 
    descripcion: "Es apta para perros y gatos alivia los síntomas del vomito de diversas etiologías, náuseas, vaciado gástrico, esofagitis por reflujo y preparación para estudios radiológicos del tubo digestivo. Tiene un efecto estimulante en tratamiento como gastritis, parvo y uremia.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/solucion.jpg",
    marca: "Pharma" 
  },
  { 
    nombre: "GARAFOS C - Antiparasitarios", 
    categoria: "Insecticidas",
    precio: 45000, 
    descripcion: "Conozca la forma de controlar las garrapatas, piojos y moscas en su ganado de manera eficaz con GARAFOS C de MSD Salud Animal.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/calmafos.jpg",
    marca: "MSD" 
  },
  { 
    nombre: "TRIATOX - Antiparasitarios", 
    categoria: "Baños Parasiticidas",
    precio: 60000, 
    descripcion: "Controle las garrapatas resistentes a piretroides y organofosforados en su ganado con TRIATOX, medicamento de MSD Salud Animal.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/triatox.jpg",
    marca: "MSD" 
  },
  
  { 
    nombre: "Dalipen® Antibiótico de amplio espectro", 
    categoria: "Antibióticos",
    precio: 35000, 
    descripcion: "Para el tratamiento de mastitis, metritis, neumonías, edema maligno, carbón sintomático, tétanos, abscesos, septicemia hemorrágica, carbón bacteriano, necrobacilosis, infección del ombligo, secuelas de la fiebre aftosa, papera equina, influenza equina, enteritis, nefritis, poliartritis en potros, podofilitis, pododermatitis, mal rojo del cerdo y parvovirosis canina.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/dalipen.jpg",
    marca: "Virbac" 
  },
  { 
    nombre: "Antiparasitario para Cerdos en Suspensión Oral", 
    categoria: "Antiparasitarios",
    precio: 40000, 
    descripcion: "Antiparasitario en suspensión oral para cerdos. Controla y elimina parásitos internos y externos, como lombrices intestinales y garrapatas. Seguro y efectivo.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/antiparasitorio-cerdos.jpg",
    marca: "Laboratorio Veterinario XYZ" 
  },
  { 
    nombre: "Antiinflamatorio y Analgésico para Caballos", 
    categoria: "Antiinflamatorios/Analgésicos",
    precio: 45000, 
    descripcion: "Antiinflamatorio y analgésico en forma de inyección para caballos. Alivia el dolor y la inflamación causados por lesiones, artritis u otras condiciones musculoesqueléticas. Ideal para uso veterinario.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/antiinflamatorio-caballos.jpg",
    marca: "Ekinos" 
  },
  { 
    nombre: "Suplemento Articular para Caballos", 
    categoria: "Suplementos",
    precio: 55000, 
    descripcion: "QUIFLEX® es un suplemento nutricional para caballos. Por sus componentes, ayuda a la mantención de una adecuada función articular y favorece la recuperación de la matriz cartilaginosa en articulaciones lesionadas.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/caballos.jpg",
    marca: "NEXT LEVEL " 
  },
  { 
    nombre: "Antiparasitario para Caballos en Pasta Oral", 
    categoria: "Antiparasitarios",
    precio: 40000, 
    descripcion: "Antiparasitario en pasta oral para caballos. Controla y elimina parásitos internos, como lombrices y gusanos, previniendo problemas de salud digestiva. Fácil de administrar y altamente efectivo.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/antiiparasitos-equino.jpg",
    marca: "MSD" 
  },
  { 
    nombre: "Champú Suavizante para Caballos", 
    categoria: "Cuidado del Pelaje",
    precio: 35000, 
    descripcion: "Champú suavizante especialmente formulado para caballos. Limpia suavemente el pelaje y la piel, dejando un acabado brillante y sedoso. Aroma agradable y enjuague fácil.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/Shampo-Equino.jpg",
    marca: "Easy" 
  },
  { 
    nombre: "Acondicionador Intensivo para Pelaje de Caballos", 
    categoria: "Cuidado del Pelaje",
    precio: 45000, 
    descripcion: "Acondicionador intensivo para el pelaje de caballos. Hidrata y revitaliza el pelaje seco o dañado, mejorando su textura y brillo. Fórmula concentrada para resultados duraderos.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/acondicionador.jpg",
    marca: "  Ultra" 
  },
  { 
    nombre: "Cepillo Desenredante para Caballos", 
    categoria: "Accesorios de Cuidado",
    precio: 25000, 
    descripcion: "Cepillo desenredante de cerdas suaves para caballos. Elimina nudos y enredos en el pelaje sin causar molestias. Ideal para caballos con pelaje largo o grueso.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/cepillo-caballo.jpg",
    marca: "HORSE" 
  },
  { 
    nombre: "Silla de Montar Vaquera", 
    categoria: "Sillas para Caballos",
    precio: 150000, 
    descripcion: "Silla de montar vaquera, diseñada para la equitación estilo western. Fabricada con cuero de alta calidad y herrajes resistentes. Ofrece comodidad y estabilidad tanto para el jinete como para el caballo.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/vaquera.jpg",
    marca: "Talabarteria" 
  },
  { 
    nombre: "Silla de Salto", 
    categoria: "Sillas para Caballos",
    precio: 180000, 
    descripcion: "Silla de salto, ideal para la práctica de equitación de salto. Ligera y aerodinámica, con asiento profundo y rodilleras acolchadas para una mayor seguridad y confort del jinete.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/salto.jpg",
    marca: "Equitación Pro" 
  },
  { 
    nombre: "Silla de Doma Clásica", 
    categoria: "Sillas para Caballos",
    precio: 200000, 
    descripcion: "Silla de doma clásica, diseñada para la disciplina de doma. Con asiento profundo y faldones largos para una posición óptima del jinete y una correcta comunicación con el caballo.",
    imagen: "C:/Semestre IV/Fudamentos Web/codigo/Proyecto/img/doma.jpg",
    marca: "Elegancia Ecuestre" 
  },


  // Puedes agregar más productos según sea necesario
];



  
const productosPorPagina = 15;
let paginaActual = 1;

// Función para mostrar los productos en la lista
function mostrarProductos() {
  const listaProductos = document.getElementById("lista-productos");
  const inicio = (paginaActual - 1) * productosPorPagina;
  const fin = paginaActual * productosPorPagina;

  // Limpiamos la lista antes de agregar los nuevos productos
  listaProductos.innerHTML = "";

  // Iteramos sobre la lista de productos y creamos tarjetas para cada uno
  for (let i = inicio; i < fin && i < productos.length; i++) {
    const producto = productos[i];
    const productoElement = document.createElement("div");
    productoElement.classList.add("producto");
    productoElement.innerHTML = `
      <div class="producto-imagen">
        <img src="${producto.imagen}">
      </div>
      <div class="producto-info">
        <h3>${producto.nombre}</h3>
        <p class="producto-categoria">${producto.categoria}</p>
        <p class="producto-precio">Precio: $${producto.precio}</p>
        <p class="producto-descripcion">${producto.descripcion}</p>
        <p class="producto-marca">${producto.marca}</p>
      </div>
    `;
    listaProductos.appendChild(productoElement);
  }

  actualizarPaginacion();
}
  
  // Función para actualizar la paginación
  function actualizarPaginacion() {
    const paginaAnteriorBtn = document.getElementById("pagina-anterior");
    const paginaSiguienteBtn = document.getElementById("pagina-siguiente");
    const paginaActualSpan = document.getElementById("pagina-actual");
  
    const totalPaginas = Math.ceil(productos.length / productosPorPagina);
  
    paginaActualSpan.textContent = paginaActual;
  
    if (paginaActual === 1) {
      paginaAnteriorBtn.disabled = true;
    } else {
      paginaAnteriorBtn.disabled = false;
    }
  
    if (paginaActual === totalPaginas) {
      paginaSiguienteBtn.disabled = true;
    } else {
      paginaSiguienteBtn.disabled = false;
    }
  }
  
  // Función para ir a la página anterior
  function irPaginaAnterior() {
    if (paginaActual > 1) {
      paginaActual--;
      mostrarProductos();
    }
  }
  
  // Función para ir a la siguiente página
  function irPaginaSiguiente() {
    const totalPaginas = Math.ceil(productos.length / productosPorPagina);
    if (paginaActual < totalPaginas) {
      paginaActual++;
      mostrarProductos();
    }
  }
  
  // Función para registrar un nuevo producto
  function registrarProducto(nuevoProducto) {
    // Aquí deberías agregar el nuevo producto a tu base de datos o sistema de gestión de productos
    productos.push(nuevoProducto);
    // Después de agregar el nuevo producto, actualizamos la lista de productos en la página
    mostrarProductos();
  }
  
  // Llamamos a la función para mostrar los productos cuando la página se carga
  document.addEventListener("DOMContentLoaded", mostrarProductos);
  
  // Event listeners para los botones de paginación
  document.getElementById("pagina-anterior").addEventListener("click", irPaginaAnterior);
  document.getElementById("pagina-siguiente").addEventListener("click", irPaginaSiguiente);
  
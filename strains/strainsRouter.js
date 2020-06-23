const router = require('express').Router();

// const Strains = require('./strainsModel.js');

let strains = [
    {
        img_url: "https://leafly-production.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fleafly-images%2Fflower-images%2Fgsc.png?w=122&h=122&auto=format&fit=crop&dpr=2&q=25&ixlib=js-2.3.1&s=f365138d151657888c1ea4cd4cc9387e",
        name: "Girl Scout Cookies",
        flavor: "Sweet",
        ailment: "Depression, Nausea, Pain",
        effects: "Happy, Relaxed",
        breed: "Hybrid",
        description: "GSC, formerly known as Girl Scout Cookies, is an OG Kush and Durban Poison hybrid cross whose reputation grew too large to stay within the borders of its California homeland. With a sweet and earthy aroma, GSC launches you to euphoria’s top floor where full-body relaxation meets a time-bending cerebral space. A little goes a long way with this hybrid, whose THC heights have won GSC numerous Cannabis Cup awards. Patients needing a strong dose of relief, however, may look to GSC for severe pain, nausea, and appetite loss."
    },
    {
        img_url: "https://leafly-production.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fleafly-images%2Fflower-images%2Fpineapple-express.png?w=122&h=122&auto=format&fit=crop&dpr=2&q=25&ixlib=js-2.3.1&s=2f7ee379966ac6bdae21e4df274f2aae",
        name: "Pineapple Express",
        flavor: "Pine",
        ailment: "Depression, Stress ",
        effects: "Energetic, Creative",
        breed: "Hybrid",
        description: "Pineapple Express combines the potent and flavorful forces of parent strains Trainwreck and Hawaiian. The smell is likened to fresh apple and mango, with a taste of pineapple, pine, and cedar. This hard-hitting hybrid provides a long-lasting energetic buzz perfect for productive afternoons and creative escapes."
    },
    {
        img_url: "https://leafly-production.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fleafly-images%2Fflower-images%2Fgranddaddy-purple.png?w=122&h=122&auto=format&fit=crop&dpr=2&q=25&ixlib=js-2.3.1&s=a3fb955ead08545483077061957851db",
        name: "Granddaddy Purple",
        flavor: "Herbal",
        ailment: "Appetite loss, Stress, Pain",
        effects: "Sleepy, Relaxed",
        breed: "Indica",
        description: "Introduced in 2003 by Ken Estes, Granddaddy Purple (or GDP) is a famous indica cross of Purple Urkle and Big Bud. This California staple inherits a complex grape and berry aroma from its Purple Urkle parent, while Big Bud passes on its oversized, compact bud structure. GDP flowers bloom in shades of deep purple, a contrasting backdrop for its snow-like dusting of white crystal resin."
    },
    {
        img_url: "https://leafly-production.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fleafly-images%2Fflower-images%2Fdo-si-dos.jpg?w=122&h=122&auto=format&fit=crop&dpr=2&q=25&ixlib=js-2.3.1&s=fa60bc6cecdb0553698c296f65146fe5",
        name: "Do-Si-Dos",
        flavor: "Citrus",
        ailment: "Stress, Pain",
        effects: "Relaxed, Happy",
        breed: "Indica",
        description: "Do-Si-Dos is an indica-dominant hybrid with qualities similar to its parent, OGKB, a GSC-phenotype. With glittering trichomes, bright pistils, and lime green and lavender leaves, this strain is a feast for eyes. Its aroma is pungent, sweet, and earthy with slight floral funkiness. These classic OG aromas blend nicely with medical-grade body effects that lean toward the sedative side with the addition of Face Off OG genetics. Enjoy a stoney, in-your-face buzz off the start that melts down over the body, prettifying the consumer with relaxation that emanates outward."
    },
    {
        img_url: "https://leafly-production.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fleafly-images%2Fflower-images%2FAMNESIA-026.jpg?w=122&h=122&auto=format&fit=crop&dpr=2&q=25&ixlib=js-2.3.1&s=8bacac41ba2670188c2c1ac253378557",
        name: "Amnesia",
        flavor: "Fruity",
        ailment: "Stress, Depression",
        effects: "Energetic, Happy",
        breed: "Sativa",
        description: "Amnesia is typically a sativa-dominant cannabis strain with some variation between breeders. Skunk, Cinderella 99, and Jack Herer are some of Amnesia’s genetic forerunners, passing on uplifting, creative, and euphoric effects ideal for treating mood disorders. Growers should expect a 9-10 week flowering period with moderate yields. This strain normally has a high THC and low CBD profile and produces intense psychotropic effects that new consumers should be wary of."
    },
    {
        img_url: "https://leafly-production.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fleafly-images%2Fflower-images%2Fog-kush.png?w=122&h=122&auto=format&fit=crop&dpr=2&q=25&ixlib=js-2.3.1&s=9a4a1c1ae480b52df19574511c385840",
        name: "Alien OG",
        flavor: "Herbal",
        ailment: "Stress, Pain",
        effects: "Happy Relaxed",
        breed: "Hybrid",
        description: "First available as a clone in California’s Bay Area and now in seed form from Cali Connection, Alien OG is a cross of Tahoe OG and Alien Kush. Alien OG has the typical lemon and pine OG smell and flavor, and its intense high combines heavy body effects and a psychedelic cerebral buzz. Beginners and novices, be sure to take it slow with this heavy-hitter."
    },
    {
        img_url: "https://leafly-production.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fleafly-images%2Fflower-images%2Fmango-kush.jpg?w=122&h=122&auto=format&fit=crop&dpr=2&q=25&ixlib=js-2.3.1&s=f69560751e0effddc79e2dde0d7f9aa2",
        name: "Maui Wowie",
        flavor: "Pine",
        ailment: "Stress, Anxiety",
        effects: "Energetic, creative",
        breed: "Sativa",
        description: "Maui Wowie (not Maui Waui) is a classic sativa whose tropical flavors and stress-relieving qualities will float you straight to the shores of Hawaii where this strain originally comes from. Since its beginnings in the island’s volcanic soil, Maui Wowie has spread across the world to bless us with its sweet pineapple flavors and high-energy euphoria. Lightweight effects allow your mind to drift away to creative escapes, while Maui Wowie’s motivating, active effects may be all you need to get outside and enjoy the sun. This tall, lanky strain is best suited for cultivation in warm, tropical climates that mirror its homeland, but a bright environment and nutrient-rich soil are typically adequate for indoor growing.  "
    },
    {
        img_url: "https://leafly-production.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fleafly-images%2Fflower-images%2Fstrawberry-cough.png?w=122&h=122&auto=format&fit=crop&dpr=2&q=25&ixlib=js-2.3.1&s=8aad093fe833bc8e2f9aff6f9c467f2a",
        name: "Sensi Star",
        flavor: "Herbal",
        ailment: "Insomnia, Stress",
        effects: "Sleepy, Happy",
        breed: "Indica",
        description: "Sensi Star by Paradise Seeds is a legendary indica strain that is renowned worldwide for its powerful full-body effects and subtle cerebral invigoration. Crystal trichomes sparkle like a constellation of stars against this indica’s dark green and purple coloration, reflecting a potency worthy of placement in the 1999, 2000, and 2005 High Times Cannabis Cups. Her stunning results at maturation have also won the hearts of growers who cultivate both indoor and out in either hydroponic or soil methods."
    },
    {
        img_url: "https://leafly-production.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fleafly-images%2Fflower-images%2Fcherry-pie.jpg?w=122&h=122&auto=format&fit=crop&dpr=2&q=25&ixlib=js-2.3.1&s=052711d40cf80c4ed26d43e93b0d173b",
        name: "Charlotte's Web",
        flavor: "Herbal",
        ailment: "Stress, Pain",
        effects: "Focused, Uplifted",
        breed: "Sativa",
        description: "Charlotte's Web is a hemp cultivar that was specifically bred by the Stanley Brothers of Colorado for its high CBD and low THC content. These unique and proprietary genetics are used by Charlotte's Web (the company) to create extracts for a variety of health and wellness products. Contrary to popular belief, Charlotte’s Web products are hemp-derived and are non-intoxicating. Charlotte’s Web gained popularity after being featured on CNN’s Weed 2 for the effects it had on Charlotte Figi, a young girl with a rare seizure disorder. New consumers should consult their doctor with any medical concerns."
    },
    {
        img_url: "https://leafly-production.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fleafly-images%2Fflower-images%2Fbubba-kush.png?w=122&h=122&auto=format&fit=crop&dpr=2&q=25&ixlib=js-2.3.1&s=df957e7e8abccc05655741de00268f31",
        name: "Jedi Kush",
        flavor: "Herbal",
        ailment: "Stress, Pain, Insomnia",
        effects: "Tingly, Relaxed, Sleep",
        breed: "Indica",
        description: "Cali Connection’s Jedi Kush brings together the forces of Death Star and SFV OG Kush, an indica alliance that will awaken both mind and body. Jedi Kush’s timid aroma isn’t fully realized until a bud is cracked open, releasing a complex fusion of sour skunk and tangy diesel. Dreamy euphoria blankets the mind, a sensation that builds over time into bolting cerebral energy. This lethargy-free strain is a great way for patients to get a powerful dose of cannabinoids during the day while treating ailments like pain, PTSD, depression, stress, headaches, and appetite loss. Jedi plants show resilience in outdoor gardens but also thrive indoors with a flowering time of 8 to 9 weeks."
    },
    {
        img_url: "https://leafly-production.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fleafly-images%2Fflower-images%2Fgreen-crack.png?w=122&h=122&auto=format&fit=crop&dpr=2&q=25&ixlib=js-2.3.1&s=499c3ff271089d0004c303d9bb688355",
        name: "Grease Monkey",
        flavor: "Peppery",
        ailment: "Pain, Nausea",
        effects: "Relaxed HappyHungry",
        breed: "Hybrid",
        description: "Grease Monkey is a sweet, earthy strain with strong skunky overtones. Created by Exotic Genetix, Grease Monkey is a cross of GG4 x Cookies and Cream. This strain saddles the consumer with a lazy, munchie-fueled body buzz that may soften the blow of chronic pain, nausea, and stress. While defined as a hybrid, this Grease Monkey’s deep relaxation will naturally lead some consumers toward sleep, so mind your dosage."
    },
    {
        img_url: "https://leafly-production.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fleafly-images%2Fflower-images%2Fo4MhnTW2QK2LicV68uiY_CHOCOLOPE-212-edited.jpg?w=122&h=122&auto=format&fit=crop&dpr=2&q=25&ixlib=js-2.3.1&s=17c3f0c57e83f6429758d878bf29fd29",
        name: "Chocolate Thai",
        flavor: "Herbal",
        ailment: "Stress, Anxiety",
        effects: "Focused, Creative",
        breed: "Sativa",
        description: "A legendary landrace strain from Thailand, Chocolate Thai first made an appearance in the U.S. sometime in the 1960s as “Thai sticks,” spindly flowers tied to a bamboo stick that were renowned for their potent high. Old school heads remember these buds as slender and airy, medium-to-dark brown in color, and possessing a unique chocolate-coffee aroma. Due to the fact that it was a long-flowering, low-yielding sativa strain that always produced male flowers and seeds and was incredibly difficult to clone and grow, it is most likely that Chocolate Thai no longer exists in its original form. There are several seed lines sold under the name, but these have either been crossbred to provide some stabilizing traits or are of unknown provenance."
    },
];

// =========== GET Strains ===========
router.get('/', (req, res) => {
    console.log(strains[0]);
    res.status(200).json(strains);
  });

// // =========== GET Strains ===========
// router.get('/', (req, res) => {
//     console.log("token for STRAINS", req.decodedToken);
//     Strains.find()
//       .then(strains => {
//         res.json(strains);
//       })
//       .catch(err => res.send(err));
//   });
  
//   // =========== GET Strain by id ===========
//   router.get('/:id', (req, res) => {
//     Users.findById(req.params.id)
//     .then(resource => {
//       if(resource) {
//         res.status(200).json(resource)
//       } else {
//         res.status(404).json({message: "user not found"})
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ message: "ERROR unable to find user", errorMessage: error.detail });
//     });
//   })
  
//   // =========== DELETE Strain ===========
//   router.delete('/:id', (req, res) => {
//     const { id } = req.params;
  
//     Users.remove(id)
//     .then(deleted => {
//       if(deleted){
//         res.status(200).json({removed: `user ${id} 😥`})
//       } else {
//         res.status(404).json({message: "user not found"})
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ message: "ERROR unable to find user", err });
//     });
//   })
  
  module.exports = router;
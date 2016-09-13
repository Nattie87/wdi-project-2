  const mongoose = require("mongoose");
  const config   = require("../config/config");
  const feminist = require("../models/feminist");
  const path     = require("path");

  mongoose.connect(config.db);

  Feminist.collection.drop();

  const feminists = [{
    name: "Emily Wilding Davidson",
    image:"http://www.moreinmorpeth.co.uk/images/placesToVisit/large/18.jpg",
    date: "8th June 1913",
    description: "Emily Wilding Davison is buried in the church yard of St Mary the Virgin, Morpeth in a family plot. Emily Wilding Davison - fatally injured when she stepped on to the track during the 1913 Epsom Derby and fell under the flying hooves of King George V’s horse Anmer.In 1906, she joined the Women's Social and Political Union (WSPU), founded by Emmeline Pankhurst. Three years later she gave up her job as a teacher and went to work full-time for the suffragette movement.",
    location: "Loans dean",
    lat:"55.1597571",
    lng: "-1.6921848",
    type: "Person"
  },{
      name: "Emily Wilding Davidson",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Emily_Davison_portrait.jpg",
      date: "1872-1913"
      description: "Suffragette Emily Davison who was born in Blackheath",
      location:"London Blackheath",
      lat:"51.4779702",
      lng:"0.0094389",
      type: "Person"
    },{
      name:"Emily wilding Davidson",
      image:"http://ichef-1.bbci.co.uk/news/660/media/images/65705000/jpg/_65705345_65704498.jpg",
      date: "June 4th 1913",
      description: "The Derby took place on June 4th 1913. Emily Wilding Davison was to achieve her place in history by giving her life for the Suffragette cause at this Derby – the world’s most famous horse race. Emily Davison suffered terrible injuries at this race and never recovered from them. She died in a local hospital four days after the race.",
      location:"Epsom",
      lat: "51.3125646",
      lng: "-0.2569984",
      type: "Person"
    },{
        name: "Emily wilding Davidson- westminster cupboard",
        image: "http://blog.oup.com/wp-content/uploads/2013/06/Mrs-Emmeline-Pankhurst.jpg",
        date: "2nd April 1911",
        description: "On 2 April 1911, the night of the 1911 census, Davison hid in a cupboard in St Mary Undercroft, the chapel of the Palace of Westminster. She remained in the cupboard during the census so that she could legitimately list her place of residence as the "House of Commons" on the census form.",
        location:"London",
        lat: "51.4998254",
        lng: "-0.1288828",
        type: "Person"
    }, {
      name:"Emily wilding Davidson",
      image: "http://www.epsomguardian.co.uk/resources/images/2403499/?type=responsive-gallery",
      date: "1913",
      description: "On June 14 1913, 40-year-old schoolteacher Davison ran out in front of King George V’s horse, Anmer, as it was racing in the Epsom Derby.She was trampled on and died from her injuries four days later at the Old Cottage Hospital in Alexandra Road, Epsom.",
      location: "Epsom",
      lat: "51.3345331",
      lng: "-0.2575378",
      type: "Person"
    },{

      name: "Emily wilding Davidson",
      image: "http://cdn.lrb.co.uk/assets/edillus/warn01_3513_01.jpg",
      date: "14th June 1913",
      description: "This did not stop the members of the WSPU and the Suffragette movement from giving Emily Davison a large and spectacular funeral procession from Epsom to a memorial service in St George's Church, Bloomsbury on 14 June. 6,000 women marched through London following her cortege, to show their support. The following day her coffin was taken by train to St Mary's Church, Morpeth for burial in the family plot. Her gravestone bears the WSPU slogan 'Deeds not words'",
      location: "London",
      lat: "51.5176224",
      lng: "-0.1246451"
      type: "Person"

    },{
      name: "Christabel Pankhurst",
      image:"https://upload.wikimedia.org/wikipedia/commons/5/59/C.H._Pankhurst_a_Meurisse_1912.jpg",
      date: "4th March 1912",
      description:
      location:
      lat:
      lng:
      type: "Person"

name
image:
date:
description:
location:
lat:
lng:
type: "Person"

    }

  }]

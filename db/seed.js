  const mongoose = require('mongoose');
  const config   = require('../config/config');
  const Feminist = require('../models/feminist');
  const path     = require('path');

  mongoose.connect(config.db);

  Feminist.collection.drop();

  const feminists = [{
    name: 'Emily Wilding Davidson',
    image: 'http://www.moreinmorpeth.co.uk/images/placesToVisit/large/18.jpg',
    date: '8th June 1913',
    description: 'Emily Wilding Davison is buried in the church yard of St Mary the Virgin, Morpeth in a family plot. Emily Wilding Davison - fatally injured when she stepped on to the track during the 1913 Epsom Derby and fell under the flying hooves of King George V’s horse Anmer.In 1906, she joined the Women\'s Social and Political Union (WSPU), founded by Emmeline Pankhurst. Three years later she gave up her job as a teacher and went to work full-time for the suffragette movement.',
    location: 'Loans dean',
    lat: '55.1597571',
    lng: '-1.6921848',
    type: 'Person'
  },{
    name: 'Emily Wilding Davidson',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Emily_Davison_portrait.jpg',
    date: '1872-1913',
    description: 'Suffragette Emily Davison who was born in Blackheath',
    location: 'London Blackheath',
    lat: '51.4779702',
    lng: '0.0094389',
    type: 'Person'
  },{
    name: 'Emily wilding Davidson',
    image: 'http://ichef-1.bbci.co.uk/news/660/media/images/65705000/jpg/_65705345_65704498.jpg',
    date: 'June 4th 1913',
    description: 'The Derby took place on June 4th 1913. Emily Wilding Davison was to achieve her place in history by giving her life for the Suffragette cause at this Derby – the world’s most famous horse race. Emily Davison suffered terrible injuries at this race and never recovered from them. She died in a local hospital four days after the race.',
    location: 'Epsom',
    lat: '51.3125646',
    lng: '-0.2569984',
    type: 'Person'
  },{
    name: 'Emily wilding Davidson- westminster cupboard',
    image: 'http://blog.oup.com/wp-content/uploads/2013/06/Mrs-Emmeline-Pankhurst.jpg',
    date: '2nd April 1911',
    description: 'On 2 April 1911, the night of the 1911 census, Davison hid in a cupboard in St Mary Undercroft, the chapel of the Palace of Westminster. She remained in the cupboard during the census so that she could legitimately list her place of residence as the \'House of Commons\' on the census form.',
    location: 'London',
    lat: '51.4998254',
    lng: '-0.1288828',
    type: 'Person'
  }, {
    name: 'Emily wilding Davidson',
    image: 'http://www.epsomguardian.co.uk/resources/images/2403499/?type=responsive-gallery',
    date: '1913',
    description: 'On June 14 1913, 40-year-old schoolteacher Davison ran out in front of King George V’s horse, Anmer, as it was racing in the Epsom Derby.She was trampled on and died from her injuries four days later at the Old Cottage Hospital in Alexandra Road, Epsom.',
    location: 'Epsom',
    lat: '51.3345331',
    lng: '-0.2575378',
    type: 'Person'
  },{

    name: 'Emily wilding Davidson',
    image: 'http://cdn.lrb.co.uk/assets/edillus/warn01_3513_01.jpg',
    date: '14th June 1913',
    description: 'This did not stop the members of the WSPU and the Suffragette movement from giving Emily Davison a large and spectacular funeral procession from Epsom to a memorial service in St George\'s Church, Bloomsbury on 14 June. 6,000 women marched through London following her cortege, to show their support. The following day her coffin was taken by train to St Mary\'s Church, Morpeth for burial in the family plot. Her gravestone bears the WSPU slogan \'Deeds not words\'',
    location: 'London',
    lat: '51.5176224',
    lng: '-0.1246451',
    type: 'Person'

  },{
    name: 'Christabel Pankhurst',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/59/C.H._Pankhurst_a_Meurisse_1912.jpg',
    date: '4th March 1912',
    description: '6 Catherine Street, WC2B Now a food advisory organisation, this was once the vegetarian restaurant where, on 4 March 1912, Christabel Pankhurst and WSPU members plotted a militant demonstration on Whitehall in the top-floor rooms, while a troupe of detectives waited outside to arrest them',
    location: 'London',
    lat: '51.5126011',
    lng: '-0.12231',
    type: 'Person'
  },{

    name: 'Mary Richardson',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Mary_Raleigh_Richardson.jpg',
    date: '10th March 1914',
    description: 'Head for Room 30 of the National Gallery and place yourself opposite Rokeby Venus by Diego Velasquez. Then imagine suffragette Mary Richardson attacking the painting with a meat cleaver, as she did on 10 March 1914, provoked by the arrest of Emmeline Pankhurst the day before.',
    location: 'London',
    lat: '51.508929',
    lng: '-0.1304877',
    type: 'Person'

  },{

    name: 'Trafalgar Hotel',
    image: 'http://lowres-picturecabinet.com.s3-eu-west-1.amazonaws.com/29/main/14/819073.jpg',
    date: '1911',
    description: 'Hundreds of women gathered to boycott the 1911 census – if they were not counted politically they felt they shouldn’t be counted at all. Ponder Holloway Jingles, an anthology by suffragette inmates,',
    location: 'London',
    lat: '51.507368',
    lng: '-0.1313067',
    type: 'Place'
  },{

    name: 'Downing Street',
    image: 'https://pbs.twimg.com/media/B-haCvNIMAAMrTe.png',
    date: '23rd February 1909',
    description: 'In 1909, Miss Daisy Solomon and Miss Elspeth McLellan ‘posted’ themselves (allowed under Post Office regulations) to Prime Minister Herbert Asquith. Sadly, their mission was short-lived when a Downing Street official refused to sign for the “human letters” and sent them back to the WSPU offices',
    location: 'London',
    lat: '51.5033635',
    lng: '-0.1298135',
    type: 'Place'
  },{
    name: 'Westminster Abbey',
    image: 'http://c7.alamy.com/comp/B529YC/suffragette-bombing-june-1914-suffragettes-bomb-st-george-s-church-B529YC.jpg',
    date: '12th June 1914',
    description: 'This is where one unnamed suffragette successfully set off a bomb in Edward the Confessor’s Chapel, close to the Coronation Chair, after ditching her bag in a pew and fleeing. Within the recovered bag was a feather boa and a guidebook.',
    location: 'London',
    lat: '51.4992921',
    lng: '-0.1294984',
    type: 'Place'
  },{
      name: 'Emily Davidson',
      image: 'https://s-media-cache-ak0.pinimg.com/236x/cb/18/64/cb186404c931ba06302d2f88e62cad67.jpg',
      date: '1913',
      description: 'Under the arches of a former 14th century store house – is just minutes from the Palace of Westminster where Emily Davison boycotted the 1911 Census by hiding in a cupboard. It appealed to her sense of irony that, as a woman with no right to vote, her place of residence on census night would be the House of Commons',
      location: 'London',
      lat: '51.4991551',
      lng: '-0.134191',
      type: 'Person'
    },{
      name: 'Caxton Hall',
      image: 'http://www.nickelinthemachine.com/wordpress/wp-content/uploads/suffragettes_england_1908.jpg',
      date: '1906',
      description: 'The first meeting of the Suffragettes in 1906 was at Caxton Hall and it was often used for their rallies due to its close proximity to the Houses of Parliament and no doubt plenty of railings. Caxton Hall is now a listed building mainly because of its Suffragette associations.',
      location: 'London',
      lat: '51.4985271',
      lng: '-0.1360242',
      type: 'Place'
    },{
      name: 'Suffragettes sculpture scroll',
      image: 'http://assets.londonremembers.com/images/big/49321.jpg?1319393442',
      date: '1970',
      description: 'This tribute is erected by the Suffragette Fellowship to commemorate the courage and perseverance of all those men and women who in the long struggle for votes for women selflessly braved derision, opposition and ostracism, many enduring physical violence and suffering.',
      location: 'London',
      lat: '51.4980054',
      lng: '-0.1355756',
      type: 'Place'
    },{
      name: 'Matilde Wolff van Sandau and Katie Mills',
      image: 'https://images.chesscomfiles.com/proxy/files.chesscomfiles.com/images_users/tiny_mce/batgirl/MissField/http/3ba0673877.jpg',
      date: 'March 1912',
      description: 'In March 1912, suffragettes Matilde Wolff van Sandau and Katie Mills smashed the post office building’s windows with stones. The suffragettes saw the postal service as a symbol of the oppressive male government. ',
      location: 'London',
      lat: '51.4975572',
      lng: '-0.1381016',
      type: 'Person'
    },{
      name: 'Eaton Square',
      image: 'http://lowres-picturecabinet.com.s3-eu-west-1.amazonaws.com/29/main/5/137934.jpg',
      date: '1909',
      description: ' Suffragette procession of nurses and midwives Nurses and midwives in the Pageant of Women\'s Trades and Professions. The Pageant of Women\'s Trades and Professions was held in the Albert Hall in April 1909, and brought together members of the suffrage movement. These midwives and nurses took part in the procession that preceded the pageant from Eaton Square to the Albert Hall.',
      location: 'London',
      lat: '51.4957217',
      lng: '-0.1541154',
      type: 'Place'
    },{
      name: 'Emmeline Pankhurst',
      image: 'https://memoirsofametrogirl.files.wordpress.com/2015/10/emmeline-pankhurst-grave-2.jpg?w=210&h=374',
      date: '4th June 1928',
      description: 'At the northern end of the cemetery, beneath a red sandstone Celtic cross, lies the grave of Emmeline Pankhurst who died on 14 June 1928 aged 69. Just 18 days later, parliament gave women over the age of 21 the right to equal votes with men, regardless of property ownership.',
      location: 'London',
      lat: '51.4852999',
      lng: '-0.1933332',
      type: 'Person'
    },{
      name: 'Annie Briggs, Evelyn Manesta and Lillian Forrester',
      image: 'http://www.newmanchesterwalks.com/wp-content/uploads/2013/07/Annie-Briggs-etc.jpg',
      date: 'April 1913',
      description: 'In 1913, three suffragettes snuck in to destroy artworks, protesting against the value placed on property over people.',
      location: 'Manchester',
      lat: '53.4786541',
      lng: '-2.2436001',
      type: 'Person'
    },{
      name: 'Christabel Pankhurst and Annie Kenney',
      image: 'http://www.newmanchesterwalks.com/wp-content/uploads/2010/08/Suffragettes-1.jpg',
      date: 'October 1905',
      description: 'When Christabel Pankhurst and Annie Kenney were arrested for disrupting the Liberal Party’s political rally at the Free Trade Hall in October 1905 they were taken first to a cell in Manchester Town Hall and then to Strangeways Prison.',
      location: 'Manchester',
      lat: '53.4791595',
      lng: '-2.2462938',
      type: 'Person'
    },{
      name: 'Manchester Society for Women\'s Suffrage',
      image: 'https://womanandhersphere.files.wordpress.com/2014/08/new-constitutional-society-for-womens-suffrage-work-room-19141.jpg',
      date: '1868-1887',
      description: 'Manchester National Society for Women\'s Suffrage (MNSWS) in November 1867 when it joined London and Edinburgh societies in the National Society for Women\'s Suffrage. In 1897, with about 500 other suffrage societies, the MNSWS joined the National Union of Women\'s Suffrage Societies (NUWSS) and changed its name to the North of England Society for Women\'s Suffrage and in 1911 it became the Manchester Society for Women\'s Suffrage, part of the Manchester District Federation of the NUWSS',
      location: 'Manchester',
      lat: '53.4790036',
      lng: '-2.2502634',
      type: 'Place'
    },{
      name: 'Pankhurst Family',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Pankhurst_plaque.jpg/220px-Pankhurst_plaque.jpg',
      date: '1858- 1928',
      description: 'Pankhurst family home was the birthplace of the suffragette movement',
      location: 'Manchester',
      lat: '53.4631606',
      lng: '-2.229649',
      type: 'Person'
    },{
      name: 'Kitty Marion',
      image: 'https://intothelimelightdotorg.files.wordpress.com/2015/07/image2.jpg',
      date: '1908',
      description: 'In 1908, suffragettes headed here for The Great Demonstration. Then, in 1913, Kitty Marion destroyed the park’s cactus house with a pipe bomb, just one of her many violent acts in the name of women’s rights.',
      location: 'Manchester',
      lat: '53.4515621',
      lng: '-2.2515091',
      type: 'Person'
    },{
      name: 'Emmeline Pankhurst',
      image: 'https://memoirsofametrogirl.files.wordpress.com/2014/02/pankhurst-4.jpg?w=1182&h=890',
      date: '1959',
      description: 'Emmeline Pankhurst statue in Victoria Tower Gardens',
      location: 'London',
      lat: '51.4969444',
      lng: '-0.1271887',
      type: 'Person'
    },{
      name: 'Holloway Prison',
      image: 'https://s-media-cache-ak0.pinimg.com/564x/e1/56/d4/e156d4a5014c6c9158bd207cace99321.jpg',
      date: '1832 - 1918',
      description: 'Suffragettes were imprisoned at Holloway. Many of them went on hunger strike and were subjected to force-feeding in prison',
      location: 'London',
      lat: '51.5536714',
      lng: '-0.1248701',
      type: 'Place'
    },{
      name: 'Emmeline Pankhurst',
      image: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Emmeline_Pankhurst_-_being_arrested.jpg',
      date: 'May 1914',
      description: 'May 1914. Pankhurst was trying to present a petition to the king. \'The Suffragette\' newspaper reported that as she was driven away to Holloway Gaol, she called out, \'Arrested at the gates of the palace. Tell the king!\' Pankhurst was jailed several times during the fight to get women the vote. ',
      location: 'London',
      lat: '51.501364',
      lng: '-0.1440787',
      type: 'Person'
    },{
      name: 'Estelle Sylvia Pankhurst',
      image: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-02/3/7/enhanced/webdr10/enhanced-buzz-wide-14123-1422965837-7.jpg?no-auto',
      date: '1882–1960',
      description: 'Estelle Sylvia Pankhurst (1882–1960) standing on a platform to paint the front of the Women’s Social Defence League premises in Bow Road, east London.',
      location: 'London',
      lat: '51.5271689',
      lng: '-0.0244806',
      type: 'Person'
    },{
      name: 'St James’s Park',
      image: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-02/3/7/enhanced/webdr09/enhanced-buzz-wide-26158-1422965831-7.jpg?no-auto',
      date: '1912',
      description: 'A male suffrage supporter being led over the bridge at St James’s Park after his arrest for involvement in an attack on Buckingham Palace.',
      location: 'London',
      lat: '51.5024597',
      lng: '-0.1369996',
      type: 'Place'
    },{
      name: 'Montpelier Square',
      image: 'http://i.telegraph.co.uk/multimedia/archive/02161/womens-exhibition_2161323k.jpg',
      date: '1909',
      description: 'From May 13 to 26, the entire building was festooned in purple white and green, the three colours of the WSPU, with banners flying bravely ‘so that no one could mistake who was in possession of the building’. Visitors were lulled into an odd sense of familiarity as they toured the exhibition partly by the music of the various quartets as well as the Aeolian Women’s Orchestra who played a selection of Victorian and Edwardian favourites throughout the two weeks.',
      location: 'London',
      lat: '51.5000484',
      lng: '-0.1683941',
      type: 'Place'
    },{
      name: 'Manchester High School for Girls',
      image: 'http://madamepickwickartblog.com/wp-content/uploads/2011/03/lawrence9.jpg',
      date: '1893-1898',
      description: 'In 1893, the suffragette, Emmeline Pankhurst, enrolled her three daughters, Christabel, Sylvia and Adele at the school. The Pankhursts and their Women\'s Political and Social Union campaigned fiercely for women\'s right to vote. The colours of their banner - green, white, violet - were a secret code: Give Women Votes.',
      location: 'Manchester',
      lat: '53.446607',
      lng: '-2.2251277',
      type: 'Place'
    },{
      name: 'Westminster',
      image: 'http://3.bp.blogspot.com/-RLy5vJxyMwY/VM3mJoNjx_I/AAAAAAABQpU/ijiEmIt39x8/s1600/Suffragettes%2Bvs.%2BPolice%2B.jpg',
      date: '18th November 1910',
      description: ' A suffragette struggles with a policeman on \'Black Friday,\' in Westminster, London. The Conciliation Bill (which would have given the vote to women who occupied premises for which they were responsible) was shelved by Prime Minister Herbert Asquith. On learning of this, the Women\'s Social and Political Union marched on the House of Commons.',
      location: 'London',
      lat: '51.5003798',
      lng: '-0.1348381',
      type: 'Place'
    },{
      name: 'Womens coronation procession',
      image: 'http://fe01.museumoflondon.org.uk/imagestore/170/media-170433/original.jpg?_ga=1.242790980.711614429.1473264455',
      date: 'June 17th 1911',
      description: ' The women\'s demonstration took the form of stretching across the streets of London from Blackfriars Bridge to the Albert Hall one fine Saturday afternoon a living five-linked chain of women, dressed for the most part in white. The chain, decorated with flowers and flags, enlivened by matching music, and tied up here and there into a knot by a tableau or a pageant, was in ceaseless movement throughout its entire length.',
      location: 'London',
      lat: '51.5097074',
      lng: '-0.1065963',
      type: 'Place'
    },{
      name: 'Bow Street magistrates court',
      image: 'https://i.guim.co.uk/img/static/Guardian/news/gallery/2008/feb/06/1/GD6133318@2nd-May-1913--A-suffr-368.jpg?w=720&q=20&auto=format&usm=12&fit=max&dpr=2&s=85e4fde23ead12d49e5f2125dae7b1b4',
      date: 'May 1913',
      description: 'A suffragette selling a newsheet outside Bow Street magistrates court in May 1913, where some suffragettes were being tried',
      location: 'London',
      lat: '51.5131514',
      lng: '-0.1236742',
      type: 'Place'
    },{
      name: 'Henley Regatta',
      image: 'https://i.guim.co.uk/img/static/Guardian/news/gallery/2008/feb/06/1/GD6133248@2nd-July-1913--Two-su-8426.jpg?w=720&q=20&auto=format&usm=12&fit=max&dpr=2&s=44a03f699a5d1d22894182c0971c5548',
      date: 'July 1913',
      description: 'Two suffragettes selling The Suffragette at the Henley Regatta.',
      location: 'London',
      lat: '51.5373083',
      lng: '-0.9018663',
      type: 'Person'
    },{
      name: 'Houses of Parliament',
      image: 'http://img2.rnkr-static.com/user_node_img/50005/1000088349/C350/lady-nancy-astor-quotations-photo-u1.jpg',
      date: '1919',
      description: 'Becoming the first woman to take her seat in the British parliament, as an MP for Plymouth Sutton – a position she held from 1919 to 1945.',
      location: 'London',
      lat: '51.5284748',
      lng: '-0.101599',
      type: 'Place'
    },{
      name: 'Wimbledon Common',
      image: 'http://lowres-picturecabinet.com.s3-eu-west-1.amazonaws.com/29/main/11/446424.jpg',
      date: '2nd April 1911',
      description: 'In London, some gathered for a midnight picnic on Wimbledon Common with banners proclaiming \'If women don\'t count, neither shall they be counted.\'',
      location: 'London',
      lat: '51.4366449',
      lng: '-0.2357356',
      type: 'Place'
    },{
      name: 'Lydia Becker',
      image: 'http://www.oldham-chronicle.co.uk/uploads/f2/news/img/2013225_12652.jpg',
      date: '24th February 1827',
      description: 'Becker led the early British women’s suffrage movement. Speaking at an event in 1874, she inspired Emmeline Pankhurst, then aged 15. In 1880, Becker helped to secure the vote for women on the Isle of Man. She held that unmarried women needed the vote more than others, a cause that made her the butt of many cartoons.',
      location: 'Manchester',
      lat: '53.4792872',
      lng: '-2.2435874',
      type: 'Person'
    },{
      name: 'Leonora Cohen',
      image: 'https://c2.staticflickr.com/4/3221/2840806655_70a2aeaaba_b.jpg',
      date: '1873-1978',
      description: 'Leonora was born in June 1873 and died in 1978. She lived at 2 Claremont Villas, Clarendon Road in Leeds for thirteen years, where a blue plaque commemorates her life.',
      location: 'Manchester',
      lat: '53.8040865',
      lng: '-1.5618014',
      type: 'Person'
    },{
      name: 'Leonora Cohen',
      image: 'http://newsimg.bbc.co.uk/media/images/46830000/jpg/_46830246_leonora_cohen.jpg',
      date: '1st February 1913',
      description: 'On the 1st February 1913, when she produced an iron bar from under her coat in Tower of London and smashed a display case containing insignia of the Order of Merit. Her courage and articulacy when she conducted her own defence in the ensuing court case won her much admiration.',
      location: 'London',
      lat: '51.5081124',
      lng: '-0.078138',
      type: 'Person'
    },{
      name: 'WSPU headquarters',
      image: 'https://womanandhersphere.files.wordpress.com/2013/04/dsc01059.jpg?w=1212&h=1614',
      date: '30th April 1913',
      description: 'WSPU headquarters at Lincoln’s Inn House in Kingsway were subjected to their first police raid. ',
      location: 'London',
      lat: '51.5144103',
      lng: '-0.1195641',
      type: 'Place'
    },{
      name: 'Millicent Fawcett\'s',
      image: 'https://womanandhersphere.files.wordpress.com/2014/04/millicent-fawcett-c-1928.jpg',
      date: '1847- 1929',
      description: 'Millicent Fawcett\'s home at No. 2, Gower Street. She was a leading Suffragist and campaigner for equal rights for women. She led the biggest suffrage organisation, the non-violent (NUWSS) from 1890-1919 and played a key role in gaining women the vote. Reflecting her passion for education, she helped to found Newnham College, Cambridge.',
      location: 'London',
      lat: '51.5199136',
      lng: '-0.1318239',
      type: 'Person'
    }];

  feminists.forEach((feminist) => {
    Feminist.create(feminist, (err, feminist) => {
      if (err) return console.log(err);
      return console.log(`${feminist.name} was created`);
    });
  });

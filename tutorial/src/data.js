const mpData = [
  {
    'name': 'Adams, Amy',
    'salutation': 'Hon',
    'electorate': 'Selwyn',
    'party': 'National Party',
    'email': 'Amy.Adams@parliament.govt.nz'
  },
  {
    'name': 'Allan, Kiri',
    'salutation': '',
    'electorate': '',
    'party': 'Labour Party',
    'email': 'Kiri.Allan@parliament.govt.nz'
  },
  {
    'name': 'Andersen, Virginia',
    'salutation': '',
    'electorate': '',
    'party': 'Labour Party',
    'email': 'Virginia.Andersen@parliament.govt.nz'
  },
  {
    'name': 'Ardern, Jacinda',
    'salutation': 'Rt. Hon.',
    'electorate': 'Mt Albert',
    'party': 'Labour Party',
    'email': 'Jacinda.Ardern@parliament.govt.nz'
  },
  {
    'name': 'Bakshi, Kanwaljit Singh',
    'salutation': '',
    'electorate': '',
    'party': 'National Party',
    'email': 'ksb@parliament.govt.nz'
  },
  {
    'name': 'Ball, Darroch',
    'salutation': '',
    'electorate': '',
    'party': 'NZ First',
    'email': 'Darroch.Ball@parliament.govt.nz'
  },
  {
    'name': 'Barry, Maggie',
    'salutation': 'Hon',
    'electorate': 'North Shore',
    'party': 'National Party',
    'email': 'Maggie.Barry@parliament.govt.nz'
  },
  {
    'name': 'Bayly, Andrew',
    'salutation': '',
    'electorate': 'Hunua',
    'party': 'National Party',
    'email': 'Andrew.Bayly@parliament.govt.nz'
  },
  {
    'name': 'Bennett, David',
    'salutation': 'Hon',
    'electorate': 'Hamilton East',
    'party': 'National Party',
    'email': 'David.Bennett@parliament.govt.nz'
  },
  {
    'name': 'Bennett, Paula',
    'salutation': 'Hon',
    'electorate': 'Upper Harbour',
    'party': 'National Party',
    'email': 'Paula.Bennett@parliament.govt.nz'
  },
  {
    'name': 'Bishop, Christopher',
    'salutation': '',
    'electorate': 'Hutt South',
    'party': 'National Party',
    'email': 'Christopher.Bishop@parliament.govt.nz'
  },
  {
    'name': 'Bridges, Simon',
    'salutation': 'Hon',
    'electorate': 'Tauranga',
    'party': 'National Party',
    'email': 'Simon.Bridges@parliament.govt.nz'
  },
  {
    'name': 'Brown, Simeon',
    'salutation': '',
    'electorate': 'Pakuranga',
    'party': 'National Party',
    'email': 'Simeon.Brown@parliament.govt.nz'
  },
  {
    'name': 'Brownlee, Gerry',
    'salutation': 'Hon',
    'electorate': 'Ilam',
    'party': 'National Party',
    'email': 'Gerry.Brownlee@parliament.govt.nz'
  },
  {
    'name': 'Carter, David',
    'salutation': 'Rt. Hon.',
    'electorate': '',
    'party': 'National Party',
    'email': 'David.Carter@parliament.govt.nz'
  },
  {
    'name': 'Clark, David',
    'salutation': 'Hon. Dr.',
    'electorate': 'Dunedin North',
    'party': 'Labour Party',
    'email': 'David.Clark@parliament.govt.nz'
  },
  {
    'name': 'Coffey, Tamati',
    'salutation': '',
    'electorate': 'Waiariki',
    'party': 'Labour Party',
    'email': 'Tamati.Coffey@parliament.govt.nz'
  },
  {
    'name': 'Coleman, Jonathan',
    'salutation': 'Hon. Dr.',
    'electorate': 'Northcote',
    'party': 'National Party',
    'email': 'Jonathan.Coleman@parliament.govt.nz'
  },
  {
    'name': 'Collins, Judith',
    'salutation': 'Hon',
    'electorate': 'Papakura',
    'party': 'National Party',
    'email': 'Judith.Collins@parliament.govt.nz'
  },
  {
    'name': 'Craig, Elizabeth',
    'salutation': 'Dr.',
    'electorate': '',
    'party': 'Labour Party',
    'email': 'Liz.Craig@parliament.govt.nz'
  },
  {
    'name': 'Curran, Clare',
    'salutation': 'Hon',
    'electorate': 'Dunedin South',
    'party': 'Labour Party',
    'email': 'Clare.Curran@parliament.govt.nz'
  },
  {
    'name': 'Davidson, Marama',
    'salutation': '',
    'electorate': '',
    'party': 'Green Party',
    'email': 'Marama.Davidson@parliament.govt.nz'
  },
  {
    'name': 'Davis, Kelvin',
    'salutation': 'Hon',
    'electorate': 'Te Tai Tokerau',
    'party': 'Labour Party',
    'email': 'Kelvin.Davis@parliament.govt.nz'
  },
  {
    'name': 'Dean, Jacqui',
    'salutation': 'Hon',
    'electorate': 'Waitaki',
    'party': 'National Party',
    'email': 'Jacqui.Dean@parliament.govt.nz'
  },
  {
    'name': 'Doocey, Matthew',
    'salutation': '',
    'electorate': 'Waimakariri',
    'party': 'National Party',
    'email': 'matthew.doocey@parliament.govt.nz'
  },
  {
    'name': 'Dowie, Sarah',
    'salutation': '',
    'electorate': 'Invercargill',
    'party': 'National Party',
    'email': 'Sarah.Dowie@parliament.govt.nz'
  },
  {
    'name': 'Dyson, Ruth',
    'salutation': 'Hon',
    'electorate': 'Port Hills',
    'party': 'Labour Party',
    'email': 'Ruth.Dyson@parliament.govt.nz'
  },
  {
    'name': 'Eagle, Paul',
    'salutation': '',
    'electorate': 'Rongotai',
    'party': 'Labour Party',
    'email': 'Paul.Eagle@parliament.govt.nz'
  },
  {
    'name': 'English, Bill',
    'salutation': 'Rt. Hon.',
    'electorate': '',
    'party': 'National Party',
    'email': 'bill.english@parliament.govt.nz'
  },
  {
    'name': 'Faafoi, Kris',
    'salutation': 'Hon',
    'electorate': 'Mana',
    'party': 'Labour Party',
    'email': 'kris.faafoi@parliament.govt.nz'
  },
  {
    'name': 'Falloon, Andrew',
    'salutation': '',
    'electorate': 'Rangitata',
    'party': 'National Party',
    'email': 'Andrew.Falloon@parliament.govt.nz'
  },
  {
    'name': 'Finlayson, Christopher',
    'salutation': 'Hon',
    'electorate': '',
    'party': 'National Party',
    'email': 'Christopher.Finlayson@parliament.govt.nz'
  },
  {
    'name': 'Genter, Julie Anne',
    'salutation': 'Hon',
    'electorate': '',
    'party': 'Green Party',
    'email': 'JulieAnne.Genter@parliament.govt.nz'
  },
  {
    'name': 'Ghahraman, Golriz',
    'salutation': '',
    'electorate': '',
    'party': 'Green Party',
    'email': 'Golriz.Ghahraman@parliament.govt.nz'
  },
  {
    'name': 'Goldsmith, Paul',
    'salutation': 'Hon',
    'electorate': '',
    'party': 'National Party',
    'email': 'Paul.Goldsmith@parliament.govt.nz'
  },
  {
    'name': 'Guy, Nathan',
    'salutation': 'Hon',
    'electorate': 'Otaki',
    'party': 'National Party',
    'email': 'Nathan.Guy@parliament.govt.nz'
  },
  {
    'name': 'Hayes, Joanne',
    'salutation': '',
    'electorate': '',
    'party': 'National Party',
    'email': 'Joanne.Hayes@parliament.govt.nz'
  },
  {
    'name': 'Henare, Peeni',
    'salutation': 'Hon',
    'electorate': 'Tamaki Makaurau',
    'party': 'Labour Party',
    'email': 'Peeni.Henare@parliament.govt.nz'
  },
  {
    'name': 'Hipango, Harete',
    'salutation': '',
    'electorate': 'Whanganui',
    'party': 'National Party',
    'email': 'Harete.Hipango@parliament.govt.nz'
  },
  {
    'name': 'Hipkins, Chris',
    'salutation': 'Hon',
    'electorate': 'Rimutaka',
    'party': 'Labour Party',
    'email': 'Chris.Hipkins@parliament.govt.nz'
  },
  {
    'name': 'Hudson, Brett',
    'salutation': '',
    'electorate': '',
    'party': 'National Party',
    'email': 'Brett.Hudson@parliament.govt.nz'
  },
  {
    'name': 'Hughes, Gareth',
    'salutation': '',
    'electorate': '',
    'party': 'Green Party',
    'email': 'gareth.hughes@parliament.govt.nz'
  },
  {
    'name': 'Huo, Raymond',
    'salutation': '',
    'electorate': '',
    'party': 'Labour Party',
    'email': 'Raymond.Huo@parliament.govt.nz'
  },
  {
    'name': 'Jackson, Willie',
    'salutation': 'Hon',
    'electorate': '',
    'party': 'Labour Party',
    'email': 'Willie.Jackson@parliament.govt.nz'
  },
  {
    'name': 'Jones, Shane',
    'salutation': 'Hon',
    'electorate': '',
    'party': 'NZ First',
    'email': 'Shane.Jones@parliament.govt.nz'
  },
  {
    'name': 'Joyce, Steven',
    'salutation': 'Hon',
    'electorate': '',
    'party': 'National Party',
    'email': 'Steven.Joyce@parliament.govt.nz'
  },
  {
    'name': 'Kanongata\'a-Suisuiki, Anahila',
    'salutation': '',
    'electorate': '',
    'party': 'Labour Party',
    'email': 'Anahila.Kanongata\'a-Suisuiki@parliament.govt.nz'
  },
  {
    'name': 'Kaye, Nikki',
    'salutation': 'Hon',
    'electorate': 'Auckland Central',
    'party': 'National Party',
    'email': 'Nikki.Kaye@parliament.govt.nz'
  },
  {
    'name': 'King, Matt',
    'salutation': '',
    'electorate': 'Northland',
    'party': 'National Party',
    'email': 'Matt.King@parliament.govt.nz'
  },
  {
    'name': 'Korako, Nuk',
    'salutation': '',
    'electorate': '',
    'party': 'National Party',
    'email': 'Nuk.Korako@parliament.govt.nz'
  },
  {
    'name': 'Kuriger, Barbara',
    'salutation': '',
    'electorate': 'Taranaki-King Country',
    'party': 'National Party',
    'email': 'Barbara.Kuriger@parliament.govt.nz'
  },
  {
    'name': 'Lee, Denise',
    'salutation': '',
    'electorate': 'Maungakiekie',
    'party': 'National Party',
    'email': 'Denise.Lee@parliament.govt.nz'
  },
  {
    'name': 'Lee, Melissa',
    'salutation': '',
    'electorate': '',
    'party': 'National Party',
    'email': 'Melissa.Lee@parliament.govt.nz'
  },
  {
    'name': 'Lees-Galloway, Iain',
    'salutation': 'Hon',
    'electorate': 'Palmerston North',
    'party': 'Labour Party',
    'email': 'Iain.Lees-Galloway@parliament.govt.nz'
  },
  {
    'name': 'Little, Andrew',
    'salutation': 'Hon',
    'electorate': '',
    'party': 'Labour Party',
    'email': 'Andrew.Little@parliament.govt.nz'
  },
  {
    'name': 'Logie, Jan',
    'salutation': '',
    'electorate': '',
    'party': 'Green Party',
    'email': 'Jan.Logie@parliament.govt.nz'
  },
  {
    'name': 'Lubeck, Maria',
    'salutation': '',
    'electorate': '',
    'party': 'Labour Party',
    'email': 'Maria.Lubeck@parliament.govt.nz'
  },
  {
    'name': 'Luxton, Jo',
    'salutation': '',
    'electorate': '',
    'party': 'Labour Party',
    'email': 'Jo.Luxton@parliament.govt.nz'
  },
  {
    'name': 'Macindoe, Tim',
    'salutation': 'Hon',
    'electorate': 'Hamilton West',
    'party': 'National Party',
    'email': 'Tim.Macindoe@parliament.govt.nz'
  },
  {
    'name': 'Mahuta, Nanaia',
    'salutation': 'Hon',
    'electorate': 'Hauraki-Waikato',
    'party': 'Labour Party',
    'email': 'Nanaia.Mahuta@parliament.govt.nz'
  },
  {
    'name': 'Mallard, Trevor',
    'salutation': 'Rt. Hon.',
    'electorate': '',
    'party': 'Labour Party',
    'email': 'Trevor.Mallard@parliament.govt.nz'
  },
  {
    'name': 'Marcroft, Jennifer',
    'salutation': '',
    'electorate': '',
    'party': 'NZ First',
    'email': 'Jennifer.Marcroft@parliament.govt.nz'
  },
  {
    'name': 'Mark, Ron',
    'salutation': 'Hon',
    'electorate': '',
    'party': 'NZ First',
    'email': 'Ron.Mark@parliament.govt.nz'
  },
  {
    'name': 'Martin, Tracey',
    'salutation': 'Hon',
    'electorate': '',
    'party': 'NZ First',
    'email': 'Tracey.Martin@parliament.govt.nz'
  },
  {
    'name': 'McAnulty, Kieran',
    'salutation': '',
    'electorate': '',
    'party': 'Labour Party',
    'email': 'Kieran.McAnulty@parliament.govt.nz'
  },
  {
    'name': 'McClay, Todd',
    'salutation': 'Hon',
    'electorate': 'Rotorua',
    'party': 'National Party',
    'email': 'Todd.McClay@parliament.govt.nz'
  },
  {
    'name': 'McKelvie, Ian',
    'salutation': '',
    'electorate': 'Rangitikei',
    'party': 'National Party',
    'email': 'Ian.Mckelvie@parliament.govt.nz'
  },
  {
    'name': 'Mitchell, Clayton',
    'salutation': '',
    'electorate': '',
    'party': 'NZ First',
    'email': 'Clayton.Mitchell@parliament.govt.nz'
  },
  {
    'name': 'Mitchell, Mark',
    'salutation': 'Hon',
    'electorate': 'Rodney',
    'party': 'National Party',
    'email': 'Mark.Mitchell@parliament.govt.nz'
  },
  {
    'name': 'Muller, Todd',
    'salutation': '',
    'electorate': 'Bay of Plenty',
    'party': 'National Party',
    'email': 'Todd.Muller@parliament.govt.nz'
  },
  {
    'name': 'Nash, Stuart',
    'salutation': 'Hon',
    'electorate': 'Napier',
    'party': 'Labour Party',
    'email': 'Stuart.Nash@parliament.govt.nz'
  },
  {
    'name': 'Ngaro, Alfred',
    'salutation': 'Hon',
    'electorate': '',
    'party': 'National Party',
    'email': 'Alfred.Ngaro@parliament.govt.nz'
  },
  {
    'name': 'O\'Connor, Damien',
    'salutation': 'Hon',
    'electorate': 'West Coast-Tasman',
    'party': 'Labour Party',
    'email': 'Damien.O\'Connor@parliament.govt.nz'
  },
  {
    'name': 'O\'Connor, Gregory',
    'salutation': '',
    'electorate': 'Ohariu',
    'party': 'Labour Party',
    'email': 'greg.oconnor@parliament.govt.nz'
  },
  {
    'name': 'O\'Connor, Simon',
    'salutation': '',
    'electorate': 'Tamaki',
    'party': 'National Party',
    'email': 'simon.oconnor@parliament.govt.nz'
  },
  {
    'name': 'Parker, David',
    'salutation': 'Hon',
    'electorate': '',
    'party': 'Labour Party',
    'email': 'David.Parker@parliament.govt.nz'
  },
  {
    'name': 'Parmar, Parmjeet',
    'salutation': 'Dr.',
    'electorate': '',
    'party': 'National Party',
    'email': 'Parmjeet.Parmar@parliament.govt.nz'
  },
  {
    'name': 'Patterson, Mark',
    'salutation': '',
    'electorate': '',
    'party': 'NZ First',
    'email': 'Mark.Patterson@parliament.govt.nz'
  },
  {
    'name': 'Penk, Chris',
    'salutation': '',
    'electorate': 'Helensville',
    'party': 'National Party',
    'email': 'chris.penk@parliament.govt.nz'
  },
  {
    'name': 'Peters, Winston',
    'salutation': 'Rt. Hon.',
    'electorate': '',
    'party': 'NZ First',
    'email': 'Winston.Peters@parliament.govt.nz'
  },
  {
    'name': 'Prime, Willow-Jean',
    'salutation': '',
    'electorate': '',
    'party': 'Labour Party',
    'email': 'Willow-Jean.Prime@parliament.govt.nz'
  },
  {
    'name': 'Radhakrishnan, Priyanca',
    'salutation': '',
    'electorate': '',
    'party': 'Labour Party',
    'email': 'Priyanca.Radhakrishnan@parliament.govt.nz'
  },
  {
    'name': 'Reti, Shane',
    'salutation': 'Dr.',
    'electorate': 'Whangarei',
    'party': 'National Party',
    'email': 'Shane.Reti@parliament.govt.nz'
  },
  {
    'name': 'Robertson, Grant',
    'salutation': 'Hon',
    'electorate': 'Wellington Central',
    'party': 'Labour Party',
    'email': 'Grant.Robertson@parliament.govt.nz'
  },
  {
    'name': 'Ross, Jami-Lee',
    'salutation': '',
    'electorate': 'Botany',
    'party': 'National Party',
    'email': 'Jami-Lee.Ross@parliament.govt.nz'
  },
  {
    'name': 'Rurawhe, Adrian',
    'salutation': '',
    'electorate': 'Te Tai Hauauru',
    'party': 'Labour Party',
    'email': 'Adrian.Rurawhe@parliament.govt.nz'
  },
  {
    'name': 'Russell, Deborah',
    'salutation': 'Dr.',
    'electorate': 'New Lynn',
    'party': 'Labour Party',
    'email': 'Deborah.Russell@parliament.govt.nz'
  },
  {
    'name': 'Sage, Eugenie',
    'salutation': 'Hon',
    'electorate': '',
    'party': 'Green Party',
    'email': 'Eugenie.Sage@parliament.govt.nz'
  },
  {
    'name': 'Salesa, Jenny',
    'salutation': 'Hon',
    'electorate': 'Manukau East',
    'party': 'Labour Party',
    'email': 'Jenny.Salesa@parliament.govt.nz'
  },
  {
    'name': 'Scott, Alastair',
    'salutation': '',
    'electorate': 'Wairarapa',
    'party': 'National Party',
    'email': 'Alastair.Scott@parliament.govt.nz'
  },
  {
    'name': 'Sepuloni, Carmel',
    'salutation': 'Hon',
    'electorate': 'Kelston',
    'party': 'Labour Party',
    'email': 'Carmel.Sepuloni@parliament.govt.nz'
  },
  {
    'name': 'Seymour, David',
    'salutation': '',
    'electorate': 'Epsom',
    'party': 'ACT New Zealand',
    'email': 'David.Seymour@parliament.govt.nz'
  },
  {
    'name': 'Shaw, James',
    'salutation': 'Hon',
    'electorate': '',
    'party': 'Green Party',
    'email': 'James.Shaw@parliament.govt.nz'
  },
  {
    'name': 'Simpson, Scott',
    'salutation': 'Hon',
    'electorate': 'Coromandel',
    'party': 'National Party',
    'email': 'Scott.Simpson@parliament.govt.nz'
  },
  {
    'name': 'Sio, Aupito William',
    'salutation': 'Hon',
    'electorate': 'Mangere',
    'party': 'Labour Party',
    'email': 'Aupito.william.sio@parliament.govt.nz'
  },
  {
    'name': 'Smith, Nick',
    'salutation': 'Hon. Dr.',
    'electorate': 'Nelson',
    'party': 'National Party',
    'email': 'Nick.Smith@parliament.govt.nz'
  },
  {
    'name': 'Smith, Stuart',
    'salutation': '',
    'electorate': 'Kaikoura',
    'party': 'National Party',
    'email': 'Stuart.Smith@parliament.govt.nz'
  },
  {
    'name': 'Stanford, Erica',
    'salutation': '',
    'electorate': 'East Coast Bays',
    'party': 'National Party',
    'email': 'erica.stanford@parliament.govt.nz'
  },
  {
    'name': 'Strange, Jamie',
    'salutation': '',
    'electorate': '',
    'party': 'Labour Party',
    'email': 'Jamie.Strange@parliament.govt.nz'
  },
  {
    'name': 'Swarbrick, Chloe',
    'salutation': '',
    'electorate': '',
    'party': 'Green Party',
    'email': 'Chloe.Swarbrick@parliament.govt.nz'
  },
  {
    'name': 'Tabuteau, Fletcher',
    'salutation': '',
    'electorate': '',
    'party': 'NZ First',
    'email': 'Fletcher.Tabuteau@parliament.govt.nz'
  },
  {
    'name': 'Tinetti, Jan',
    'salutation': '',
    'electorate': '',
    'party': 'Labour Party',
    'email': 'Jan.Tinetti@parliament.govt.nz'
  },
  {
    'name': 'Tirikatene, Rino',
    'salutation': '',
    'electorate': 'Te Tai Tonga',
    'party': 'Labour Party',
    'email': 'Rino.Tirikatene@parliament.govt.nz'
  },
  {
    'name': 'Tolley, Anne',
    'salutation': 'Hon',
    'electorate': 'East Coast',
    'party': 'National Party',
    'email': 'Anne.Tolley@parliament.govt.nz'
  },
  {
    'name': 'Twyford, Philip',
    'salutation': 'Hon',
    'electorate': 'Te Atatu',
    'party': 'Labour Party',
    'email': 'Philip.Twyford@parliament.govt.nz'
  },
  {
    'name': 'Upston, Louise',
    'salutation': 'Hon',
    'electorate': 'Taupo',
    'party': 'National Party',
    'email': 'Louise.Upston@parliament.govt.nz'
  },
  {
    'name': 'van de Molen, Timothy',
    'salutation': '',
    'electorate': 'Waikato',
    'party': 'National Party',
    'email': 'Tim.vandeMolen@parliament.govt.nz'
  },
  {
    'name': 'Wagner, Nicky',
    'salutation': 'Hon',
    'electorate': '',
    'party': 'National Party',
    'email': 'Nicky.Wagner@parliament.govt.nz'
  },
  {
    'name': 'Walker, Hamish',
    'salutation': '',
    'electorate': 'Clutha-Southland',
    'party': 'National Party',
    'email': 'Hamish.Walker@parliament.govt.nz'
  },
  {
    'name': 'Wall, Louisa',
    'salutation': '',
    'electorate': 'Manurewa',
    'party': 'Labour Party',
    'email': 'Louisa.Wall@parliament.govt.nz'
  },
  {
    'name': 'Warren-Clark, Angie',
    'salutation': '',
    'electorate': '',
    'party': 'Labour Party',
    'email': 'Angie.Warren-Clark@parliament.govt.nz'
  },
  {
    'name': 'Webb, Duncan',
    'salutation': 'Dr.',
    'electorate': 'Christchurch Central',
    'party': 'Labour Party',
    'email': 'Duncan.Webb@parliament.govt.nz'
  },
  {
    'name': 'Whaitiri, Meka',
    'salutation': 'Hon',
    'electorate': 'Ikaroa-Rawhiti',
    'party': 'Labour Party',
    'email': 'Meka.Whaitiri@parliament.govt.nz'
  },
  {
    'name': 'Williams, Poto',
    'salutation': '',
    'electorate': 'Christchurch East',
    'party': 'Labour Party',
    'email': 'poto.williams@parliament.govt.nz'
  },
  {
    'name': 'Wood, Michael',
    'salutation': '',
    'electorate': 'Mt Roskill',
    'party': 'Labour Party',
    'email': 'Michael.Wood@parliament.govt.nz'
  },
  {
    'name': 'Woodhouse, Michael',
    'salutation': 'Hon',
    'electorate': '',
    'party': 'National Party',
    'email': 'Michael.Woodhouse@parliament.govt.nz'
  },
  {
    'name': 'Woods, Megan',
    'salutation': 'Hon. Dr.',
    'electorate': 'Wigram',
    'party': 'Labour Party',
    'email': 'Megan.Woods@parliament.govt.nz'
  },
  {
    'name': 'Yang, Jian',
    'salutation': 'Dr.',
    'electorate': '',
    'party': 'National Party',
    'email': 'Jian.Yang@parliament.govt.nz'
  },
  {
    'name': 'Young, Jonathan',
    'salutation': '',
    'electorate': 'New Plymouth',
    'party': 'National Party',
    'email': 'Jonathan.Young@parliament.govt.nz'
  },
  {
    'name': 'Yule, Lawrence',
    'salutation': '',
    'electorate': 'Tukituki',
    'party': 'National Party',
    'email': 'Lawrence.Yule@parliament.govt.nz'
  }
];

export default mpData;
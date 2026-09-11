/*
 * EL TORERO MENU DATA
 *
 * Single source of truth for menu content.
 * Keep this file limited to plain menu data: no HTML fragments.
 */
const MENU = [
  { title: 'Appetizers', items: [
    { name: 'CHEESE DIP', price: '8.50' },
    { name: 'GUACAMOLE DIP', price: '8.50', description: 'CREAMY OR CHUNKY' },
    { name: 'QUESADILLA', price: '4.60', description: 'CHEESE TURNOVER' },
    { name: 'SPECIAL QUESADILLA', price: '6.50', description: 'QUESADILLA SERVED WITH LETTUCE, GUACAMOLE & SOUR CREAM' },
    { name: 'STUFFED QUESADILLA', price: '6.75', description: 'QUESADILLA STUFFED WITH YOUR CHOICE OF FLANK STEAK, GROUND BEEF, CHICKEN, PORK, CHORIZO, MUSHROOMS OR SPINACH' },
    { name: 'SPECIAL STUFFED QUESADILLA', price: '8.25', description: 'STUFFED QUESADILLA SERVED WITH LETTUCE, GUACAMOLE, & SOUR CREAM' },
    { name: 'QUESADILLA PLATTER', price: '12.50', description: 'YOUR CHOICE OF TWO QUESADILLAS SERVED WITH LETTUCE, GUACAMOLE, SOUR CREAM & PICO DE GALLO' },
    { name: 'QUESADILLA FAJITA', price: '8.25', description: 'QUESADILLA STUFFED WITH YOUR CHOICE OF BEEF, CHICKEN, OR SHRIMP FAJITAS' },
    { name: 'QUESADILLA FAJITAS MIXED', price: '9.25', description: 'QUESADILLA STUFFED WITH BEEF, CHICKEN & SHRIMP FAJITAS' },
    { name: 'SPECIAL QUESADILLA FAJITA', price: '9.75', description: 'QUESADILLA FAJITA SERVED WITH LETTUCE, GUACAMOLE, AND SOUR CREAM' },
    { name: 'SPECIAL QUESADILLA FAJITAS MIXED', price: '10.25', description: 'QUESADILLA FAJITAS MIXED SERVED WITH LETTUCE, GUACAMOLE, & SOUR CREAM' },
    { name: 'THREE TAQUITOS', price: '9.00', description: 'YOUR CHOICE OF CHICKEN, PORK, OR FLANK STEAK STUFFED IN A CORN TORTILLA AND DEEP FRIED; SERVED WITH GUACAMOLE, SOUR CREAM & PICO DE GALLO FOR DIPPING' },
    { name: 'CHEESE NACHOS', price: '7.50' },
    { name: 'HALF-ORDER CHEESE NACHOS', price: '5.75' },
    { name: 'NACHOS', price: '8.50', description: 'WITH YOUR CHOICE OF BEEF, CHICKEN, PORK, RICE, OR BEANS' },
    { name: 'HALF-ORDER NACHOS', price: '6.50' },
    { name: 'NACHOS', price: '9.25', description: 'WITH YOUR CHOICE OF BEEF WITH BEANS, CHICKEN WITH BEANS, OR CHORIZO WITH BEANS' },
    { name: 'HALF-ORDER NACHOS', price: '7.00' },
    { name: 'SPECIAL NACHOS', price: '11.00', description: 'NACHOS TOPPED WITH CHICKEN, BEANS, LETTUCE, GUACAMOLE & SOUR CREAM' },
    { name: 'HALF-ORDER SPECIAL NACHOS', price: '7.75' },
    { name: 'NACHOS FAJITAS', price: '11.00', description: 'NACHOS WITH YOUR CHOICE OF BEEF, CHICKEN OR SHRIMP FAJITAS' },
    { name: 'HALF-ORDER NACHOS FAJITAS', price: '7.75' },
    { name: 'NACHOS WITH FAJITAS MIXED', price: '13.25', description: 'NACHOS WITH YOUR CHOICE OF BEEF, CHICKEN & SHRIMP FAJITAS' },
    { name: 'HALF-ORDER NACHOS WITH FAJITAS MIXED', price: '8.25' },
    { name: 'SPECIAL NACHOS WITH FAJITAS', price: '13.25', description: 'NACHOS FAJITAS TOPPED WITH LETTUCE, SOUR CREAM AND GUACAMOLE' },
    { name: 'HALF-ORDER SPECIAL NACHOS WITH FAJITAS', price: '9.25' },
    { name: 'SPECIAL NACHOS WITH FAJITAS MIXED', price: '14.25', description: 'NACHOS FAJITAS MIXED TOPPED WITH LETTUCE, SOUR CREAM & GUACAMOLE' },
    { name: 'HALF-ORDER SPECIAL NACHOS FAJITAS MIXED', price: '9.50' }
  ] },
  { title: 'Soups & Salads', items: [
    { name: 'GUACAMOLE SALAD', price: '5.50', description: 'LETTUCE, TOMATO, AND GUACAMOLE' },
    { name: 'TACO SALAD', price: '8.75', description: 'LETTUCE, TOMATO, BEEF, & SHREDDED CHEESE SERVED IN A CRISPY, FLOUR TORTILLA BOWL' },
    { name: 'TACO SALAD WITH FAJITAS', price: '9.75' },
    { name: 'TACO SALAD WITH FAJITAS MIXED', price: '10.90' },
    { name: 'SPECIAL TACO SALAD', price: '9.75', description: 'LETTUCE, TOMATO, BEEF, SHREDDED CHEESE, GUACAMOLE, & SOUR CREAM SERVED IN A CRISPY FLOUR TORTILLA BOWL' },
    { name: 'SPECIAL TACO SALAD W/ FAJITAS', price: '10.75' },
    { name: 'SP. TACO SALAD W/ FAJITAS MIXED', price: '12.50' },
    { name: 'NACHO CHEESE SALAD', price: '8.75', description: 'LETTUCE, TOMATO, BEEF, & MELTED NACHO CHEESE SAUCE SERVED IN A CRISPY FLOUR TORTILLA BOWL' },
    { name: 'NACHO CHEESE SALAD WITH FAJITAS', price: '9.25' },
    { name: 'NACHO CHEESE SALAD WITH FAJITAS MIXED', price: '10.90' },
    { name: 'SPECIAL NACHO CHEESE SALAD', price: '9.75', description: 'NACHO CHEESE SALAD TOPPED WITH GUACAMOLE & SOUR CREAM' },
    { name: 'SP. NACHO CHEESE SALAD W/ FAJITAS', price: '10.75' },
    { name: 'SP NACHO CHEESE SALAD W/ FAJITAS MIXED', price: '12.50' },
    { name: 'TORTILLA SOUP WITH CHICKEN OR SHRIMP', price: '8.25' },
    { name: 'POZOLE SOUP', price: '8.25', description: 'HOMINY WITH PORK OR CHICKEN' }
  ] },
  { title: 'Lunch', note: 'SERVED DAILY 11:00AM-3:00PM ADD NACHO CHEESE SAUCE ON ANY BURRITO FOR 1.75', items: [
    { name: 'SPEEDY GONZALEZ', price: '7.85', description: 'TACO, ENCHILADA, AND YOUR CHOICE OF RICE OR BEANS' },
    { name: 'SPECIAL LUNCH #1', price: '9.70', description: 'CHILE RELLENO, TACO, BEANS & GUACAMOLE SALAD' },
    { name: 'SPECIAL LUNCH #2', price: '8.70', description: 'BURRITO, RICE & BEANS' },
    { name: 'SPECIAL LUNCH #3', price: '8.70', description: 'CHALUPA, RICE & BEANS' },
    { name: 'SPECIAL LUNCH #4', price: '7.85', description: 'TACO, RICE & BEANS' },
    { name: 'SPECIAL LUNCH #5', price: '8.70', description: 'BURRITO, TACO & BEANS' },
    { name: 'SPECIAL LUNCH #6', price: '8.70', description: 'CHILE RELLENO, BEANS AND ENCHILADA' },
    { name: 'SPECIAL LUNCH #7', price: '9.70', description: 'CHIMICHANGA WITH CHEESE SAUCE, RICE & BEANS' },
    { name: 'SPECIAL LUNCH #8', price: '8.70', description: 'QUESADILLA, CHILE RELLENO & RICE' },
    { name: 'SPECIAL LUNCH #9', price: '7.85', description: 'ENCHILADA, RICE & BEANS' },
    { name: 'SPECIAL LUNCH #10', price: '8.70', description: 'CHALUPA, RICE & TACO' },
    { name: 'SPECIAL LUNCH #11', price: '7.60', description: 'ONE FLAUTA, LETTUCE, SOUR CREAM, GUACAMOLE, & PICO DE GALLO' },
    { name: 'SPECIAL LUNCH #12', price: '7.85', description: 'ONE FLAUTA, RICE & BEANS' },
    { name: 'SPECIAL LUNCH #13', price: '7.85', description: 'ONE TAMALE, RICE & BEANS' },
    { name: 'SPECIAL LUNCH #14', price: '8.70', description: 'ONE CHILE RELLENO, RICE & BEANS' },
    { name: 'SPECIAL LUNCH #15', price: '8.70', description: 'ONE STUFFED QUESADILLA (YOUR CHOICE OF FLANK STEAK, CHICKEN OR GROUND BEEF) WITH RICE & BEANS' },
    { name: 'FAJITA LUNCH SPECIAL', price: '9.90', description: 'YOUR CHOICE OF BEEF, CHICKEN, OR SHRIMP WITH PEPPERS AND ONIONS SIMMERED TOGETHER; SERVED WITH LETTUCE, TOMATOES, GUACAMOLE, SOUR CREAM, PICO DE GALLO, TWO FLOUR TORTILLAS & YOUR CHOICE OF RICE OR BEANS' },
    { name: 'FAJITAS LUNCH MIXED', price: '10.90', description: 'FAJITA LUNCH SPECIAL WITH BEEF, CHICKEN & SHRIMP' }
  ] },
  { title: 'Lunch or Dinner Specialties', items: [
    { name: 'TACO DE POLLO OR CARNE AZADA', price: '8.50', description: 'YOUR CHOICE OF BEEF OR CHICKEN, GRILLED IN ITS OWN JUICE, SERVED IN A FLOUR TORTILLA WITH LETTUCE, GUACAMOLE, SOUR CREAM & PICO DE GALLO' },
    { name: 'CHORIZO AND EGG CHILAQUILES', price: '10.75', description: 'CORN TORTILLA STRIPS COOKED WITH MEXICAN SAUSAGE, EGGS, & TOMATO SAUCE SERVED WITH RICE & BEANS' },
    { name: 'HUEVOS MEXICANOS', price: '9.25', description: 'THREE EGGS SCRAMBLED WITH TOMATOES, ONIONS, CILANTRO & JALAPEÑOS, SERVED WITH RICE, BEANS & THREE FLOUR TORTILLAS' },
    { name: 'HUEVOS RANCHEROS', price: '9.25', description: 'THREE EGGS WITH MEXICAN SAUCE ON TOP, SERVED WITH RICE, BEANS AND TWO FLOUR TORTILLAS' },
    { name: 'HUEVOS REVUELTOS CON CHORIZO', price: '10.75', description: 'SCRAMBLED EGGS WITH MEXICAN SAUSAGE, SERVED WITH RICE, BEANS & TWO FLOUR TORTILLAS' },
    { name: 'CHILAQUILES CON POLLO', price: '10.75', description: 'CORN TORTILLA STRIPS COOKED WITH CHICKEN AND TOMATO SAUCE, SERVED WITH RICE & BEANS' }
  ] },
  { title: 'A La Carte', items: [
    { name: 'ORDER OF BEANS', price: '2.50' }, { name: 'ORDER OF RICE', price: '2.50' },
    { name: 'ORDER OF TACOS (3)', price: '9.00', description: 'BEEF, BEAN, PORK, OR CHICKEN' },
    { name: 'ORDER OF TAMALES (3)', price: '9.00', description: 'BEEF, CHICKEN, PORK OR CHEESE' },
    { name: 'ORDER OF ENCHILADAS (3)', price: '9.00', description: 'BEEF, BEAN, CHICKEN, PORK, OR CHEESE' },
    { name: 'ORDER OF BEEF TOSTADAS (2)', price: '9.50' },
    { name: 'ORDER OF BURRITOS (2)', price: '9.50', description: 'BEEF, BEAN, CHICKEN, PORK OR CHEESE' },
    { name: 'ORDER OF CHALUPAS (2)', price: '9.50' },
    { name: 'ORDER OF CHILE RELLENOS (2)', price: '9.50', description: 'BEEF, BEAN, CHICKEN, CHEESE OR PORK' },
    { name: 'ORDER OF TOSTAGUACS (2)', price: '10.50' },
    { name: 'ONE CHIMICHANGA WITH CHEESE SAUCE', price: '7.75' }, { name: 'ONE FLAUTA', price: '4.75' },
    { name: 'ORD. OF CHICKEN, GROUND BEEF OR PORK', price: '3.50' },
    { name: 'ORDER OF FISH TACOS (3)', price: '11.50', description: 'PAN SEARED TILAPIA WITH COLE SLAW IN A FLOUR TORTILLA' },
    { name: 'ONE FISH TACO', price: '5.00' }
  ] },
  { title: 'Side Orders', items: [
    { name: 'SMALL SIDE', price: '1.00' }, { name: 'LARGE SIDE', price: '1.75' }, { name: 'ORDER OF FRENCH FRIES', price: '2.00' },
    { name: 'ORDER OF LETTUCE', price: '1.25' }, { name: 'ORDER OF FLOUR TORTILLAS (2)', price: '1.50' }, { name: 'ORDER OF CORN TORTILLAS (4)', price: '1.50' },
    { name: 'SINGLE BURRITO', price: '6.50', description: 'BEEF, BEAN, CHICKEN, PORK OR CHEESE' }, { name: 'CHALUPA', price: '6.50' },
    { name: 'CHILE RELLENO', price: '6.50', description: 'BEEF, BEAN, CHICKEN, CHEESE OR PORK' },
    { name: 'SINGLE ENCHILADA', price: '3.75', description: 'BEEF, BEAN, CHICKEN, CHEESE OR PORK' },
    { name: 'SINGLE TACO', price: '3.15', description: 'BEEF, BEAN, CHICKEN OR PORK' },
    { name: 'SINGLE TAMALE', price: '3.75', description: 'BEEF, CHICKEN, CHEESE OR PORK' }, { name: 'BEEF TOSTADA', price: '6.50' }, { name: 'TOSTAGUAC', price: '7.25' },
    { name: 'SMALL SOUR CREAM (3oz.)', price: '1.00' }, { name: 'SMALL GUACAMOLE DIP (3oz.)', price: '3.75' }, { name: 'SMALL CHEESE DIP (3oz.)', price: '3.75' },
    { name: 'SMALL ORDER MUSHROOMS/SPINACH', price: '2.75' }, { name: 'GRILLED ONIONS', price: '1.75' }, { name: 'GRILLED CERRANO PEPPERS', price: '1.75' },
    { name: 'SAUTEED BELL PEPPERS & ONIONS', price: '3.50' }, { name: 'SLICED AVOCADO', price: '2.50' }
  ] },
  { title: 'El Torero Style Dinners', items: [
    { name: 'SPECIAL DINNER', price: '18.95', description: 'CHALUPA, CHILE RELLENO, TACO, RICE, BEANS, ENCHILADA, & TAMALE' },
    { name: 'SPECIAL COMBO', price: '16.25', description: '(YOUR CHOICE OF CHICKEN OR SIRLOIN STEAK) ONE CHIMICHANGA, ONE FLAUTA, RICE, BEANS, LETTUCE, TOMATO, GUACAMOLE & SOUR CREAM' },
    { name: 'FLAUTAS', price: '14.55', description: 'ORDER OF THREE CORN TORTILLAS STUFFED WITH SIRLOIN STEAK, OR CHICKEN, FRIED CRISPY, SERVED WITH LETTUCE, TOMATO, SOUR CREAM & GUACAMOLE' },
    { name: 'SINGLE FLAUTA', price: '7.85' },
    { name: 'CHIMICHANGAS', price: '15.80', description: 'ORDER OF TWO FLOUR TORTILLAS STUFFED WITH YOUR CHOICE OF SIRLOIN STEAK, CHICKEN, OR GROUND BEEF, FRIED CRISPY, SERVED WITH LETTUCE, TOMATO, SOUR CREAM, GUACAMOLE & CHEESE SAUCE' },
    { name: 'SINGLE CHIMICHANGA', price: '9.50' },
    { name: 'CHILE RANCHERO', price: '17.25', description: 'CHUNKS OF SIRLOIN STEAK WITH RED CHILE SAUCE SERVED WITH RICE, BEANS & THREE FLOUR TORTILLAS' },
    { name: 'MEXICAN STEW', price: '17.25', description: 'YOUR CHOICE OF SIRLOIN STEAK, CHICKEN OR PORK TENDERLOIN WITH CHOICE PEPPERS, ONIONS, TOMATOES AND SPICES SIIMMERED TOGETHER, SERVED WITH RICE, BEANS & THREE FLOUR TORTILLAS' },
    { name: 'CARNE AZADA', price: '17.25', description: 'YOUR CHOICE OF SIRLOIN STEAK, CHICKEN, OR PORK TENDERLOIN SLICED THIN & GRILLED IN ITS OWN JUICES SERVED WITH BEANS, LETTUCE, TOMATOES, GUACAMOLE, ONIONS & THREE FLOUR TORTILLAS' },
    { name: 'BISTEC RANCHERO', price: '23.25', description: 'RIB-EYE STEAK IN OUR OWN SPECIAL SAUCE, SERVED WITH RICE, BEANS & THREE FLOUR TORTILLAS' },
    { name: 'BISTEC & PEPPERS', price: '23.25', description: 'RIB-EYE, CHOICE PEPPERS & ONIONS IN A TOMATO SAUCE SIMMERED TOGETHER, SERVED WITH RICE, BEANS & THREE FLOUR TORTILLAS' },
    { name: 'CARNE DE PUERCO', price: '16.45', description: 'CHUNKS OF PORK BUTT PAN FRIED IN SPICY GREEN TOMATILLO SAUCE SERVED WITH RICE, BEANS & THREE FLOUR TORTILLAS. ALSO YOUR CHOICE OF BEEF OR CHICKEN' },
    { name: 'EL DIABLO (VERY HOT) OR A LA DIABLA (EXTREMELY HOT)', price: '17.25', description: 'SELECT ONE OF YOUR FAVORITES: CHUNKS OF PORK, STEAK, CHICKEN, SHRIMP OR FISH; CHOICE GREEN CHILE PEPPERS, ONIONS, TOMATOES, CILANTRO & SPICES SIMMERED TOGETHER, SERVED WITH RICE, BEANS & THREE FLOUR TORTILLAS' },
    { name: 'EL DIABLO MIXED (VERY HOT) OR A LA DIABLA MIXED (EXTREMELY HOT)', price: '19.25', description: 'CHOOSE UP TO 3 ONLY' },
    { name: 'FAJITAS', price: '19.25', description: 'YOUR CHOICE OF BEEF STEAK, CHICKEN, SHRIMP OR PORK TENDERLOIN WITH PEPPERS & ONIONS SIMMERED TOGETHER, SERVED WITH RICE, BEANS, LETTUCE, TOMATOES, GUACAMOLE, SOUR CREAM & THREE FLOUR TORTILLAS' },
    { name: 'FAJITAS SPECIAL MIXED', price: '21.25', description: 'BEEF, CHICKEN & SHRIMP' },
    { name: 'EL GRANDE (HAND HELD BURRITO)', price: '10.50', description: 'FLOUR TORTILLA STUFFED WITH BEANS, RICE, CHEESE, LETTUCE, GUACAMOLE, SOUR CREAM & YOUR CHOICE OF ONE MEAT' },
    { name: 'PAN SEARED FISH', price: '15.25', description: 'TWO TILAPIA FILLETS SERVED WITH RICE, COLE SLAW & THREE FLOUR TORTILLAS' },
    { name: 'PAN SEARED CHICKEN', price: '15.25', description: 'GRILLED CHICKEN, CHEESE & MUSHROOMS SERVED WITH RICE, BEANS & THREE FLOUR TORTILLAS' },
    { name: 'NACHOS "NO CHIPS"', price: '12.50', description: 'SERVED ON A BED OF RICE, WITH YOUR CHOICE OF PAN SEARED CHICKEN, BEEF, PORK OR SHRIMP TOPPED WITH NACHO CHEESE SAUCE' },
    { name: 'NACHOS "NO CHIPS" MIXED', price: '15.25', description: 'SERVED ON A BED OF RICE, BEEF, CHICKEN & SHRIMP TOPPED WITH NACHO CHEESE SAUCE' },
    { name: 'POLLO LOCO', price: '16.25', description: 'CHUNKS OF CHICKEN TOPPED WITH NACHO CHEESE SAUCE SERVED WITH RICE, BEANS & THREE FLOUR TORTILLAS' },
    { name: 'POLLO LOCO MIXED', price: '18.25', description: 'STEAK, CHICKEN & SHRIMP' },
    { name: 'CHORI POLLO', price: '16.75', description: 'CHUNKS OF CHICKEN & MEXICAN SAUSAGE TOPPED WITH CHEESE SAUCE, SERVED WITH RICE, BEANS & THREE FLOUR TORTILLAS.' },
    { name: 'POLLO SERRANO', price: '16.25', description: 'CHUNKS OF CHICKEN WITH ONIONS & SERRANO PEPPERS SIMMERED TOGETHER. SERVED WITH RICE, BEANS AND THREE FLOUR TORTILLAS' }
  ] },
  { title: 'El Torero Special Orders', items: [
    { name: 'SPECIAL ORDER A', price: '12.75', description: 'ORDER OF TWO TOSTADAS, SERVED WITH BEEF OR CHICKEN, TOPPED WITH LETTUCE, CHEESE, SOUR CREAM, GUACAMOLE, & TOMATOES' }, { name: 'SINGLE SPECIAL A', price: '7.75' },
    { name: 'SPECIAL ORDER B', price: '13.00', description: 'ORDER OF TWO BURRITOS WITH NACHO CHEESE SAUCE' }, { name: 'SINGLE SPECIAL B', price: '7.75' },
    { name: 'SPECIAL ORDER C', price: '13.00', description: 'ORDER OF TWO BURRITOS TOPPED WITH LETTUCE, TOMATOES, & SOUR CREAM' }, { name: 'SINGLE SPECIAL C', price: '7.75' },
    { name: 'SPECIAL ORDER D', price: '13.00', description: 'ORDER OF TWO BURRITOS TOPPED WITH MEXICAN CHILE SAUCE' }, { name: 'SINGLE SPECIAL D', price: '7.75' },
    { name: 'SPECIAL ORDER E', price: '13.00', description: 'ORDER OF TWO BURRITOS STUFFED WITH BEANS & CHORIZO' }, { name: 'SINGLE SPECIAL E', price: '7.75' },
    { name: 'SPECIAL ORDER F', price: '13.25', description: 'ORDER OF THREE ENCHILADAS, YOUR CHOICE OF STUFFING, TOPPED WITH CHEESE DIP, LETTUCE, GUACAMOLE & SOUR CREAM' },
    { name: 'SPECIAL ORDER ABC', price: '13.85', description: 'ORDER OF TWO BURRITOS TOPPED WITH NACHO CHEESE SAUCE, LETTUCE, TOMATOES, GUACAMOLE & SOUR CREAM' }, { name: 'SINGLE SPECIAL ABC', price: '8.75' },
    { name: 'SPECIAL ORDER G', price: '14.00', description: 'THREE FAJITA TACOS, CRISPY TACO SHELLS STUFFED WITH YOUR CHOICE OF BEEF, CHICKEN, OR SHRIMP FAJITAS, LETTUCE, GUACAMOLE, SOUR CREAM & PICO DE GALLO *CAN NOT BE SUBSTITUTED ANYWHERE ON THE MENU*' },
    { name: 'SINGLE SPECIAL G', price: '5.25' },
    { name: 'TACOS DE CARNE AZADA', price: '15.25', description: 'THREE SOFT CORN TORTILLAS STUFFED WITH ONIONS, CILANTRO, TOMATILLO SAUCE YOUR CHOICE OF CHICKEN, BEEF, PORK OR SAUSAGE, SERVED WITH RICE & BEANS' },
    { name: 'SINGLE TACO DE CARNE AZADA', price: '4.00' }, { name: 'BURRITOS DE CARNE OR POLLO AZADO', price: '15.25' }, { name: 'SINGLE AZADA BURRITO', price: '8.75' }
  ] },
  { title: 'Combination Dinners', items: [
    { name: '#1', price: '13.25', description: 'ONE TACO, TWO ENCHILADAS & RICE' }, { name: '#2', price: '13.25', description: 'ONE TACO, ONE ENCHILADA & ONE CHALUPA' },
    { name: '#3', price: '13.25', description: 'ONE ENCHILADA, ONE TACO & ONE CHILE RELLENO' }, { name: '#4', price: '13.25', description: 'TWO TACOS, ONE ENCHILADA & NACHO CHEESE TOSTADA' },
    { name: '#5', price: '13.25', description: 'TWO ENCHILADAS. RICE & BEANS' }, { name: '#6', price: '13.25', description: 'ONE ENCHILADA, ONE TACO, RICE & BEANS' },
    { name: '#7', price: '13.25', description: 'ONE CHILE RELLENO, ONE TACO, RICE & BEANS' }, { name: '#8', price: '13.25', description: 'ONE ENCHILADA, ONE TAMALE, RICE & BEANS' },
    { name: '#9', price: '12.00', description: 'TWO TACOS, RICE & BEANS' }, { name: '#10', price: '13.00', description: 'ONE CHALUPA, ONE TACO, RICE & BEANS' },
    { name: '#11', price: '13.25', description: 'ONE BURRITO, ONE ENCHILADA & ONE TACO' }, { name: '#12', price: '13.25', description: 'ONE CHALUPA, ONE CHILE RELLENO & BEANS' },
    { name: '#13', price: '13.25', description: 'ONE ENCHILADA, ONE BURRITO & ONE CHILE RELLENO' }, { name: '#14', price: '13.25', description: 'ONE TACO, ONE CHILE RELLENO & ONE CHALUPA' },
    { name: '#15', price: '13.25', description: 'ONE BURRITO, ONE ENCHILADA & ONE TAMALE' }, { name: '#16', price: '13.25', description: 'ONE CHALUPA, ONE CHILE RELLENO & ONE BURRITO' },
    { name: '#17', price: '13.90', description: 'ONE BURRITO, ONE ENCHILADA, RICE & BEANS' }, { name: '#18', price: '13.90', description: 'ONE SPECIAL STUFFED QUESADILLA (CHOICE OF CHICKEN, SIRLOIN STEAK, OR GROUND BEEF) TACO, RICE & BEANS' },
    { name: '#19', price: '13.90', description: 'ONE CHALUPA, ONE BURRITO & ONE ENCHILADA' }, { name: '#20', price: '13.90', description: 'ONE ENCHILADA, ONE CHILE RELLENO, RICE & BEANS' },
    { name: '#21', price: '13.90', description: 'ONE TACO, ONE BURRITO & ONE CHALUPA' }, { name: '#22', price: '13.90', description: 'ONE BURRITO, ONE CHILE RELLENO & ONE TACO' },
    { name: '#23', price: '13.90', description: 'ONE TACO, ONE BURRITO, RICE & BEANS' }, { name: '#24', price: '13.90', description: 'ONE CHILE RELLENO, ONE BURRITO & RICE' },
    { name: '#25', price: '13.90', description: 'ONE CHALUPA, ONE ENCHILADA, RICE & BEANS' }, { name: '#26', price: '13.90', description: 'ONE TOSTAGUAC, ONE TACO & ONE ENCHILADA' },
    { name: '#27', price: '13.90', description: 'TWO BURRITOS, RICE & BEANS' }, { name: '#28', price: '13.90', description: 'ONE TOSTADA, ONE TAMALE, ONE TACO & ONE ENCHILADA' },
    { name: '#29', price: '13.90', description: 'ONE CHILE RELLENO, ONE QUESADILLA, ONE TACO & RICE' }, { name: '#30', price: '14.15', description: 'THREE BURRITOS' },
    { name: '#31', price: '14.15', description: 'ONE TAMALE, ONE CHILE RELLENO, ONE NACHO CHEESE TOSTADA & ONE ENCHILADA' }, { name: '#32', price: '14.15', description: 'TWO ENCHILADAS, ONE CHILE RELLENO & ONE TACO' },
    { name: '#33', price: '14.15', description: 'ONE TOSTAGUAC, RICE, BEANS & ONE TACO' }, { name: '#34', price: '14.15', description: 'THREE FLAUTAS, RICE & BEANS' },
    { name: '#35', price: '14.15', description: 'FOUR ENCHILADAS' }, { name: '#36', price: '14.15', description: 'ONE TOSTAGUAC & THREE FLAUTAS' },
    { name: '#37', price: '14.15', description: 'ONE TOSTAGUAC, ONE BURRITO & ONE ENCHILADA' }, { name: '#38', price: '15.25', description: 'ONE CHIMICHANGA WITH CHEESE SAUCE, ONE FLAUTA, RICE & BEANS' },
    { name: '#39', price: '14.15', description: 'ONE BURRITO, ONE CHILE RELLENO, RICE & BEANS' }, { name: '#40', price: '14.15', description: 'ONE CHALUPA, ONE ENCHILADA, ONE CHILE RELLENO & BEANS' },
    { name: '#41', price: '16.00', description: 'TWO CHIMICHANGAS WITH CHEESE SAUCE, RICE & BEANS' }, { name: '#42', price: '14.15', description: 'TWO ENCHILADAS, ONE CHALUPA & ONE TACO' },
    { name: '#43', price: '14.15', description: 'ONE BURRITO, ONE NACHO CHEESE TOSTADA, ONE TACO & RICE' }, { name: '#44', price: '14.15', description: 'ONE CHILE RELLENO, ONE TOSTAGUAC & ONE BURRITO' },
    { name: '#45', price: '14.15', description: 'TWO CHILE RELLENOS, RICE & BEANS' }, { name: '#46', price: '14.15', description: 'ONE TAMALE, ONE BURRITO, ONE CHILE RELLENO & ONE TACO' },
    { name: '#47', price: '14.15', description: 'TWO BURRITOS, ONE CHILE RELLENO' }, { name: '#48', price: '14.15', description: 'TWO TACOS, ONE BURRITO & RICE' }
  ] },
  { title: "Child's Plate", items: [
    { name: '#1', price: '6.00', description: 'ONE TACO, RICE & BEANS' }, { name: '#2', price: '6.00', description: 'ONE TACO, ONE ENCHILADA & RICE' },
    { name: '#3', price: '6.00', description: 'ONE QUESADILLA, RICE & BEANS' }, { name: '#4', price: '6.00', description: 'ONE BURRITO & RICE' },
    { name: '#5', price: '6.00', description: 'ONE ENCHILADA, RICE AND BEANS' }, { name: '#6', price: '6.00', description: 'ONE QUESADILLA, ONE TACO & RICE' },
    { name: '#7', price: '6.00', description: 'POLLO AZADO & FRENCH FRIES OR RICE' }, { name: '#8', price: '6.00', description: 'QUESADILLA & FRENCH FRIES' }
  ] },
  { title: 'Dessert', items: [
    { name: 'SOPAPILLA', price: '2.90' }, { name: 'SOPAPILLA A LA MODE', price: '4.25' }, { name: 'FRIED ICE CREAM', price: '4.25' },
    { name: 'FLAN', price: '4.25', description: 'MEXICAN CARAMEL CUSTARD' }, { name: 'SCOOP OF ICE CREAM', price: '2.25' }
  ] },
  { title: 'Mexican Beer', items: [
    { name: 'MEXICAN BEER', price: '5.50', description: 'CORONA, DOS EQUIS, TECATE, NEGRA MODELO, MODELO ESPECIAL' },
    { name: 'DOMESTIC BEER', price: '5.00', description: 'BUDWEISER, BUD LIGHT, MILLER LITE, MICHELOB ULTRA' }
  ] },
  { title: 'Draft Beer', note: 'CORONA, BUD LIGHT, DOS EQUIS AMBER, DOS EQUIS LAGER', items: [
    { name: 'PITCHER (60oz.)', price: '12.50' }, { name: 'HALF PITCHER (32oz.)', price: '7.00' }, { name: 'JUMBO MUG (32oz.)', price: '7.00' }, { name: 'GLASS (12oz.)', price: '3.75' }
  ] },
  { title: 'Mixed Drinks', items: [
    { name: 'FROZEN MARGARITA (16oz.)', price: '8.50', description: 'LIME, STRAWBERRY OR MANGO' }, { name: 'PITCHER FROZEN MARGARITA (60oz.)', price: '25.50' }, { name: 'HALF PITCHER FROZEN MARGARITA (32oz.)', price: '14.25' },
    { name: 'CHIQUITA MARGARITA', price: '5.50', description: 'LIME ONLY' }, { name: 'GOLD MARGARITA (16oz.)', price: '9.00' }, { name: 'PITCHER GOLD MARGARITA (60oz.)', price: '27.00' },
    { name: 'HALF PITCHER GOLD MARGARITA (32oz.)', price: '15.00' }, { name: 'TEXAS MARGARITA (16oz.)', price: '11.75' }, { name: 'PITCHER TEXAS MARGARITA (60oz.)', price: '33.25' },
    { name: 'HALF PITCHER TEXAS MARGARITA (32oz.)', price: '18.00' }, { name: 'SMALL TEXAS MARGARITA', price: '7.75' },
    { name: 'JOSE CUERVO TEQUILA SHOTS (1oz.)', price: '6.25', description: 'GOLD, TRADICIONAL, 1800 REPOSADO, 1800 AÑEJO' }
  ] },
  { title: 'Wines', items: [
    { name: 'WHITE ZINFANDEL, CHARDONNAY', price: '5.00' }, { name: 'HOMEMADE SANGRIA (16oz.)', price: '6.25' }, { name: 'PITCHER SANGRIA (60oz.)', price: '17.50' }, { name: 'HALF PITCHER SANGRIA (32oz.)', price: '10.00' }
  ] },
  { title: 'Soft Drinks', items: [
    { name: 'SOFT DRINKS', price: '2.95', description: 'COKE, CHERRY COKE, DIET COKE, MR. PIBB, SPRITE, LEMONADE, ICED TEA' },
    { name: 'MILK, COFFEE, GREEN TEA', price: '2.95' }, { name: 'SHIRLEY TEMPLE', price: '2.95' }, { name: 'MILKSHAKE', price: '3.85', description: 'VANILLA' }, { name: 'AGUA DE HORCHATA', price: '2.95', description: 'SWEET RICE WATER' }
  ] }
];

/* Render the centralized menu into El Torero's existing menu containers.
   The HTML/CSS structure remains the site's existing structure; this file
   only supplies the menu content and populates the existing .column elements. */
(function () {
  function renderMenu() {
    const menuSection = document.querySelector('.menu-section');
    if (!menuSection || !Array.isArray(MENU)) return;

    const columns = Array.from(menuSection.querySelectorAll('.desktop-menu-column .column-middle > .column'));
    if (!columns.length) return;

    columns.forEach((column) => {
      Array.from(column.children).forEach((child) => {
        if (child.matches('h2.menu-h2, ul.leaders, ul.drinks, .menu-note')) child.remove();
      });
    });

    const chunkSize = Math.ceil(MENU.length / columns.length);
    MENU.forEach((section, index) => {
      const column = columns[Math.min(Math.floor(index / chunkSize), columns.length - 1)];
      const heading = document.createElement('h2');
      heading.className = 'menu-h2';
      heading.textContent = section.title;
      column.appendChild(heading);

      if (section.note) {
        const note = document.createElement('p');
        note.className = 'menu-note';
        note.textContent = section.note;
        column.appendChild(note);
      }

      const list = document.createElement('ul');
      list.className = 'leaders';
      section.items.forEach((item) => {
        const li = document.createElement('li');
        const name = document.createElement('span');
        name.className = 'name';
        name.textContent = item.name;
        const price = document.createElement('span');
        price.className = 'price';
        price.textContent = item.price;
        li.appendChild(name);
        li.appendChild(price);
        if (item.description) {
          const desc = document.createElement('small');
          desc.className = 'desc';
          desc.textContent = item.description;
          li.appendChild(desc);
        }
        list.appendChild(li);
      });
      column.appendChild(list);
    });

    window.dispatchEvent(new CustomEvent('elToreroMenuRendered'));
  }

  window.renderElToreroMenu = renderMenu;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderMenu, { once: true });
  } else {
    renderMenu();
  }
})();

- const DATA = [
-     '1540968221243-29f5d70540bf',
-     '1596135187959-562c650d98bc',
-     '1628944682084-831f35256163',
-     '1590013330451-3946e83e0392',
-     '1590421959604-741d0eec0a2e',
-     '1572613000712-eadc57acbecd',
-     '1570097192570-4b49a6736f9f',
-     '1620789550663-2b10e0080354',
-     '1617775623669-20bff4ffaa5c',
-     '1548600916-dc8492f8e845',
-     '1573824969595-a76d4365a2e6',
-     '1633936929709-59991b5fdd72'
- ];
- const N = DATA.length;

.scene
.a3d(style=`--n: ${N}`) - for(let i = 0; i < N; i++)
img.card(src=`https://images.unsplash.com/photo-${DATA[i]}?w=280`
style=`--i: ${i}` alt='jellifish')

//- generates this kind of HTML:
//- <div class="scene">
//- <div class="a3d" style="--n: 12">
//- <img class="card" src="image0.jpg" style="--i: 0" alt="image description"/>
//- <img class="card" src="image1.jpg" style="--i: 1" alt="image description"/>
//- <!-- the rest of the cards -->
//- </div>
//- </div>
/_ ====== Relevant CSS ====== _/
.scene, .a3d { display: grid }

.scene {
/_ prevent scrollbars _/
overflow: hidden;
/_ for 3D look; smaller = more extreme effect _/
perspective: 35em;
mask: /_ lateral fade _/
linear-gradient(90deg,
#0000, red 20% 80%, #0000)
}

.a3d {
place-self: center /_ middle align _/;
/_ don't flatten 3D transformed children
_ of this parent having its own 3D transform _/
transform-style: preserve-3d;
animation: ry 32s linear infinite
}
/_ simplest y axis rotation \*/
@keyframes ry { to { rotate: y 1turn } }

.card {
/_ base card width, you may change this _/
--w: 17.5em;
/_ compute base angle corresponding to a card _/
--ba: 1turn/var(--n); /_ in the future: sibling-count() _/
grid-area: 1/ 1 /_ stack in same one grid cell _/;
width: var(--w);
aspect-ratio: 7/ 10;
object-fit: cover;
border-radius: 1.5em;
/_ don't want to see back of cards in front of screen plane _/
backface-visibility: hidden;
/_ need to use a transform chain here, cannot use separate
_ rotate & translate properties because they'd be applied
_ in wrong order (translate, then rotate) for what we need _/
transform:
/_ rotate around y axis; in the future: sibling-index() _/
rotatey(calc(var(--i)_var(--ba)))
/_ only after that translate along z axis with minus _/
translatez(calc(-1_(.5*var(--w) + .5em)/tan(.5*var(--ba))))
}

@media (prefers-reduced-motion: reduce) {
.a3d { animation-duration: 128s }
}

/_ ====== General page prettifying and layout ====== _/
html, body { display: grid }

html { height: 100% }

body { background: #ffg3d }

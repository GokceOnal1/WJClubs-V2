/*Navbar---------------------------------
--------*/

.navbar {
  background: #1E1F25;
}
.navbar ul{
	display: inline-flex;
	width: 100%;
	height: auto;
  max-height: 20%;
	margin: auto;
	justify-content: space-between;
  overflow: auto;
	text-align: left;
}
.navbar li {
	padding: 1rem 1rem 1rem 1rem;
  text-transform: uppercase;
  text-align: center;
  font-size: 15px;
  font-size: 1vw;
  cursor: pointer;
  color: #ebebeb;
	min-width: 100px;
	margin: auto;
}

.navbar li:first-child {
	padding: 1rem 2rem 2rem;
  text-transform: uppercase;
  cursor: pointer;
  color: #ebebeb;
	min-width: 150px;
	margin: auto;
}

.navbar li:hover:not(:first-child) {
  background-image: url('https://scottyzen.sirv.com/Images/v/button.png');
  background-size: 100% 100%;
  color: #27262c;
  animation: spring 300ms ease-out;
  text-shadow: 0 -1px 0 #ef816c;
	font-weight: bold;
}
.navbar li:active:not(:first-child) {
  transform: translateY(4px);
}

.toolbar .search-wrapper {
  position: relative;
}

.toolbar input[type="search"] {
  font-size: 1.1rem;
  border: none;
  border-bottom: 1px solid;
  padding-bottom: 3px;
}

.toolbar ::placeholder {
  color: var(--gray);
}

.toolbar .counter {
  position: absolute;
  left: 0;
  top: calc(100% + 5px);
  font-size: 0.9rem;
  color: var(--gray);
}

@keyframes spring {
  15% {
    -webkit-transform-origin: center center;
    -webkit-transform: scale(1.2, 1.1);
  }
  40% {
    -webkit-transform-origin: center center;
    -webkit-transform: scale(0.95, 0.95);
  }
  75% {
    -webkit-transform-origin: center center;
    -webkit-transform: scale(1.05, 1);
  }
  100% {
    -webkit-transform-origin: center center;
    -webkit-transform: scale(1, 1);
  }
}

/* RESET RULES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
:root {
  --black: #1a1a1a;
  --white: #fff;
  --gray: #ccc;
  --darkgreen: #18846C;
  --lightbrown: antiquewhite;
  --darkblack: rgba(0,0,0,0.8);
  --minRangeValue: 280px;
}

* {
  margin: 0;
  padding: 0;  
  outline: none;
  border: none;
}

ol,
ul {
  list-style: none;
}

a {
  color: inherit;
}

body {
  margin: 50px 0;
  color: var(--black);
  font: 1rem/1.3 sans-serif; 
}

.gallery {
  padding: 0 2rem;
  background: url("https://images.pexels.com/photos/131634/pexels-photo-131634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
}

.container {
  margin: 0rem auto;
}

.d-none {
  display: none;
}


/* IMAGE LIST
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.image-list {
  padding: 3rem 1rem;
}

.image-list img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  height: auto;
}

.image-list li {
  max-height: 300vh;
}

.image-list figure{
  background: var(--lightbrown);
  color: var(--darkblack);
  padding-top: 1rem;
  background-size: fit;
}

.image-list p:first-child {
  font-weight: bold;
  font-size: 1.15rem;
}

.image-list p:last-child {
  margin-top: 0.5rem;
}



/* GRID VIEW
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.grid-view {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.grid-view figcaption {
  padding: 1rem;
}



/* FOOTER
–––––––––––––––––––––––––––––––––––––––––––––––––– */
footer {
  font-size: 1rem;
  padding: 0 1.5rem;
  text-align: right;
}

footer span {
  color: #e31b23;
}

/* MQ
–––––––––––––––––––––––––––––––––––––––––––––––––– */
@media screen and (max-width: 900px) {
  .toolbar input[type="range"] {
	display: none;
  }
}

@media screen and (max-width: 700px) {
  .grid-view li {
	text-align: center;
	padding: 0.5rem;
  }
 
  .grid-view figcaption {
	padding: 0.5rem 0 0;
  }
}

.desc{
  display: none;
}
.grid-view li :hover img{
  display: none;
}
.grid-view li :hover td{
  display: none;
}
.grid-view li :hover .desc{
  display: table-cell;
}

th,td {
	border-width: 5px;
	overflow-wrap: break-word; 
  hyphens: auto;
}
tr{
  overflow: hidden;
  max-height: 100px;
}

table {
	table-layout: fixed;
    width: 100%;   
}

.center-block > .container {
	padding: 0px 15px 0px 15px;
}

.center-block {
	padding: 0px 20px 0px 20px;
}


.image-header {
  width: 100%;
  height: 200px;
	padding: 0px 20px 20px 0px;
	margin: 0px 0px 20px 0px;
	background-image: url("https://www2.montgomeryschoolsmd.org/siteassets/schools/high-schools/r-w/wjhs/images/wjhs.png");
  background-position: center;
  background-size: fit;
  background-origin: center;
  background-repeat: no-repeat;
}

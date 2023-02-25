
# About this project
Thats just a web-page for a star, which I needed for my computer-science classes.
Actually, I can't say I learned something new in this project, that's just a good chance to get more expierence. I practised bootstrap features and layout design. Here you can see the history of troubles connected with the development. 

# Fomalghaut (history of troubles)
## The problem of scrollspy (removed from the project)
The heart of the problem is in changing of parent element by the child one in css.
I try to use bootstrap feature, which monitors position of the screen on current moment, and changes appropriate link of the navigation.
### Html code
Thats how I use this feature on body:
``` html
	<body data-bs-spy="scroll" data-bs-target="#nav" data-bs-offset="200">
	...
	</body>
``` 
Then I add **href** to links with appropriate id: 

```html
	<div class="navbar-nav ms-auto">
		<li class="nav-item"  id="main" href="#mainsect" onclick="location.href = '#mainsect'">
			<a class="nav-link" href="#mainsect">Main</a>
		</li>
		<li class="nav-item" id="info">
			<a class="nav-link" href="#infosect">Information</a>
		</li>
		...		
	</div>
```
And write such id on the sections/divs, I want links to be connected with:
```html
	<div class="contmain" id="mainsect">
	...
	</div>

	<div class="info container-fluid" id="#infosect">
	...
	</div>
```
### Css code
And how it works in css:
This BT feature adds pseudoclass **active** to the link needed:
``` css
	.nav-item .nav-link.active {
		smth with style;
	}
```
(this css code above is *hypothetical*, u can't find it in the code, I deleted it to not to brake other aspects of website)
So, what's my main idea?
I have the **.nav-link** class, connected with links, and **.nav-item** class connected with blocks, which contain this links (you can find this code above). And when I hover/click this links/blocks, I want to show **.nav-item:before** pseudoelement. The effect I need you can see by clicking it on the page. The code of the pseudoelement:
```css
	.nav-item:before {
		cursor: pointer;
		content: ' ';
		opacity: 0;
		position: absolute;
		width: 10px;
		height: 2px;
		border-radius: 50%;
		background-color: #6B00EA;
		box-shadow: 0 0 4px #6B00EA, 0 0 7px #6B00EA;
		z-index: 5;
		margin-top: 40px;
		margin-left: calc(50% - 5px);
		transition: 0.4s;
	} 
```
And, on hover, I play the animation of *hover*, which makes it feel like it *underlines* the link.
```css
	.nav-item:hover:before {
		opacity: 1;
		width: calc(100% - 30px);
		margin-left: 15px;
		transition: 0.4s;
	}
``` 
And, finally, on click focused link stays in the *underlined* condition by adding class **.nav-item-click** to the **nav-item**
```css
	.nav-item-click:before {
		opacity: 1;
		width: calc(100% - 30px);
		margin-left: 15px;
		box-shadow: 0 0 0px;
	}
```
And it works perfectly without using this feature. But to add this thing to the page, I have to link the parent **.nav-item** element by child **.nav-link.active** element and add to the parent class **.nav-item-click**. And I want to know if it's possible, because *overflow* dind't help)  
## New problem with scrollspy
Alright, this problem gotta be easier to solve I think. 
All the work of the feature you can see above, here just about the main points:
### Html code
I have a little **footer** in the end of my page:
``` html
	<div class="foot" id="footsect">
		<div class="container-fluid">
			<div class="row">
				<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
					<div class="title_foot">
						...
					</div>
				</div>
				<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
					<div class="title_foot">
						...
					</div>
					<div class="link_foot">
						...
					</div>
				</div>
			</div>
		</div>
	</div>
``` 
And also I have a **link** connected with this footer in my **navbar**:
``` html
	<nav class="navbar fixed-top navbar-expand-lg" id="nav">
		<div class="navbar-brand">
			...
		</div>
		<button ...>
			...
		</button>	
		<div class="navbar-collapse collapse" id="navmen">
			<div class="navbar-nav ms-auto">
				...
				<li class="nav-item" id="footer">
					<a class="nav-link" href="#footsect"><span>О нас</span></a>
				</li>		
			</div>
		</div>
	</nav>
```
### The problem
So after that it's logical to think, that when I scroll window on the part containing the
footer (that's the end of the page bc it is pretty small), my link has to be highlighted. But if u resize the window, you'll see that somewhere the highlight changes from the needed link to the previous one, and that doesn't matter if footer is in the window. You can see some screens in the ***photo*** folder.
I suppose that's bc of the small height of the element, but I don't know how to fix that and make link being highlighted all the time I scroll to the end of the page.

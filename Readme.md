

# Fomalghaut
## The problem of scrollspy
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

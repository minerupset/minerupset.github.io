# CSS - Style it Up

## CSS - Your Design

If HTML is the structure of a page, then the Cascading Style Sheets represent the styling that you apply to that structure.

I sadly have a confession to make: I was tragically born without a sense of style. That may come as a shock, given how beautifully styled this blog is, but I felt the need to come clean.

CSS allows you to apply different styling rules (alignment, color, fonts, etc.) to your HTML elements based on their type, class, id, or other features. It's important to note that CSS is, as its name says, cascading.

While the simple version is that rules are read in order, that's not everything. Yes, they're read in order, but first they're read in order of specificity. So rules that apply to elements with a unique ID win out. Rules that apply to classes come next. Then rules that apply to elements. So the rules apply in cascading order, but there's specificity order as well. 

<br>

## CSS - Reminders to myself:

### Grid and Flexbox are your friends
Grid and Flexbox are not two competing systems, they work best together. Use the refrences below for Flexbox Froggy and Grid Garden, but those create a clean layout for you when you need it. Grid is best when arranging systems in a 2D system (i.e. setting up rows and columns), but once you're within a single row or single column, Flexbox does a better job of aligning within that row or column. So make a wireframe of your page and use those two systems in conjunction to build your layout. 

### Naming Conventions: BEM and beyond
```css
.column{
    /* Never camel case, always lower case */
}

.nav-item{
    /* Use hyphens to join together */
}

.nav-item--active{
    /* Modified classes are two hyphens */
}

/* The BEM naming convention keeps things logical */
.container {

}

.container__business-card{
    /* This is a child of container */
}

.container__business-card__profile-image{
    /* This is a child of business card*/
}

.container__business-card__profile-image--selected{
    /* This is that same element, but modified*/
}

```

## Resources and References

1. Yes, I know that HTML and CSS can have some dynamic elements to them too, but like any high level topic, we start with the simple lies and eventually build to uncomfortable truths.
2. Some more detail on the DOM available at <a href="https://www.w3schools.com/whatis/whatis_htmldom.asp" target="_blank">this link</a>
3. Great resource available at <a href="https://www.w3schools.com/html/default.asp" target="_blank">w3schools</a>
4. <a href="https://flexboxfroggy.com/" target="_blank">Flexbox Froggy</a> - hard pressed to find something better
5. <a href="https://cssgridgarden.com/" target="_blank">Grid Garden</a> - same deal, it's just so helpful
6. <a href='https://codepen.io' target='_blank'></a>>


---
title: How to Solve a Rubik's Cube in 2 Minutes or Less
description: Brief instructional guide on how to solve a Rubik's Cube
date: December 27, 2021
duration: 20 min
# update_date:
# specific_css:
# specific_js:
tags:
  - puzzles
  - games
hide:
  - navigation
  # - toc
  - tags
---

# How to Solve a Rubik's Cube in 2 Minutes or Less

You don't need to be a genius or a savant to be able to solve a Rubik's cube[^1]: it's a skill like any other, which means it can be practiced and improved. The trick is knowing how you should be practicing and what to be looking for. Here is a (hopefully) simple guide that will help you solve a cube. There are a few different steps along the way, but once you have it down, you can solve any 3x3 Rubik's Cube, no matter how jumbled it is.

**Recommendations (to avoid frustration)**

1. Do all the steps <u>in order</u>, otherwise it won't work
2. Combine the videos with the written directions for increased clarity

### Order of Operations

[Main Principles](#main-principles)

1. [The Top Cross](#the-top-cross)
2. [Top Corners](#top-corners)
3. [Middle Layer](#middle-layer)
4. [Bonus: Top Corners and Middle Together](#bonus-top-corners-and-middle-together)
5. [Create the Bottom Cross](#create-the-bottom-cross)
6. [Orient the Bottom Cross](#orient-the-bottom-cross)
7. [Place the Bottom Corners](#place-the-bottom-corners)
8. [Finish the Bottom Corners](#finish-the-bottom-corners)
9. [Example Solutions](#example-solutions)

## Main Principles

Before starting, here are a few guiding principles that will help you understand the process a little more easily

1. **Centers never change**. Even if you spin the middle axes around, white and yellow always oppose each other, same with blue & green and red & orange, and they'll always be oriented the same way. This means you're solving for given faces, not trying to solve the whole thing at once
2. **Pick a 'top' and 'bottom' of the cube**. I typically view the white face as the 'top' of the cube and the yellow face as the 'bottom' layer. You can pick any opposing color combination, but always having a consistent top allows you to stay oriented in space, even as you're moving the cube around.
3. **Solve in layers**. We'll start with the top layer, the middle layer, then the bottom layer. The top and middle layers are a bit more free form (more than one way to solve those) but the bottom layer has some set patterns to memorize.
4. **Only one piece has a given color combination**. There is only one piece that has white, red, & green on it (white-red-green). The order doesn't matter, because there is only one piece that has that color combination, same as there is only one white-red piece, only one white-green piece, and only white piece (the center of the white face). This makes identifying pieces a quick process if you get lost.

Here is some brief notation on how I'll describe specific moves. I have intentionally included a video here so you can see how this would be done (UNLIST THE VIDEO)

```py title="Example Algorithm"
# Orientation: Bottom-side up # (1)
# Landmark: Furthest right 'incorrect' corner in lower right # (2)
Right-side-down # (3)
Bottom-side-left # (4)
Right-side-up
Bottom-side-right
# Repeat until incorrect corner is properly oriented (will be either 2x or 4x) # (5)
# Spin relative top to the left until next 'incorrect' corner in lower right # (6)
# Repeat process again until bottom face is solved
```

1. This lets you know how to orient the cube so that you have the correct top and bottom
2. This gives you a landmark so you can visualize the cube from the correct angle
3. Keeping the cube oriented as described, spin the right face down as if your thumb were moving down
4. Keeping the cube oriented as described, spin the bottom face as if your thumb would move to the left
5. Describes the number of times to do a step
6. Describes how to move to the next step

## The Top Cross

**Result of this step:** _Have a correctly oriented cross on the top of the cube_

Starting with the top of the cube, we need to get the cross in place. Note that you can't simply create any old cross: the white-red piece has to be oriented to the white and red faces, the white-blue piece to the white and blue, etc. This means the white-blue and white-green pieces must be opposing, and the white-red and white-orange pieces must be opposing.

Almost all of the moves in solving a cube involve some form of moving a desired piece out of the way, prepping it's landing spot, and then moving it back into position. Here is an example of how to do that for the top cross:

Brief video, including how to think about moving the pieces

## Top Corners

**Result of this step:** _Have the top layer of the cube correctly solved_

Now that you have the top cross together, the top corners need to be placed. Same as before, the correct corner must be placed in the correct spot and in the correct orientation. Again, this follows the same process of finding the piece you need, finding its target, and sweeping it into position. Here are some examples of how to do that for the top cross.

VIDEO

## Middle Layer

**Result of this step:** _Place the middle pieces, effectively solving the top two layers of the cube_

If you've made it this far, congratulations! You've solved an entire layer of a Rubik's cube, and it gets a bit easier from here on out (depending on how you define easy): while the top requires more thinking it through, the middle layer and beyond involves more in the way of consistent algorithms.

### Bonus: Top Corners and Middle Together

While solving the top corners and then the middle separately is fine, you can also solve both simultaneously, saving valuable time if you're racing the clock. The idea is to combine both the top corner and corresponding middle piece and then land them as a unit. This is done by placing the corner piece in the correct position, but with the wrong orientation: the white face will be pointing out instead of up. However, this is necessary: when we sweep the corner piece down to match with its middle piece, the two will land in sync. Then we swing them out of the way, bring the top cross piece back to its correct position, and then load the corner and middle piece together.

## Create the Bottom Cross

**Result of this step:** _Have a cross (doesn't need to be correctly oriented) on the bottom face while having the top two layers still solved correctly_

- Looking for the bottom backwards L, get it to be a cross
- If you don't have the L, don't worry: do the same algorithm until you get the backwards L, then do it one more time to get the cross

## Orient the Bottom Cross

**Result of this step:** _Place the bottom cross pieces on the correct faces_

- If two adjacent pieces are correct, orient them away from you like the backwards L
- If two opposing sides are correct, do it once from anywhere, then find the two adjacent pieces that are correct

## Place the Bottom Corners

**Result of this step:** _Place the bottom corners in their correct positions, even if they are not oriented properly_

- Find one bottom corner that is correct.
- If no bottom corners are correct, do it from anywhere, then find the bottom corner and do it from there

## Finish the Bottom Corners

**Result of this step:** _Properly orient the bottom corner pieces, solving the bottom layer and therefore the entire cube_

- Start from the furthest right incorrect corner (if they're all wrong, start anywhere)
- Do the pattern until that corner is oriented, then swing the top until you get to the next incorrect corner and do it from there
- This is the step where people can rush / make mistakes, so be careful! You will always do all 4 of the steps (Right side -> down, bottom -> left, right side -> up, bottom -> right). Skipping any one of them at any time will mess this up, so it's a question of how many times you do the 4 steps as a unit.

```py title="Finish the bottom corners"
# Orientation: Bottom-side up
# Landmark: Furthest right 'incorrect' corner in lower right
Right-side-down
Bottom-side-left
Right-side-up
Bottom-side-right
# Repeat until incorrect corner is properly oriented (will be either 2x or 4x)
# Spin relative top to the left until next 'incorrect' corner in lower right
# Repeat process again until bottom face is solved
```

## Example Solutions

Here are a few examples, complete with the steps layered on top. _Pause, replay, and go over any steps that felt that may have gone too fast_

[^1]: <a href='https://www.youtube.com/watch?v=V8Dm3OfSn4w' target='_blank'>Will Smith gets it</a>

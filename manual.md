---
layout: default
title: Manual
nav_order: 3
---

# User Manual

## The toolbar

Start from the upper-left, each button in the toolbar is explained as follows.

- File menu: Create new project, download or share projects, etc.
- Edit menu: Undo/redo (up to 30 steps), select all; more functions TBD.
- Setting menu: Display options and app preferences (including language setting).
- Tools menu: Currently with one additional tool (TreeMaker format importing); more tools TBD.
- Help menu: About the app, version info, and how to support it.
- Tree structure: Edit the tree structure of your project.
- Layout: Edit the Flap and Gadget layout of your project.
- Option panel (only in mobile version): Opens the option panel. For desktop version the option panel is always in display on the right side.

Right click on the tab (or use the dropdown menu for touch devices)
will expose actions related to tabs (such as cloning projects and close multiple tabs at once).
Dragging the tabs to re-order them.

## How to use

As you create a new project, you will see a basic layout with two flaps
(which is the minimal number of flaps allowed in the app in order to make structural sense).
First you should go to the tree structure view and decide what the structure of your model should be.
In order to edit the tree, click on any node and use commands in the option panel to modify the tree.
You can add nodes, delete leaf nodes (you cannot delete non-leaves right away as this will break the tree),
and modify the lengths of edges.
You can also rearrange the position of the nodes on your sheet by dragging them around.
It is also suggested that you name the the leaves to help identifying them with the flaps.

Once you have the desired structure, go to the layout view and start experimenting different combinations of flap locations.
BP Studio will try its best to find stretching patterns for those flaps that has overlapping with their corresponding rectangles
(but not with their corresponding circles), and try to determine the shape of all flaps and rivers automatically.
For a very brief account of the method of generating stretch patterns used in this app, see [[2]](notes.html#b2).

When you finish your design, you can download you project, download the entire workspace, or export the design in SVG or PNG formats.
You can right click (or long press for touch devices) on any download command in the file menu and click "save as" to choose the saving location and filename.

The coloring of hinges, ridges and axial-parallel creases follows Lang's convention in his book.
For clarity, only the axial-parallel creases of the stretching patterns are shown,
but you should have no problem figuring out the rest by looking at the ridge creases.

## Current limitations

 It is not always possible for BP Studio to find working stretch patterns in any valid layout.
 So far the author had implemented enough algorithms for finding patterns for any valid layout with two flaps,
 and for most valid layouts with three flaps.
 The author will continue to implement more algorithms for more complicated patterns in the future.

For the moment, BP Studio hasn't implemented the notion of elevation, half-integral unit structures, or meandering rivers.
But you can widen or heighten your flaps by setting their width or height,
and use them to create elevations in your final model.
You can also use integral structures to roughly represent the space occupied by the half-integral structures,
and transform them into the latter in your folding process.
Meandering rivers might be represented similarly by using stub flaps,
or you can just pretend that it's there and fold your thing anyway 😉

Since generating a complete, flat-foldable mountain-valley CP would also require the notion of elevation,
as well as other considerations such as hinge direction choices, empty space filling etc.,
for the moment BP Studio also cannot automatically generate such CP for you,
and you would have to complete those details using the theory of uniaxial box pleating bases.
But the author do have plans to implement this feature in the future.

Other features such as diagonal/tilted grid, Oripa/Orihime format exporting etc. are also planned.

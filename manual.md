---
layout: default
title: Manual
nav_order: 3
---

# User Manual

## The toolbar

Start from the upper-left, each button in the toolbar is explained as follows.

<i class="fas fa-file-alt fa-fw fa-lg"></i>
: File menu: Create new project, download or share projects, etc.

<i class="fas fa-pencil-ruler fa-fw fa-lg"></i>
: Edit menu: Undo/redo (up to 30 steps), select all; more functions TBD.

<i class="fas fa-tasks fa-fw fa-lg"></i>
: Setting menu: Display options and app preferences (language, theme, color scheme, etc.).

<i class="fas fa-tools fa-fw fa-lg"></i>
: Tools menu: Optimize layout, import from [TreeMaker](https://langorigami.com/article/treemaker/) format, and export to CP format.

<i class="fas fa-question-circle fa-fw fa-lg"></i>
: Help menu: About the app, version info, and how to support it.

<i class="fas bp-tree fa-fw fa-lg"></i>
: Tree structure: Edit the tree structure of your project.

<i class="fas bp-layout fa-fw fa-lg"></i>
: Layout: Edit the Flap and Gadget layout of your project.

<i class="fas fa-sliders-h fa-fw fa-lg"></i>
: Option panel (only in mobile version): Opens the option panel. For desktop version the option panel is always in display on the right side.

Right click on the tab (or use the dropdown menu for touch devices)
will expose actions related to tabs (such as cloning projects and close multiple tabs at once).
Drag the tabs to re-order them.

## How to use

As you create a new project, you will see a basic tree with two edges
(which is the minimal number of edges allowed in the app in order to make structural sense).
First, you should decide what the structure of your model should be.
In order to edit the tree, click on any node and use commands in the Option panel to modify the tree.
You can add nodes, delete leaf nodes, modify the lengths of edges,
and perform some advanced operations such as edge splitting and merging end vertices.
You can also rearrange the position of the nodes on your sheet by dragging them around.
It is also suggested that you name the leaves to help identify them with the flaps.

Once you have the desired structure,
go to the layout view and start experimenting with different combinations of flap locations.
BP Studio will try its best to find stretching patterns for those flaps that has overlapping with their corresponding rectangles
(but not with their corresponding circles) and try to determine the shape of all flaps and rivers automatically.
For a very brief account of the method of generating stretch patterns used in this app, see [[2]](notes.html#b2) and [[3]](notes.html#b3).

When you finish your design, you can save your project,
save the entire workspace, or export the design to CP formats for further editing in other softwares
(such as [Oriedita](https://oriedita.github.io/)).
Note that CP exporting is not intended to generate flat-foldable CPs
(which is beyond the scope of BP Studio for now),
but to give you a starting point without having to redraw everything from scratch.

The default colorings of hinges, ridges, and axial-parallel creases follows Lang’s convention in his book,
but you may also customize them in the preference dialog.
For clarity, only the axial-parallel creases of the stretching patterns are shown,
but you should have no problem figuring out the rest by looking at the ridge creases.

## Layout optimization

Under the tools menu one will find "Optimize layout" introduced in upcoming v0.7.
This tool uses methods similar to those of TreeMaker to find efficient packing solution for your design.
There are two layout methods: either use your current layout as reference
(and the optimizer will try to improve it as much as possible),
or let the optimizer generate several random layouts and use the most efficient one among them.
In the first method, there's also an option "Try variations of the current layouts",
which will also try slightly different arrangements of flaps to see if the efficiency can be further improved.

Tip: Most stages of the computation can be skipped. By skipping some of the steps,
you can also use this tool to simply spread the flaps apart after you have done constructing the tree.
However, doing so could lead to less efficient layouts and invalid overlappings of flaps.

## Current limitations

It is not always possible for BP Studio to find working stretch patterns in every valid layout.
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

Other features such as tilted grid, exporting to more formats, etc. are also planned.

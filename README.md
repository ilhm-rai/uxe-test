# Blibli UX Engineer Test

## I. Written test

1. JavaScript frameworks are the vessels emboldening the language to do its best work with little to no configuration. Frameworks provide developers with the basic foundation necessary for building JavaScript applications. This saves developers the effort of starting from scratch by utilizing a functional base to get things rolling. There are a couple dozen JavaScript frameworks out in the ether for you to use. Vue is one of the most popular JavaScript framework. It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be it simple or complex.
2. The ellipsis is displayed inside the content area, decreasing the amount of text displayed. If there is not enough space to display the ellipsis, it is clipped.
3. Explain animation properties
    * ```@keyframe``` rule specifies the animation code. It hold what styles the element will have at certain times.
    * ```animation-name``` defines the name of the animation.
    * ```animation-duration``` property defines how long an animation should take to complete.
    * ```animation-iteration``` property specifies the number of times an animation should run.
    * ```animation-direction``` property specifies whether an animation should be played forwards, backwards or in alternate cycles.
4. According to Wikipedia, lazy loading is a pattern designed to hold off the initialization of an element or an object until it is needed. What this means is that a target DOM element, relative to a parent DOM element, is loaded and becomes visible (when there is an intersection between both elements, based on a set threshold value) only when a user scrolls through them on a webpage. We can implement lazy loading using JavaScript with Intersection Observer API. In order to create an intersection observer, all we need to do is listen to the occurrence of an intersection observer event and trigger a callback function or handler to run when this kind of event occurs. For intersection events, we need to specify the element that we intend to apply the intersection against. This element is usually called the root element. However, if the root element is not specified, it means we intend to target the entire browser viewport. Additionally, we also need to specify a margin for the root element (if provided) so that we can easily alter its shape or size, if necessary, on intersection.
5. Mention at least 5 git commands and describe each function of them!
    * ```git init ``` : initialize an existing directory as a Git repository.
    * ```git remote [url]``` : retrieve an entire repository from a hosted location via URL.
    * ```git status``` : show modified files in working directory, staged for your next commit.
    * ```git add [file]``` : add a file as it looks now to your next commit (stage).
    * ```git reset [file]``` : unstage a file while retaining the changes in working directory.
    * ```git commit -m “[descriptive message]”``` : commit your staged content as a new commit snapshot.
    * ```git branch``` : list your branches. a * will appear next to the currently active branch.
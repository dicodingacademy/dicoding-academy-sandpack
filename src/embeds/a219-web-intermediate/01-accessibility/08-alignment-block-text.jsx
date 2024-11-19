import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Alignment of Block of Text | Typography</title>
  
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="grid">
    <div class="grid-item justified">
      <h2>Fully justified</h2>
      <p>I love cheese, especially queso cheese on toast. Cheesecake who moved my cheese halloumi cottage cheese cottage cheese cheese slices cottage cheese manchego. Cheese triangles pepper jack bocconcini cheese and biscuits st. agur blue cheese cheesecake babybel blue castello. Edam cheese and wine st. agur blue cheese croque monsieur cheesecake.</p>
  
      <p>Airedale cheesy feet brie. Roquefort bavarian bergkase squirty cheese cheesy feet bavarian bergkase everyone loves macaroni cheese squirty cheese. Cow cheesy grin cheesy grin cheese on toast roquefort caerphilly cream cheese queso. Who moved my cheese jarlsberg.</p>
  
      <p>Red leicester cheesy feet cheese slices. Camembert de normandie stinking bishop ricotta brie feta macaroni cheese mozzarella babybel. Parmesan boursin swiss stinking bishop cut the cheese feta cream cheese cow. Feta cottage cheese cauliflower cheese dolcelatte halloumi bocconcini.</p>
    </div>
    <div class="grid-item centered">
      <h2>Centered</h2>
      <p>I love cheese, especially queso cheese on toast. Cheesecake who moved my cheese halloumi cottage cheese cottage cheese cheese slices cottage cheese manchego. Cheese triangles pepper jack bocconcini cheese and biscuits st. agur blue cheese cheesecake babybel blue castello. Edam cheese and wine st. agur blue cheese croque monsieur cheesecake.</p>
  
      <p>Airedale cheesy feet brie. Roquefort bavarian bergkase squirty cheese cheesy feet bavarian bergkase everyone loves macaroni cheese squirty cheese. Cow cheesy grin cheesy grin cheese on toast roquefort caerphilly cream cheese queso. Who moved my cheese jarlsberg.</p>
  
      <p>Red leicester cheesy feet cheese slices. Camembert de normandie stinking bishop ricotta brie feta macaroni cheese mozzarella babybel. Parmesan boursin swiss stinking bishop cut the cheese feta cream cheese cow. Feta cottage cheese cauliflower cheese dolcelatte halloumi bocconcini.</p>
    </div>
    <div class="grid-item left-justified">
      <h2>Left justified</h2>
      <p>I love cheese, especially queso cheese on toast. Cheesecake who moved my cheese halloumi cottage cheese cottage cheese cheese slices cottage cheese manchego. Cheese triangles pepper jack bocconcini cheese and biscuits st. agur blue cheese cheesecake babybel blue castello. Edam cheese and wine st. agur blue cheese croque monsieur cheesecake.</p>
  
      <p>Airedale cheesy feet brie. Roquefort bavarian bergkase squirty cheese cheesy feet bavarian bergkase everyone loves macaroni cheese squirty cheese. Cow cheesy grin cheesy grin cheese on toast roquefort caerphilly cream cheese queso. Who moved my cheese jarlsberg.</p>
  
      <p>Red leicester cheesy feet cheese slices. Camembert de normandie stinking bishop ricotta brie feta macaroni cheese mozzarella babybel. Parmesan boursin swiss stinking bishop cut the cheese feta cream cheese cow. Feta cottage cheese cauliflower cheese dolcelatte halloumi bocconcini.</p>
    </div>
  </div>
</body>
</html>
`,
  },
  'styles.css': {
    hidden: false,
    code: `\
@import url(https://fonts.googleapis.com/css?family=Open+Sans);

body {
  font-family: "Open Sans", sans-serif;
  margin: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  margin: 0 auto;
}

.grid-item {
  padding: 0 1.25rem 1.5rem;
  margin: 1rem;
  text-align: left;
  overflow: hidden;
}

h2 {
  font-size: 1.5rem;
}

p {
  font-size: 1rem;
}

.justified {
  text-align: justify;
}

.centered {
  text-align: center;
}

.left-justified {
  text-align: left;
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

export default function AlignmentBlockText08() {
  return (
    <StaticWebSandpack
      files={files}
      options={{
        editorWidthPercentage: 55,
        showConsole: false,
      }}
    />
  );
}

---
title: 'Python vs Rust vs JavaScript '
status: 'published'
author:
  name: 'Rajdeep singh'
  picture: 'https://avatars.githubusercontent.com/u/32416397?v=4'
slug: 'python-vs-rust-vs-javascript'
description: 'Irure tempor nisi consequat et veniam ad est.'
coverImage: 'https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_1280.jpg'
tags: [{"label":"language","value":"language"}]
publishedAt: '2023-11-03T18:46:38.898Z'
---

Dolore ipsum minim dolore anim duis aliquip cupidatat excepteur. Laborum amet eiusmod voluptate amet.

Ullamco cupidatat eu duis minim proident. Irure in pariatur adipisicing incididunt nulla qui.

### Rust vs Python vs JavaScript

> In cillum proident magna officia in aute aliquip officia consequat.

### Python

Ut et esse exercitation cillum dolore Lorem nisi. Non minim ullamco cillum labore culpa excepteur amet Lorem culpa sit incididunt aute.

```javascript
import random
import time

computerwins = 0
playerwins = 0
ties = 0
end = 0

while True:

    choices = ["rock",
               "paper",
               "scissors"]

    userChoice = raw_input("Rock, Paper, Scissors, or End")

    computerChoice = (random.choice(choices))
    print(computerChoice)

    if userChoice == computerChoice:
        time.sleep(0.5)
        print("Tie!\n")
        ties += 1
        end += 1

    elif userChoice == "rock":
        if computerChoice == "paper":
            time.sleep(0.5)
            print("Computer Win!\n")
            computerwins +=1
            end += 1

        else:
            time.sleep(0.5)
            print("Player win!\n")
            playerwins += 1
            end += 1

    elif userChoice == "paper":
        if computerChoice == "rock":
            time.sleep(0.5)
            print("Player win!\n")
            playerwins += 1
            end += 1

        else:
            time.sleep(0.5)
            print("Computer win!\n")
            computerwins += 1
            end += 1

    elif userChoice == "end":
            choices.append("end")
            print("\nGreat game!\n")
            print("Total score for computer: ", computerwins, "wins!")
            print("Total score for player: ", playerwins, "wins!")
            print("Total ties: ", ties, "ties!")
            time.sleep(2)
            break
```

### Rust

In dolor nostrud laborum aliqua aliquip irure consectetur non qui reprehenderit qui labore.

```rust
// This is the main function.
fn main() {
    // Statements here are executed when the compiled binary is called.

    // Print text to the console.
    println!("Hello World!");
}
```

### JavaScript

Aute incididunt est excepteur irure Lorem in amet veniam sunt reprehenderit occaecat ea consequat cillum.

```javascript
let data = {
  name:"Brendan Eich",
  inventor :"Javascrpt"
}
console.log(`The name of his is ${data.name}. He is the inventor of ${data.inventor} programming language`);
```

### Id elit ea ullamco esse labore.

Irure tempor nisi consequat et veniam ad est. Mollit mollit dolor velit minim magna.

Quis cupidatat laborum nulla Lorem consectetur laborum occaecat nostrud mollit ex elit voluptate commodo est.


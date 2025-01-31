# ENCORE (Enhancing Nuclear Cybersecurity for Optimization and Resilience Education)

## Introduction

This tool has been created as part of a MSci Computing Science research project designed to interweave traditional knowledge-based nuclear cybersecurity training with a serious game, aiming to enhance phishing awareness for employees and practitioners.

## Getting Started

Once the repository has been cloned, the dependencies must be installed to run the tool locally. This can be done using the command `npm i` once in the `/encore` directory.

The tool can then be ran using the `npm run dev` command

ENCORE can also be accessed through the live deployment, hosted at https://encore-training.vercel.app/

## Technologies Used

### Current Technologies

- React and Next.JS
- TailwindCSS
- DaisyUI component library
- Clerk Authentication

## To-Do List

- Create Game
  - Disable debug mode
  - Implement Cue tracking for analytics
- Create Content For Game (Scenario Development)
  - Finish Written Training Content
  - Add Context for each email
- Data Aggregation Feature
  - Finish making Manager Dashboard dynamic
- Evaluation
  - Add content to pre, mid and final tests
  - Finish Evaluation Flow (e.g. Pre Test -> Written -> Mid-Evaluation Test -> Game -> Final Test -> Form) (Do this last and put on a separate branch)
- Debugging
  - Subject Bad and From Bad, this isn't dynamic indexing and might be wrong for subject if from is not bad (EmailHeader.tsx)
  - Names in emails, if user account doesn't have one, might need to create a name form at start to increase legitimacy of emails etc

## Wireframes

The wireframes for this project can be found at https://www.figma.com/design/Pg52ux4LXGLjPrp2PD5k0f/ENCORE-Training-Platform?node-id=0-1&t=zBePdW5j1QMc6VFp-1 and https://www.figma.com/design/ckL20EggVJ8YmIJjgBNZAm/Attacker-or-Ally

## Credits

**Calum McGregor** - Developer - *2518508M@student.gla.ac.uk*

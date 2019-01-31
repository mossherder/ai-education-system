# AI Driven Education Core

This project is an attempt to create a first-generation education system utilizing 
advances in artificial intelligence for optimizing teaching methods.

#### Underlying hypotheses:

* The teacher-student process can be sufficiently gamified for AI modeling
* Education can be simplified to a decoding/encoding process which defines comprehension

## Core system specifications

There are many aspects to the full education system that will be working in tandem to create the full education system.
Some of these aspects include curriculum, interface generation, student level understanding, and artificial intelligence
algorithm adaptaptation.

The core system will not contain all of these items. It will be a platform for adding curricula.

### Interface Generation

A subsystem will be the ability to generate different interfacing methods. These should include common interfacing methods,
such as textual, auditory, and visual, but should also include input methods and potentially a system that will allow for
the emergence of new interfacing methods.

### Student Level Understanding

A subsystem will be for the system to understand level of understanding. If the user is looking to learn a new language,
learn about history of some topic, or a category of mathematics, the system should be able to begin a curricula and quickly
assess to some degree of certainty where along the curricula the user is currently located.

### Algorithm Adaptation

The system should be able to have some adaptability in its algorithm adaptation. As the system grows, we may need to use a 
different algorithm, we may need the system to choose an different algorithm based on user learning speed (for instance),
or we may need to allow the system to choose multiple algorithms to find optimal teaching.

### Controller Interface

The system will have an interface for allowing a curricula to define a controller for the system to use. This will in essence
define the decoding/encoding requirements and any periferal uses.

Though a subsystem will be a generic interface that should handle many controllers, the controller layers that could be abstractions
of same-category curricula and then subsequent, more well-defined controllers for the specific curricula, will not be a part of the
core subsystem.

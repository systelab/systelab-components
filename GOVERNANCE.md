
# Project Governance

<!-- TOC -->

* [Collaborators](#collaborators)
  * [Collaborator activities](#collaborator-activities)
  * [Collaborator nominations](#collaborator-nominations)
* [Technical steering committee](#technical-steering-committee)
  * [TSC meetings](#tsc-meetings)
  * [Consensus seeking process](#consensus-seeking-process)
* [Release Manager](#release-manager)

<!-- /TOC -->


## Collaborators

Core collaborators for Systelab libraries are responsible for the GitHub repository maintenance. 
All members of @systelab/angular-team are potential collaborators to this library.

Collaborators have:

* Commit access to the repository in any branch different from master.
* Access to the Continuous integration (CI) jobs

Both collaborators and non-collaborators may propose changes to the library source code. 
The mechanism to propose such an implementation change is a GitHub pull request.

Collaborators review and merge (_land_) pull requests.

Three collaborators must approve a pull request before the pull request can land. 
Approving a pull request indicates that the collaborator accepts
responsibility for the change. Approval must be from collaborators who are not
authors of the change.

If a collaborator opposes a proposed change, then the change cannot land. Often, discussions or further changes
result in collaborators removing their opposition.

Please see the detailed instructions on [Contribution](https://github.com/systelab/systelab-components/blob/master/CONTRIBUTING.md)

### Collaborator activities

* Helping users and novice contributors
* Contributing code and documentation changes that improve the project
* Reviewing and commenting on issues and pull requests
* Participation in working groups
* Merging pull requests

The TSC can add and remove collaborators to the @systelab/angular-team team.

### Collaborator nominations

Existing collaborators can nominate someone to become a collaborator. Nominees
should have significant and valuable contributions across the Sytelab libraries
organization.

To nominate a new collaborator, contact someone with GitHub account Administrator rights in order to add the new collaborator to the systelab/angular-team.

The TSC can remove collaborators from the @systelab/angular-team team by contacting someone with GitHub account Administrator rights.

## Technical Steering Committee

A subset of the collaborators forms the Technical Steering Committee (TSC).
The TSC has final authority over this project, including:

* Technical direction
* Project governance and process (including this policy)
* Contribution policy
* GitHub repository hosting
* Conduct guidelines
* Maintaining the list of collaborators

The current list of TSC members for this library is:

- Olga Puig @olgapuig (Meeting Chair)
- Alfons Serra @alfonsserra
- Carles Viñola. @vinyulis
- Daniel Martinez. @dmartinezcapilla
- Alex Arnaiz. @xxxx
- Abel Capdevila. @abeliuss
- Joaquim Vila. @joaquimvila
- Jordi Serra. @xxxxxx
- Toni Lainez. @tlainez
- Oscar de dios. @OscarDeDios
- Oscar Galcerán. @oGalceran1
- Ernest Hernandez. @xxxxx

### TSC meetings

The TSC meets periodically.

Before each TSC meeting, the meeting chair will share the agenda with members of
the TSC. TSC members can also add items to the agenda at the beginning of each
meeting. The meeting chair and the TSC cannot veto or remove items.

The TSC may invite people to take part in a non-voting capacity.

During the meeting, the TSC chair updates the projects and issues in GitHub with the decisions taken.

#### Projects

Projects are milestones where issues are implemented.

The TSC creates, closes and updates projects during the TSC meeting. Decisions are taken by consensus.

Projects are located at https://github.com/systelab/systelab-components/projects

#### Issues
Any community member can create a GitHub issue asking that the TSC review something or approve to implement a change or new functionality.

Issues are located at https://github.com/systelab/systelab-components/issues. The process in
the issue tracker is:

* Anyone can open an issue.
* If the issue is accepted by the TSC, it is planned by assign the issue to an specific project. 
* If it is not, the issue is close and a comment with the rational is added.


### Consensus seeking process

The TSC follows a [Consensus Seeking](https://en.wikipedia.org/wiki/Consensus_decision-making) decision-making model .


## Release manager

Release manager is responsible for planning and scheduling software delivery all through the release lifecycle.

The aim is to facilitate the process required to move software releases into production while coordinating with different teams to ensure the smooth delivery of software releases with little disruption. 

The Release Manager for this library is @alfonsserra

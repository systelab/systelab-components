
# Project Governance

<!-- TOC -->

* [Collaborators](#collaborators)
  * [Collaborator activities](#collaborator-activities)
* [Technical steering committee](#technical-steering-committee)
  * [TSC meetings](#tsc-meetings)
* [Collaborator nominations](#collaborator-nominations)
  * [Onboarding](#onboarding)
* [Consensus seeking process](#consensus-seeking-process)

<!-- /TOC -->


## Collaborators

Systelab libraries core collaborators maintain the GitHub repository.
The GitHub team for Systelab libraries core collaborators is @systelab/anguler-team.

Collaborators have:

* Commit access to the repository in any branch different than master.
* Access to the Systelab libraries continuous integration (CI) jobs

Both collaborators and non-collaborators may propose changes to the Systelab libraries
source code. The mechanism to propose such an implmentation change is a GitHub pull request.
Collaborators review and merge (_land_) pull requests.

Three collaborators must approve a pull request before the pull request can land. 
Approving a pull request indicates that the collaborator accepts
responsibility for the change. Approval must be from collaborators who are not
authors of the change.

If a collaborator opposes a proposed change, then the change cannot land. The
exception is if the TSC votes to approve the change despite the opposition.
Usually, involving the TSC is unnecessary. Often, discussions or further changes
result in collaborators removing their opposition.

### Collaborator activities

* Helping users and novice contributors
* Contributing code and documentation changes that improve the project
* Reviewing and commenting on issues and pull requests
* Participation in working groups
* Merging pull requests

The TSC can remove inactive collaborators or provide them with _emeritus_
status. Emeriti may request that the TSC restore them to active status.

## Technical Steering Committee

A subset of the collaborators forms the Technical Steering Committee (TSC).
The TSC has final authority over this project, including:

* Technical direction
* Project governance and process (including this policy)
* Contribution policy
* GitHub repository hosting
* Conduct guidelines
* Maintaining the list of collaborators

The current list of TSC members is:

- Olga Puig @olgapuig
- Alfons Serra @alfonsserra
- Carles Viñola. @vinyulis
- Daniel Martinez. @dmartinezcapilla
- Josep Vila. @josepvilabadillo
- Aritz Peñalver. @apenalver2
- Joaquim Vila. @joaquimvila

### TSC meetings

The TSC meets periodically.

The TSC agenda includes issues that are at an impasse. The intention of the
agenda is to review or approve all patches. 

Any community member can create a GitHub issue asking that the TSC review
something.

Before each TSC meeting, the meeting chair will share the agenda with members of
the TSC. TSC members can also add items to the agenda at the beginning of each
meeting. The meeting chair and the TSC cannot veto or remove items.

The TSC may invite people to take part in a non-voting capacity.

During the meeting, the TSC chair updates teh project in GitHub with the decissi0ons taken.

The TSC seeks to resolve as many issues as possible outside meetings using
[the TSC issue tracker](https://github.com/systelab//issues). The process in
the issue tracker is:

* A TSC member opens an issue explaining the proposal/issue.
* The proposal passes if, after 72 hours, there are two or more TSC approvals
  and no TSC opposition.

## Collaborator nominations

Existing collaborators can nominate someone to become a collaborator. Nominees
should have significant and valuable contributions across the Sytelab libraries
organization.

To nominate a new collaborator, contacts someone with Administrator rights in order to add the new collaborator in the systelab/angular-team.
Provide a summary of the nominee's contributions. For example:

The nomination passes if no collaborators oppose it after one week. Otherwise,
the nomination fails.


## Consensus seeking process

The TSC follows a [Consensus Seeking][] decision-making model .


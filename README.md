## Description

Simple app to fetch a list of charging locations from [Open Charge Map](https://openchargemap.org/site/develop/api#/), display the list, allow the user to select
a charger and start charging. Some points about the architecture of the app:

- Custom components are organized into directories
- A Service was created that exports a function to fetch the charging locations and mock the POST to start a charging session
- A Utils directory is used for helper items. Since the scope of the app is so small, only a handful of constants are defined.
- There is a bit of repsonsiveness built in. Namely, a couple items in the charger info and the button are responsive.


### Some items to add or improve upon
- Loading state
- Refactor Services to use Context so they are injectable and testable in unit tests
- Use Location API to grab a users location to fetch charge points against
- Plot charge points to a map
- Make query params dynamic

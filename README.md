# Civic Media Project Website

# Engagement Lab

### Setup
1. Install [EL-Website](https://github.com/engagementgamelab/EL-Website).
2. Clone this repo (https://github.com/engagementgamelab/starter-module.git).
3. Link this module to EL-Website: 

  ```
  cd civic-media-project
  npm-link
  ```
  
  ```
  cd ../EL-Website
  npm link civic-media-project
  ```
  
4. Start the module. **From EL-Website**, run:

  ```
  grunt --sites=civic-media-project
  ```
The site should now be running at http://localhost:3000.

(More docs coming soon.)
'use strict';

/**
 * @ngdoc function
 * @name shofloApp.controller:DailiesCtrl
 * @description
 * # DailiesCtrl
 * Controller of the shofloApp
 */
angular.module('shofloApp')
  .controller('DailiesCtrl', function () {
    var self = this;

    self.display = "";

    self.seasons = [
      {
        name: 'Season 1',
        episodes: [
          {
            title: 'E 01',
            daily: 'Loren Ipsum1',
            messages: [],
            name: '',
            text: '',
            id: 1
          },
          {
            title: 'E 02',
            daily: 'Loren Ipsum2',
            messages: [],
            name: '',
            text: '',
            id: 2
          },
          {
            title: 'E 03',
            daily: 'Loren Ipsum3',
            messages: [],
            name: '',
            text: '',
            id: 3
          },
        ]
      },
      {
        id: 2,
        name: 'Season 2',
        episodes: [
          {
            title: 'E 01',
            daily: 'Loren Ipsum4',
            messages: [],
            name: '',
            text: '',
            id: 4
          },
          {
            title: 'E 02',
            daily: 'Loren Ipsum5',
            messages: [],
            name: '',
            text: '',
            id: 5
          },
          {
            title: 'E 03',
            daily: 'Loren Ipsum6',
            messages: [],
            name: '',
            text: '',
            id: 6
          },
        ]
      },
      {
        name: 'Season 3',
        episodes: [
          {
            title: 'E 01',
            daily: 'Loren Ipsum7',
            messages: [],
            name: '',
            text: '',
            id: 7
          },
          {
            title: 'E 02',
            daily: 'Loren Ipsum8',
            messages: [],
            name: '',
            text: '',
            id: 8
          },
          {
            title: 'E 03',
            daily: 'Loren Ipsum9',
            messages: [],
            name: '',
            text: '',
            id: 9
          },
        ]
      }
    ];

    self.openDaily = function (selectedDaily) {
      if (self.display) {
        self.display = "";
      }
      angular.forEach(self.seasons, function (season) {
        angular.forEach(season.episodes, function (episode) {
          if (episode.id === selectedDaily.id) {
            self.display = episode.daily;
          }
        });
      });
    }

  });

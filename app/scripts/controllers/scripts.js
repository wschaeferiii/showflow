'use strict';

/**
 * @ngdoc function
 * @name shofloApp.controller:ScriptsCtrl
 * @description
 * # ScriptsCtrl
 * Controller of the shofloApp
 */
angular.module('shofloApp')
    .controller('ScriptsCtrl', function () {

        var self = this;

        self.display = "";

        self.seasons = [
            {
                name: 'Season 1',
                episodes: [
                    {
                        title: 'E 01',
                        script: 'Loren Ipsum1',
                        messages: [],
                        name: '',
                        text: '',
                        id: 1
                    },
                    {
                        title: 'E 02',
                        script: 'Loren Ipsum2',
                        messages: [],
                        name: '',
                        text: '',
                        id: 2
                    },
                    {
                        title: 'E 03',
                        script: 'Loren Ipsum3',
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
                        script: 'Loren Ipsum4',
                        messages: [],
                        name: '',
                        text: '',
                        id: 4
                    },
                    {
                        title: 'E 02',
                        script: 'Loren Ipsum5',
                        messages: [],
                        name: '',
                        text: '',
                        id: 5
                    },
                    {
                        title: 'E 03',
                        script: 'Loren Ipsum6',
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
                        script: 'Loren Ipsum7',
                        messages: [],
                        name: '',
                        text: '',
                        id: 7
                    },
                    {
                        title: 'E 02',
                        script: 'Loren Ipsum8',
                        messages: [],
                        name: '',
                        text: '',
                        id: 8
                    },
                    {
                        title: 'E 03',
                        script: 'Loren Ipsum9',
                        messages: [],
                        name: '',
                        text: '',
                        id: 9
                    },
                ]
            }
        ];

        self.openScript = function (selectedEpisode) {
            if (self.display) {
                self.display = "";
            }
            angular.forEach(self.seasons, function (season) {
                angular.forEach(season.episodes, function (episode) {
                    if (episode.id === selectedEpisode.id) {
                        self.display = episode.script;
                    }
                });
            });
        }

    });

import { defineStore } from 'pinia';
import { getAllVideos } from '../api/index';
import type { VideItem, Params } from '../types';
import { OrderBy } from '../enums';

export const useCounterStore = defineStore('store', {
  state: () => ({
    allVideos: [] as VideItem[],
    processedVideos: [] as VideItem[],
    itemsPerPage: 10 as number,
  }),

  actions: {
    async getAllVideos() {
      let data = await getAllVideos();
      this.allVideos = data.data;
      this.processedVideos = [...this.allVideos];
    },
    filterByName(name: string) {
      this.processedVideos = this.processedVideos.filter((e) => {
        return e.name.toLowerCase().includes(name.toLowerCase());
      });
    },
    filterByScore(score: string) {
      this.processedVideos = this.processedVideos.filter(
        (e) => `${Math.floor(e.rating / 10)}` === score
      );
    },
    applySorting(orderBy: string) {
      const compareFunction = (a: VideItem, b: VideItem) => {
        switch (orderBy) {
          case OrderBy.Name:
            return a.name.localeCompare(b.name);
          case OrderBy.Score:
            return b.rating - a.rating;
          case OrderBy.ReleaseDate:
            return b.first_release_date - a.first_release_date;
          default:
            return 0;
        }
      };
      this.processedVideos.sort(compareFunction);
    },
    getVideos(params: Params) {
      this.processedVideos = [...this.allVideos];

      if (params.page) {
        const from = params.page * this.itemsPerPage - this.itemsPerPage;
        const to = params.page * this.itemsPerPage + 1;
        this.processedVideos = this.processedVideos.slice(from, to);
      }
      if (params.name) {
        this.filterByName(params.name);
      }
      if (params.score) {
        this.filterByScore(params.score);
      }
      if (params.orderBy) {
        this.applySorting(params.orderBy);
      }
    },
  },

  getters: {
    videos: (state) => state.allVideos,
    filteredVideos: (state) => state.processedVideos,
  },
});

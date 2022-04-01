// 话题列表
export default {
  state: () => ({
    list: [],
  }),
  actions: {
    // 获取 topicList
    async getList() {
      try {
        this.list = await request.getTopicList();
      }catch(err) {
        this.list = [];
      }finally {
        return this.list;
      }
    },

    // 根据 topicId 获取 topicItem
    async getTopic(topicId) {
      // 从 list 中找，找到返回
      let topic = this.list.find((item) => (item.topicId === topicId))
      if(topic) {
        return topic
      }
      // 没找到重新请求并返回
      try {
        topic = await request.getTopic(topicId);
      }catch(err) {
        topic = null;
      }finally {
        return topic
      }
    }
  }
}
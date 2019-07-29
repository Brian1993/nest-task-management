class FriendsList {
  friends = []

  addFriend(name) {
    this.friends.push(name)
    this.announcFriendship(name)
  }

  announcFriendship(name) {
    console.log(`${name} is now a friend`)
  }

  removeFriend(name) {
    const idx = this.friends.indexOf(name)
    if (idx === -1) {
      throw new Error('Friend Not Found!')
    }
    this.friends.splice(idx, 1)
  }
}

// test
describe('Friends List', () => {
  let friendList: FriendsList

  beforeEach(() => {
    friendList = new FriendsList()
  })

  it('initializes friends list', () => {
    expect(friendList.friends.length).toEqual(0)
  })

  it('add a friend to the list', () => {
    friendList.addFriend('Ariel')
    expect(friendList.friends.length).toEqual(1)
  })

  it('announces friendship', () => {
    friendList.announcFriendship = jest.fn()
    expect(friendList.announcFriendship).not.toHaveBeenCalled()
    friendList.addFriend('Ariel')
    expect(friendList.announcFriendship).toHaveBeenCalledWith('Ariel')
  })

  describe('removeFriend', () => {
    it('removes a friend from the list', () => {
      friendList.addFriend('Ariel')
      expect(friendList.friends[0]).toEqual('Ariel')
      friendList.removeFriend('Ariel')
      expect(friendList.friends[0]).toBeUndefined()
    })

    it('throws an error as friend does not exist', () => {
      expect(() => friendList.removeFriend('Ariel')).toThrow(new Error('Friend Not Found!'))
    })
  })
})

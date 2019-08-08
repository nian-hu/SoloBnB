class MessageSerializer < ActiveModel::Serializer
  attributes :id, :conversation_id, :body, :created_at
end

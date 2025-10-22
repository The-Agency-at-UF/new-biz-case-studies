"use client";

import { useState } from "react";

// Block type definitions for dynamic content creation
// Supports three types: text paragraphs, images, and animations
export type BlockType = "text" | "image" | "animation";

export interface Block {
  id: string;
  type: BlockType;
  content: {
    text?: string;           // For text blocks - stores paragraph content
    imageUrl?: string;       // For image blocks - stores image URL. May change this to file upload depending on how we want to store it in db.
    imageAlt?: string;        // For image blocks - stores alt text for accessibility
    animationType?: string;   // For animation blocks - stores animation type (fadeIn, slideIn, etc.)
    animationDuration?: number; // For animation blocks - stores duration in seconds
  };
}

interface DynamicBlocksProps {
  blocks: Block[];
  onBlocksChange: (blocks: Block[]) => void;
}

export default function DynamicBlocks({ blocks, onBlocksChange }: DynamicBlocksProps) {
  // Block management functions for dynamic content creation
  const addBlock = () => {
    // Creates a new block with unique ID and default "text" type
    const newBlock: Block = {
      id: Date.now().toString(), // May want to change how these are generated later, but will be fine for now
      type: "text",
      content: {}
    };
    onBlocksChange([...blocks, newBlock]);
  };

  const removeBlock = (blockId: string) => {
    // Removes a block from the blocks array by ID
    onBlocksChange(blocks.filter(block => block.id !== blockId));
  };

  const updateBlockType = (blockId: string, newType: BlockType) => {
    // Updates block type and resets content when type changes
    onBlocksChange(blocks.map(block => 
      block.id === blockId 
        ? { ...block, type: newType, content: {} }
        : block
    ));
  };

  const updateBlockContent = (blockId: string, field: string, value: string | number) => {
    // Updates specific content fields for a block (text, imageUrl, etc.)
    onBlocksChange(blocks.map(block => 
      block.id === blockId 
        ? { ...block, content: { ...block.content, [field]: value } }
        : block
    ));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
          Content Blocks
        </label>
        <button
          type="button"
          onClick={addBlock}
          className="px-3 py-1 text-sm bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
        >
          + Add Block
        </button>
      </div>
      
      {blocks.map((block, index) => (
        <div key={block.id} className="border border-gray-200 rounded-lg p-4 mb-3">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium text-gray-700">Block {index + 1}</h4>
            <button
              type="button"
              onClick={() => removeBlock(block.id)}
              className="text-red-600 hover:text-red-800 text-sm"
            >
              Remove
            </button>
          </div>

          {/* Component Type Selector - determines which input fields are shown */}
          <div className="mb-3">
            <label className="block text-xs font-medium mb-1 text-gray-600">
              Block Type
            </label>
            <select
              value={block.type}
              onChange={(e) => updateBlockType(block.id, e.target.value as BlockType)}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 text-gray-800"
            >
              <option value="text">Text</option>
              <option value="image">Image</option>
              <option value="animation">Animation</option>
            </select>
          </div>

          {/* Conditional Input Fields Based on Block Type - shows different fields based on selected type */}
          {block.type === "text" && (
            <div>
              <label className="block text-xs font-medium mb-1 text-gray-600">
                Text Content
              </label>
              <textarea
                value={block.content.text || ""}
                onChange={(e) => updateBlockContent(block.id, "text", e.target.value)}
                placeholder="Enter text content..."
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
            </div>
          )}

          {block.type === "image" && (
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium mb-1 text-gray-600">
                  Image URL
                </label>
                <input
                  type="url"
                  value={block.content.imageUrl || ""}
                  onChange={(e) => updateBlockContent(block.id, "imageUrl", e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1 text-gray-600">
                  Alt Text
                </label>
                <input
                  type="text"
                  value={block.content.imageAlt || ""}
                  onChange={(e) => updateBlockContent(block.id, "imageAlt", e.target.value)}
                  placeholder="Describe the image..."
                  className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}

          {block.type === "animation" && (
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium mb-1 text-gray-600">
                  Animation Type
                </label>
                <select
                  value={block.content.animationType || ""}
                  onChange={(e) => updateBlockContent(block.id, "animationType", e.target.value)}
                  className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 text-gray-800"
                >
                  <option value="">Select animation...</option>
                  <option value="fadeIn">Fade In</option>
                  <option value="slideIn">Slide In</option>
                  <option value="bounce">Bounce</option>
                  <option value="rotate">Rotate</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1 text-gray-600">
                  Duration (seconds)
                </label>
                <input
                  type="number"
                  value={block.content.animationDuration || ""}
                  onChange={(e) => updateBlockContent(block.id, "animationDuration", parseFloat(e.target.value) || 0)}
                  placeholder="1.5"
                  min="0.1"
                  step="0.1"
                  className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Empty state when no blocks are added */}
      {blocks.length === 0 && (
        <div className="text-center py-8 text-gray-500 text-sm">
          No blocks added yet. Click "Add Block" to get started.
        </div>
      )}
    </div>
  );
}

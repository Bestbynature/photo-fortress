// tests/imageController.test.ts
import { expect } from 'chai';
import sinon from 'sinon';
import { Request, Response } from 'express';
import { getImage } from '../src/controllers/imageController';

describe('Image Controller', () => {
  describe('getImage', () => {
    it('should return image URL when image is found', async () => {
      // Mock Request and Response objects
      const req = {} as Request;
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      } as unknown as Response;

      // Mock Image.findOne() function to return a mock image
      const mockImage = { path: 'mock/image.jpg' };
      const Image = { findOne: sinon.stub().resolves(mockImage) };

      // Call getImage controller function
      await getImage(req, res);

      // Assert that the response status is 200 and contains the expected image URL
      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWithMatch({ imageUrl: 'http://localhost/mock/image.jpg' })).to.be.true;
    });

    it('should return error when no image is found', async () => {
      // Mock Request and Response objects
      const req = {} as Request;
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      } as unknown as Response;

      // Mock Image.findOne() function to return null (no image found)
      const Image = { findOne: sinon.stub().resolves(null) };

      // Call getImage controller function
      await getImage(req, res);

      // Assert that the response status is 404 and contains the expected error message
      expect(res.status.calledWith(404)).to.be.true;
      expect(res.json.calledWithMatch({ error: 'No image found' })).to.be.true;
    });

    // Add more test cases as needed
  });
});
